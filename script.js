// --- DOM Elements ---
const landingPage = document.getElementById('landing-page');
const gameWrapper = document.getElementById('game-wrapper');
const gameContainer = document.getElementById('game-container');
const levelImageContainer = document.getElementById('level-image-container');
const levelImage = document.getElementById('level-image');
const startButton = document.getElementById('start-button');
const gameOutput = document.getElementById('game-output');
const promptInput = document.getElementById('prompt-input');
const playerLevelValueDisplay = document.getElementById('player-level-value');
const playerXpDisplay = document.getElementById('player-xp');
const xpToNextLevelDisplay = document.getElementById('xp-next');
const playerLocationDisplay = document.getElementById('player-location');
const promptHelpButton = document.getElementById('prompt-help-button');

// --- Content Loading Status ---
let contentLoaded = false;

// --- Game State (Full Definitions Included & Refactored for Education) ---
let gameState = {
    currentLevel: 0, 
    currentChallenge: 0, 
    currentChallengeStage: 0, 
    challengeContext: {}, 
    playerXP: 0, 
    playerLevel: 1, 
    xpToNextLevel: 50, 
    playerAbilities: [], 
    hintUsedInChallenge: false, 
    lastFailedPrompt: null,
    levels: [
        // Level 0: Placeholder
        {},
        // Level 1: Hall of First Words (Clarity: Action + Target)
        {
            id: 1, name: "The Hall of First Words",
            description: "You stand in a long, dimly lit hall. Ancient stone, cool beneath your fingers, seems to absorb sound. The air is heavy, still. This place is old, primitive in its understanding. It demands **Clarity**. Only direct, unambiguous commands register here. Think simple structure: **[Action] [Target]**. Vague desires echo into nothing.",
            challenges: [
                { id: "1-0", description: "Before you stands a sturdy wooden door. Heavy hinges are coated in rust. It seems slightly ajar, perhaps stuck on the uneven stone floor.",
                  promptTask: "Goal: Open the door.\nLesson: Basic Command Structure.\nCraft a **clear command** using a simple **[Action]** verb and the specific **[Target]** object.",
                  solveConditions: { keywords: ["push", "open"], target: "door", complexityLimit: 3, negativeKeywords: ["pull", "kick", "destroy", "break", "bash"] },
                  successMessage: "Following your precise command, you push the door. With a groan of protesting wood and scraping stone, it swings open, revealing the path forward.",
                  feedback: { vague: "Clarity Error: Command unclear. Specify both an [Action] and a [Target].", wrongAction: "Syntax Error: '{action}' is not the effective [Action] here. How might you simply open it?", noTarget: "Clarity Error: Specify the [Target] of your action. What do you want to {action}? (e.g., '{action} door').", wrongTarget: "Target Error: There is no '{target}' here. Focus your command on the 'door'.", tooComplex: "Simplicity Required: Command too complex for this hall. Use the basic [Action] [Object] structure (e.g., 'push door').", negativeAction: "Ineffective Action: Brute force ('{action}') won't work. A simpler action is needed." },
                  xpReward: 10, nextChallenge: 1
                },
                { id: "1-1", description: "Further down the hall, embedded in the wall, is a large, **rusty lever**. It's currently fixed in the **'UP' position**. Dust motes dance in a faint light beam illuminating it.",
                  promptTask: "Goal: Activate the lever mechanism.\nLesson: Correct Action Verb.\nFormulate a **direct command** using the appropriate **[Action]** for a lever in this position and the specific **[Target]**. ",
                  solveConditions: { keywords: ["pull", "move", "activate"], target: "lever", complexityLimit: 3, negativeKeywords: ["push"] },
                  successMessage: "Straining, you pull the lever. It grinds downwards with a shower of rust flakes. A low rumble echoes from deeper in the dungeon.",
                  feedback: { vague: "Clarity Error: Command unclear. State [Action] + [Object].", wrongAction: "Syntax/Logic Error: '{action}' is not the right verb for a lever in the UP position.", negativeAction: "Logic Error: Pushing an UP lever achieves nothing. It needs to be pulled.", noTarget: "Clarity Error: Specify the [Target]. What do you want to {action}? (e.g., '{action} lever').", wrongTarget: "Target Error: You don't see a '{target}' here. Focus on the 'lever'.", tooComplex: "Simplicity Required: Use [Action] [Lever]." },
                  xpReward: 15, nextChallenge: null
                }
            ],
            completionMessage: "The rumbling subsides. You've mastered basic command syntax. An archway glows, leading to The Echoing Caverns. Mere clarity won't suffice there; **Specificity** is key when options multiply.",
            nextLevel: 2
        },
        // Level 2: Echoing Caverns (Specificity, Disambiguation)
        {
            id: 2, name: "The Echoing Caverns",
            description: "You step into a vast, damp cavern. Your footsteps echo eerily, whispers seeming to twist your thoughts. Water drips. Strange, faintly glowing crystals pulse on the walls. A shimmering Echoing Guide drifts nearby. This place punishes ambiguity. **Precision** and **descriptive details** are vital to be understood.",
            npcs: [ { name: "Echoing Guide", aliases: ["guide", "figure", "ghost", "spirit"], description: "A shimmering figure of captured sound.", dialogue: { greet:"It turns its indistinct head... Wisps of light drift...", ask_crystals:"'Resonance requires clarity... Specify the light... Use descriptive words...'", ask_darkness:"'Dark consumes... light reveals... Be specific about *where* light is needed...'", ask_path:"'Specificity illuminates... Vague thoughts obscure... Describe precisely what you seek.'", generic:"Shimmering silence... Awaiting a precise instruction." } } ],
            challenges: [
                { id: "2-0", description: "Three similar-looking crystals pulse on the far wall: one is **BRIGHT BLUE**, one is **DIM RED**, and another **BRIGHT BLUE** is nearby. They seem connected to a mechanism above a chasm.",
                  promptTask: "Goal: Activate the bridge mechanism.\nLesson: Disambiguation with Features.\nInstruct the system to interact with the correct crystal. Use **specific descriptive features** (color, brightness) in your prompt to avoid ambiguity.",
                  solveConditions: { keywords: ["touch", "activate", "press", "use"], target: "crystal", requiredFeatures: ["dim", "red"], disallowedFeatures: ["blue", "bright"] },
                  successMessage: "Focusing on its specific features, you touch the DIM RED crystal. It pulses warmly... bridge forms.",
                  feedback: { vague: "Ambiguity Detected: Interact how and with which crystal? Be specific.", wrongAction: "Ineffective Action: '{action}' doesn't seem useful for the crystals.", noTarget: "Specify Target: What do you want to {action}? (e.g., 'touch crystal')", wrongTarget: "Target Error: No '{target}' here. Focus on the crystals.", missingSpecificity: "Ambiguity Detected: Multiple crystals exist. Specify *which one* using its **color and brightness** (e.g., 'dim red crystal').", wrongCrystal: "Incorrect Specificity: Touched the {features} crystal. Nothing happens. That's not the right one.", ambiguousTarget: "Ambiguity Detected: Which {target} crystal? Specify color AND brightness.", tooComplex: "Overly Complex: Focus on [Action] + [Specific Features] + [Object]." },
                  xpReward: 25, nextChallenge: 1 },
                { id: "2-1", description: "You cross the narrow bridge. The cavern deepens into shadow. You can barely discern a **dark alcove** on the other side. The Echoing Guide drifts closer, its light faint.",
                  promptTask: "Goal: See inside the alcove.\nLesson: Specifying Context and Secondary Targets.\nCraft a prompt asking the **[NPC Name]** (Guide) to perform an **[Action/Concept]** (use light) on the **[Specific Area]** (alcove/darkness).",
                  solveConditions: { keywords: ["ask", "tell", "command", "request", "instruct"], target: "guide", requiredContext: ["light", "illuminate", "shine", "brighten"], secondaryTarget: ["alcove", "darkness", "shadow", "path"] },
                  hint: "Combine elements: Ask the [NPC] to use [Concept] on the [Place]. Structure helps!",
                  successMessage: "You clearly instruct the Guide to illuminate the alcove. It drifts forward, pulsing brighter, revealing intricate runes!",
                  feedback: { vague: "Command Unclear: What do you want to happen?", wrongAction: "Interaction Error: The Guide doesn't respond to '{action}'. Try asking or telling it.", noTarget: "Specify Target NPC: Who do you want to {action}? (Specify the 'guide').", wrongTarget: "Invalid Target: Can't '{action}' {target} that way.", missingContext: "Missing Action Context: What do you want the Guide to *do*? (e.g., 'use light', 'illuminate').", missingSecondaryTarget: "Missing Light Target: Where should the Guide use its light? Specify the target area (e.g., 'the alcove').", guideConfused: "Ambiguity Detected: Guide shimmers, confused. Ensure prompt includes: [Ask Guide] + [Use Light Action] + [Target Area]." },
                  xpReward: 30, nextChallenge: 2 },
                 { id: "2-2", description: "The runes revealed by the Guide's light glow: **Triangle, Circle, Square, Triangle**. Below them is a stone **panel** with four unlit depressions matching these shapes.",
                   promptTask: "Goal: Activate the panel.\nLesson: Providing Sequential Information.\nFormulate a command to activate the panel by pressing the shapes in the **exact sequence** shown.",
                   solveConditions: { keywords: ["press", "push", "touch", "activate", "input"], target: "runes|panel|sequence|shapes", requiredSequence: ["triangle", "circle", "square", "triangle"], sequenceStrictOrder: true },
                   successMessage: "Following the sequence precisely, you press Triangle, then Circle, then Square, then Triangle. The panel clicks, and a section of wall grinds open!",
                   feedback: { vague: "Specify Action, Target, and the full Sequence.", wrongAction: "'{action}' doesn't work on the panel.", noTarget: "Interact with what? (panel/shapes)", wrongTarget: "Can't {action} '{target}'. Focus on the panel.", incorrectSequence: "Sequence Error: Pressed shapes, nothing. That combination wasn't correct.", incompleteSequence: "Sequence Error: You didn't specify all four shapes required.", wrongOrder: "Sequence Error: Shapes mentioned, but not in the correct order (Triangle -> Circle -> Square -> Triangle)." },
                   xpReward: 35, nextChallenge: null }
            ],
            completionMessage: "The wall opens! Specificity is powerful. Ahead lies The Chamber of Iteration. There, you won't always succeed on the first try. You must learn to **interpret feedback and refine your prompts iteratively**.",
            nextLevel: 3
        },
        // Level 3: The Chamber of Iteration (Parameters, Refinement)
        {
            id: 3, name: "The Chamber of Iteration", description: "This chamber hums with latent energy. Wires snake across the floor, connecting flickering consoles and devices mid-operation. The air buzzes, reacting to your intent. Devices here require **precise parameters** (like intensity, duration, topic). Vague inputs yield weak results. Heed the **feedback loop**; use it to **iterate and refine** your prompts.",
            npcs: [ { name: "Sparking Construct", aliases: ["construct", "robot", "machine"], description: "Metallic construct putters around, emitting sparks.", dialogue: { greet: "Whirs.", ask_consoles: "Points... 'Interface requires parameters... Be explicit!'", ask_energy: "Sparks... 'Unstable... requires modulation... Specify intensity... Specify direction...'", ask_help: "Diagram: Input -> Refine -> Output. 'Observe feedback. Adjust input.'", generic: "Beeps." } } ],
            challenges: [
                { id: "3-0", description: "A console flickers: 'Energy Flow'. Needs manual activation.", promptTask: "Goal: Activate console.\nLesson: Providing Necessary Parameters (Intensity).\nChannel energy into the console. The Construct mentioned modulation; specify a **strong intensity** parameter in your command.", solveConditions: { keywords: ["channel", "activate", "send", "direct", "focus"], target: "energy|power", requiredParams: { intensity: ["strong", "high", "powerful", "intense"] }, negativeKeywords: ["weak", "low", "trickle"] }, partialSuccessFeedback: { missing_intensity: "Feedback Loop: Attempted channel, weak trickle. Console barely reacts. **Refine prompt**: Specify the required *intensity* parameter (e.g., 'strong')." }, hint: "Console needs power. Add an *intensity* parameter like 'strong' or 'high' to your command.", successMessage: "Channel STRONG energy! Console flares to life!", feedback: { vague: "Specify action, target, and intensity.", wrongAction: "Doesn't affect flow.", noTarget: "What to {action}?", wrongTarget: "Can't {action} '{target}'.", negativeAction: "Parameter Error: Weak pulse insufficient. Specify *strong* intensity.", tooComplex: "Focus: Action, Intensity Parameter, Target.", missingParams: "Parameter Missing: Specify the energy *intensity* (e.g., 'strong')." }, xpReward: 40, nextChallenge: 1 },
                {
                    id: "3-1",
                    description: "The schematics show a network of energy conduits. Query interface: 'ACCESS HISTORICAL LOGS'. Thousands of entries flicker, a sea of data.",
                    promptTask: "Goal: Find relevant log entry.\nLesson: Using Parameters for Filtering (Topic & Timeframe).\nQuery the logs for specific **system events** (like 'overload', 'error') within a **recent timeframe** (like 'last cycle', 'recent'). Provide both **topic** and **timeframe** parameters to narrow the results.",
                    solveConditions: {
                        keywords: ["search", "find", "query", "access", "get", "show", "display"],
                        target: "logs|history|data",
                        requiredParams: {
                            topic: ["overload", "surge", "failure", "error"], // Dungeon system events
                            timeframe: ["recent", "last cycle", "yesterday", "past hour"] // Simple timeframes
                        }
                    },
                    partialSuccessFeedback: {
                         missing_topic: "Feedback Loop: Accessing... Thousands found. Filter needed! **Refine prompt**: Add a specific system event **topic** (e.g., `overload`, `failure`).",
                         missing_timeframe: "Feedback Loop: Searching '{topic}' logs... Many results. Filter needed! **Refine prompt**: Add a specific **timeframe** (e.g., `recent`, `last cycle`)."
                    },
                    hint: "The query needs parameters to filter the vast logs: *what* kind of system event (topic) & *when* it happened (timeframe). Check the task description for examples, like 'query recent logs for errors'.", // Slightly improved hint
                    successMessage: "Querying RECENT logs for OVERLOAD events... Match found! Log #771: 'Major overload detected in Sector Gamma. Rerouting required.' A map highlights Sector Gamma.",
                    // *** REVISED FEEDBACK ***
                    feedback: {
                        vague: "Specify what logs or information you are trying to access, including required filters.",
                        wrongAction: "That's not a valid command to query the logs. Use verbs like 'find', 'query', 'search'.",
                        noTarget: "What data source do you want to {action}? (Specify 'logs' or 'history').",
                        wrongTarget: "Cannot query '{target}'. Use 'logs' or 'history'.",
                        tooComplex: "Query structure unclear. Try: [Action] [Timeframe?] [Topic?] [Target].",
                        // Specific, educational feedback for parameter issues:
                        missingParams: "Parameter Error: Query requires BOTH a **topic** parameter AND a **timeframe** parameter.\nValid Topics: `overload`, `surge`, `failure`, `error`.\nValid Timeframes: `recent`, `last cycle`, `yesterday`, `past hour`.",
                        incorrectParams: "Parameter Error: The topic or timeframe provided isn't recognized for these system logs.\nUse **topics** like `overload` or `failure`.\nUse **timeframes** like `recent` or `last cycle`.",
                        // Keep partial feedback keys linked to specific messages in partialSuccessFeedback
                        missing_topic: "Feedback Loop: Accessing... Thousands found. Filter needed! **Refine prompt**: Add a specific system event **topic** (e.g., `overload`, `failure`).", // Referenced by logic
                        missing_timeframe: "Feedback Loop: Searching '{topic}' logs... Many results. Filter needed! **Refine prompt**: Add a specific **timeframe** (e.g., `recent`, `last cycle`)." // Referenced by logic
                    },
                    // *** END REVISED FEEDBACK ***
                    xpReward: 45,
                    nextChallenge: 2
                },
                { id: "3-2", description: "Sector Gamma: damaged stabilizer. Panel inputs: 'Rotation Speed', 'Alignment Angle'. Requires precise simultaneous setting.", promptTask: "Goal: Stabilize conduit.\nLesson: Handling Multiple Parameters.\nConfigure the stabilizer using **multiple parameters** in one command: set both **speed** (slow) and **angle** (45 degrees). Both are needed for it to function.", solveConditions: { keywords: ["set", "adjust", "configure", "rotate", "align"], target: "stabilizer|controls|panel", requiredParams: { speed: ["slow", "minimum", "careful"], angle: ["forty-five degrees", "45 degrees", "diagonal"] } }, partialSuccessFeedback: { missing_speed: "Feedback Loop: Angle adjusted, spins erratically. Needs control! **Refine prompt**: Add rotation *speed* parameter.", missing_angle: "Feedback Loop: Speed set, alignment off. Needs direction! **Refine prompt**: Add *angle* parameter." }, hint: "Need speed & angle parameters together. E.g., 'set stabilizer speed slow angle 45 degrees'.", successMessage: "Set speed SLOW, angle 45 DEGREES. Conduit hums!", feedback: { vague: "Configure what?", wrongAction: "Doesn't affect controls.", noTarget: "What to {action}?", wrongTarget: "Cannot configure '{target}'.", tooComplex: "Try: Action [Obj] Param1 [Val1] Param2 [Val2].", missingParams: "Parameters Missing: Specify both *speed* and *angle* in your command." }, xpReward: 50, nextChallenge: null }
            ],
            completionMessage: "Energy stabilized! You've learned to refine prompts using parameters and feedback loops. The 'Prompt Nexus' awaits, where prompts shape reality on a larger scale, demanding careful consideration of **perspective, output structure, and constraints**.",
            nextLevel: 4
        },
        // Level 4: The Prompt Nexus (Persona, Format, Constraints)
        {
            id: 4, name: "The Prompt Nexus", description: "Vast, crystalline chamber. Data streams flow between nodes. A serene Archivist floats nearby. This is the Nexus, where raw concepts are retrieved and shaped. Success requires framing prompts with **Perspective (Role/Persona)** to define viewpoint, defining clear **Output Formats** for usability, and sometimes applying **Constraints** to exclude noise or irrelevant information.",
            npcs: [ { name: "Nexus Archivist", aliases: ["archivist", "librarian", "keeper"], description: "Being woven from light...", dialogue: { greet:"'Welcome, Crafter... Precision and perspective key.'", ask_nexus:"'Nexus connects concepts... Prompts shape connections.'", ask_persona:"'Who asks determines what is found. Adopt perspective... Define your role to focus retrieval.'", ask_format:"'Clarity demands structure... Specify the desired form. Raw data is useless without shape.'", ask_constraints:"'Exclusion refines focus... Knowing what *not* to seek shapes the result as much as knowing what you *do* seek.'", generic:"'Awaiting structured query.'" } } ],
            challenges: [
                { id: "4-0", description: "Node pulses erratically... breach data. Archivist: 'This requires context. Access logs from perspective of security analyst focusing on structural weaknesses.'", promptTask: "Goal: Get focused breach data.\nLesson: Using Persona/Role.\nAdopt the specified **Persona** ('security analyst') in your prompt to query the breach logs specifically for **structural weaknesses**. Frame your request as that role.", solveConditions: { keywords: ["access", "retrieve", "get", "show", "find", "report", "analyze"], target: "logs|breach logs|data|weaknesses|vulnerabilities", requiredPersona: ["security analyst", "structural expert", "defense auditor"], requiredKeywordsContext: ["structural", "weakness", "vulnerability"] }, hint: "Start prompt defining Role: 'As a security analyst,...' then request logs about structural weakness.", successMessage: "Adopting viewpoint... Node stabilizes: 'Breach Log #4B: Structural failure Sector Delta...'", feedback: { vague: "What logs, how?", wrongAction: "Not data access cmd.", noTarget: "What data?", wrongTarget: "Cannot access '{target}'.", missingPersona: "Perspective Shift Required: Define your **Role** (e.g., 'As a security analyst,...'). Who are you in this query?", wrongPersona: "Wrong Persona: That role doesn't provide this insight. Try 'security analyst' focus.", missingContext: "Specify Focus: Need logs related to 'structural weaknesses'.", tooComplex: "Simplify structure while keeping Role + Focus." }, xpReward: 60, nextChallenge: 1 },
                { id: "4-1", description: "Console shows energy: Gamma: 7.3 | Delta: 9.9 (unstable) | Epsilon: 4.1 | Zeta: 4.0.", promptTask: "Goal: Get a structured summary.\nLesson: Specifying Output Format.\nSummarize, listing only unstable/high (>7.0) sectors. Crucially, specify the output **Format** as a 'bulleted list' for clarity.", solveConditions: { keywords: ["summarize", "list", "report", "show", "display"], target: "readings|data|sectors|energy", requiredFormat: ["bulleted list", "bullet points", "as bullets", "list items"], requiredKeywordsContext: ["unstable", "high energy", "above 7", "over 7"] }, hint: "Ask for summary, filter 'high'/'unstable', specify format 'as a bulleted list'.", successMessage: "Requesting filtered data in specified format...\n* Delta: 9.9 (unstable)\n* Gamma: 7.3", feedback: { vague: "What with data?", wrongAction: "Not how summarize.", noTarget: "Summarize what?", missingFormat: "Format Unspecified: How should data be displayed? Add 'as bulleted list' or similar to control the output structure.", missingFilter: "Filter Missing: Got all readings. Add filter for 'high'/'unstable'.", wrongFormat: "Wrong Format: Needs 'bulleted list' or similar.", tooComplex: "Focus: Action, Target, Filter, Format." }, xpReward: 65, nextChallenge: 2 },
                { id: "4-2", description: "Terminal shows destinations: volcano, forest, city, tundra, void.", promptTask: "Goal: Get valid options.\nLesson: Using Negative Constraints.\nList the safe portal destinations by using a **Negative Constraint** to explicitly **exclude** 'volcanic' and 'void' locations. Tell the system what NOT to include.", solveConditions: { keywords: ["plot", "list", "show", "identify", "find", "determine"], target: "course|destinations|options|portals|safe", negativeConstraint: { exclude: ["volcano", "volcanic", "void", "between dimensions"] } }, hint: "State goal (list destinations), add constraint like 'exclude volcano and void'.", successMessage: "Specifying exclusions... 'Safe Destinations: Serene Forest, Bustling City, Icy Tundra.'", feedback: { vague: "Plot/list what?", wrongAction: "Doesn't plot/list.", noTarget: "What destinations?", missingExclusion: "Constraint Missing: Prompt needs to explicitly 'exclude' or 'avoid' the dangerous options (volcano, void).", tooComplex: "Clear: Action, Target, Exclusions." }, xpReward: 70, nextChallenge: null }
            ],
            completionMessage: "Adeptly navigated Nexus! Perspective, Format, Constraints mastered. The Synthesis Core demands more; you must **combine multiple techniques** into singular, powerful prompts.",
            nextLevel: 5
        },
        // Level 5: The Synthesis Core
        {
            id: 5, name: "The Synthesis Core", description: "Chamber resonating power. Conduits converge on Core. Interface flickers. This is where complex prompts are **synthesized**. Success requires expertly **combining multiple techniques** (Persona, Parameters, Format, Context, Constraints) into a single, coherent instruction to achieve a specific goal.",
            npcs: [ { name: "Core Interface", aliases: ["core", "interface", "console", "crystal"], description: "Smooth panel...", dialogue: { greet: "'Awaiting instruction.'", ask_core: "'Core integrates & synthesizes... Provide all necessary elements.'", ask_power: "'Specify desired output with all required facets.'", generic: "'Awaiting valid command.'" } } ],
            challenges: [
                { id: "5-0", description: "Core shows raw data: '...Gamma stable... Delta high... Epsilon offline... Anomaly Zeta...'", promptTask: "**Synthesize**: As Lead Technician (Persona), generate diagnostic report (Task) for sectors with 'offline'/'anomaly' (Context/Filter), as numbered list (Format). All elements must be present.", solveConditions: { keywords: ["request", "generate", "create", "get", "diagnostic", "report", "status"], target: "sectors|report|diagnostics", requiredPersona: ["lead technician", "senior engineer", "chief diagnostician"], requiredFormat: ["numbered list", "ordered list"], requiredKeywordsContext: ["offline", "anomaly"], }, hint: "Combine elements learned: Define Role -> State Task -> Add Filter -> Specify Format.", successMessage: "Acknowledged. Generating report:\n1. Epsilon: Offline\n2. Zeta: Anomaly", feedback: { vague: "Specify report details.", wrongAction: "Doesn't generate report.", noTarget: "Report for *what*?", missingPersona: "Synthesis Fail: Missing Persona ('As a Lead Technician...').", missingFormat: "Synthesis Fail: Missing Format ('as numbered list').", missingFilter: "Synthesis Fail: Missing Filter ('only offline or anomaly').", tooComplex: "Structure carefully: Role->Action->Target->Filter->Format." }, xpReward: 80, nextChallenge: 1 },
                { id: "5-1", description: "Core glows softly. Recall Echoing Caverns.", promptTask: "**Creative Generation**: Instruct Core write short, 4-line poem (Parameters) about feeling lost (Tone/Implied) in Echoing Caverns (Topic). Control the output's form and content precisely.", solveConditions: { keywords: ["write", "generate", "create", "compose"], target: "poem|verse|rhyme", requiredContext: ["echoing caverns", "caverns", "lost"], requiredParams: { length: ["short", "four-line", "4-line", "brief"] } }, hint: "Action (write), Type (poem), Topic (Caverns/lost), Length (4 lines).", successMessage: "Generating...\n\n*Damp stone whispers...*", feedback: { vague: "Generate what?", wrongAction: "Try 'write'/'generate'.", noTarget: "Generate *what*? (poem?)", missingTopic: "Creative Fail: Specify Topic ('Echoing Caverns' / 'lost').", missingParams: "Creative Fail: Specify Parameters (length 'four lines').", missing_length: "Creative Fail: Specify length ('four lines').", tooComplex: "Focus: Action, Length, Type, Topic." }, xpReward: 85, nextChallenge: 2 },
                 { id: "5-2", stages: [ // Contextual Follow-up
                        { stageNum: 0, description: "Interface shows Crafter records. Find 'The Wanderer'.", promptTask: "Perform initial query for info about 'The Wanderer'.", solveConditions: { keywords: ["find", "search", "query", "locate", "info", "data", "records"], target: "wanderer|crafter", }, hint: "Direct query for 'The Wanderer'.", successMessage: "Querying... Found entry. Status: 'Lost Gamma'. Fragments: [Technique Fragments | Personal Logs | Trajectory Data]. **Use this context for your next prompt.**", feedback: { vague: "...", wrongAction: "...", noTarget: "...", tooComplex: "..." }, nextStage: 1 },
                        { stageNum: 1, description: "Awaits choice to decrypt for 'Wanderer': [Technique Fragments | Personal Logs | Trajectory Data]", promptTask: "**Follow-up** using context: Choose one fragment type from the previous response to decrypt. Reference the output.", solveConditions: { keywords: ["decrypt", "show", "access", "choose", "select", "get"], target: "technique fragments|personal logs|trajectory data", }, hint: "Use info from last response. 'decrypt [fragment type]'.", successMessage: "Decrypting '{target}'... Recovered: '...beware feedback loop...'", feedback: { vague: "Decrypt/access what?", wrongAction: "Not decryption command.", noTarget: "Context Fail: Which fragment type from previous options?", wrongTarget: "Context Fail: '{target}' not one of the options provided.", tooComplex: "Simple: Action, Fragment Type." }, nextStage: null }
                    ], xpReward: 90, nextChallenge: null }
            ],
            completionMessage: "Core hums. Synthesis achieved! But crafting is only half the battle. The Observatory of Intent awaits, demanding focus on **frameworks for structure, critical evaluation of output, and aligning prompts with true purpose**.",
            nextLevel: 6
        },
        // Level 6: Observatory of Intent
        {
            id: 6, name: "Observatory of Intent", description: "High-domed chamber. Constellations of thought swirl above. Lenses project data. Celestial Scrivener observes. 'You wield techniques,' the Scrivener intones, 'but mastery lies in **Intent**. Why this prompt? What result serves your goal? Use **Frameworks** like ROLE-TASK-FORMAT for reliable structure, then **Evaluate** the output critically. Is it accurate, complete, relevant?'",
            npcs: [ { name: "Celestial Scrivener", aliases: ["scrivener", "observer", "master"], description: "Ancient being...", dialogue: { greet: "'Crafter... Do you grasp *intent*? The framework?'", ask_intent: "'Prompt without intent is rudderless. What is your Goal? Your Role? The desired Format? Define these.'", ask_framework: "'Frameworks (like Role-Task-Format, or more complex ones) provide reliable blueprints. Structure prevents ambiguity.'", ask_evaluation: "'Crucially, you must judge the result. Is it correct? Complete? *Useful*? If not, refine your prompt's intent or structure.'", generic: "'Observe the flow of intent and information.'" } } ],
            challenges: [
                { id: "6-0", description: "Scrivener points to chaotic projection: schematics, energy fluctuations, breach data.", promptTask: "**Synthesize & Structure**: As Overseer (Role), generate security report (Task) identifying top 3 vulnerable sectors (Context: energy & history), as numbered list (Format), excluding 'offline' (Constraint). Demonstrate structured intent.", solveConditions: { keywords: ["generate", "create", "report", "analyze", "identify"], target: "report|vulnerability|sectors", requiredPersona: ["dungeon overseer", "overseer"], requiredFormat: ["numbered list", "ordered list"], negativeConstraint: { exclude: ["offline"] }, requiredKeywordsContext: ["vulnerable", "breach risk", "high energy", "fluctuations", "past breach", "history", "top 3", "most"] }, hint: "Apply all techniques. Structure clearly following a logical flow: Role -> Task -> Criteria -> Format -> Constraints.", successMessage: "Generating report...\n1. Delta...\n2. Zeta...\n3. Beta...", feedback: { vague: "...", missingPersona: "Framework Fail: Missing Role. Define 'As Dungeon Overseer...'.", missingFormat: "Framework Fail: Missing Format. Specify 'as numbered list'.", missingExclusion: "Framework Fail: Missing Constraint. Add 'exclude offline'.", missingCriteria: "Framework Fail: Missing Context/Criteria. Specify 'based on energy and history', 'top 3'.", tooComplex: "Structure unclear. Follow Role->Task->Criteria->Format->Constraints." }, xpReward: 100, nextChallenge: 1 },
                 { id: "6-1", description: "Scrivener nods. 'Formalize. Use R-T-F: ROLE-TASK-FORMAT.'", promptTask: "Use the **explicit Framework labels** ('ROLE:', 'TASK:', 'FORMAT:') to generate maintenance instructions (stabilize Gamma conduit, for junior tech, checklist format).", solveConditions: { requiredStructure: { labels: ["role:", "task:", "format:"] }, personaInRole: ["maintenance supervisor", "lead engineer", "senior tech"], taskDefinition: ["stabilize conduit", "sector gamma", "maintenance", "instructions", "junior technician", "jr tech"], formatInFormat: ["checklist", "steps", "step-by-step", "numbered steps"], }, hint: "Literally type labels. ROLE: Supervisor... TASK: Stabilize Gamma for junior... FORMAT: checklist.", successMessage: "Framework recognized...\n**Sector Gamma...**\n- [ ] Verify...", feedback: { vague: "R-T-F needs definitions.", missingStructure: "Framework Fail: Use explicit 'ROLE:', 'TASK:', 'FORMAT:' labels.", missingRoleContent: "Framework Fail: Define role after 'ROLE:'.", missingTaskContent: "Framework Fail: Describe task after 'TASK:'.", missingFormatContent: "Framework Fail: Specify format after 'FORMAT:'.", incorrectContent: "Framework Content Error: Check details for Role/Task/Format." }, xpReward: 110, nextChallenge: 2 },
                 { id: "6-2", stages: [ // Output Evaluation
                        { stageNum: 0, description: "Scrivener sighs... Projector shows vague text:", simulatedOutput: "'The exit is a large opening... Probably.'", promptTask: "**Evaluate Output**: Identify >= 2 specific flaws in the simulated text (e.g., vague, lacks detail, uncertain?).", solveConditions: { keywords: ["identify", "critique", "find", "point out", "analyze", "list"], target: "flaws|problems|issues|output|description", requiredKeywordsContext: ["vague", "unclear", "lacks detail", "no specifics", "uncertain", "ambiguous", "unhelpful", "probably"] }, hint: "Analyze text. What's bad? Use 'vague', 'lacks detail' etc.", successMessage: "Critique acknowledged... Correct. Now, **re-prompt** to fix these flaws?", feedback: { vague: "...", noTarget: "...", missingFlaws: "Evaluation Fail: Identify specific problems ('vague', 'uncertain').", notEnoughFlaws: "Evaluation Fail: Identify at least two flaws.", wrongTarget: "Critique the provided text." }, nextStage: 1 },
                        { stageNum: 1, description: "Scrivener awaits improved prompt. Exit: runes (TCS T), snowy peaks.", promptTask: "**Refine Prompt**: Write new prompt for *vivid, detailed* exit description (3-4 sentences), including runes & peaks. Address the flaws you identified (vagueness, lack of detail, uncertainty).", solveConditions: { keywords: ["describe", "generate", "write", "detail", "create"], target: "exit|dungeon exit|opening", requiredKeywordsContext: [ "vivid", "detailed", "specific", "rune", "triangle", "circle", "square", "snowy peaks", "snow", "mountain", "outside", "cold air" ], negativeKeywords: ["probably", "maybe", "rocks", "dark", "large opening"] }, hint: "'describe'... 'vivid'/'detailed'. Include runes, peaks. Avoid vague words.", successMessage: "Excellent refinement! Executing...\n'The dungeon exit is jagged...'", feedback: { vague: "...", missingQuality: "Refinement Fail: Ask for 'vivid'/'detailed'.", missingDetails: "Refinement Fail: Include known details (runes, peaks).", tooSimple: "Add more detail/descriptive words.", usedNegative: "Refinement Fail: Avoid vague/flawed words from bad output." }, nextStage: null }
                    ], xpReward: 120, nextChallenge: null }
            ],
            completionMessage: "Celestial Scrivener smiles. 'Intent, structure, refinement grasped. You are an Architect of Prompts!'\n\n*** You have completed PromptCraft Dungeon! ***",
            nextLevel: null
        },
    ]
};

// --- Save/Load Functionality ---
const SAVE_KEY = 'promptCraftDungeonSave';
let isAwaitingResetConfirmation = false;
function saveGame() { 
    if (gameState.currentLevel === 0) return; 
    
    try { 
        const stateToSave = { 
            playerLevel: gameState.playerLevel, 
            playerXP: gameState.playerXP, 
            xpToNextLevel: gameState.xpToNextLevel, 
            playerAbilities: gameState.playerAbilities, 
            currentLevel: gameState.currentLevel, 
            currentChallenge: gameState.currentChallenge, 
            currentChallengeStage: gameState.currentChallengeStage 
        }; 
        
        localStorage.setItem(SAVE_KEY, JSON.stringify(stateToSave)); 
        console.log("Game saved."); 
        
        // Also update UX components when game is saved
        if (window.promptVisualizer) {
            console.log(`Updating prompt visualizer from saveGame: Level ${gameState.playerLevel}`);
            // Force update to ensure templates are unlocked immediately
            promptVisualizer.forceUpdatePlayerLevel(gameState.playerLevel);
            promptVisualizer.updateContext(gameState.playerLevel, `${gameState.currentLevel}-${gameState.currentChallenge}`);
        }
    } catch (e) { 
        console.error("Save Err:", e); 
    } 
}
function loadGame() { 
    const saved = localStorage.getItem(SAVE_KEY); 
    if (!saved) return false; 
    
    try { 
        const loaded = JSON.parse(saved); 
        if (typeof loaded.currentLevel !== 'number' || loaded.currentLevel === 0 || !gameState.levels[loaded.currentLevel]?.name) { 
            console.warn("Invalid save. Clearing."); 
            localStorage.removeItem(SAVE_KEY); 
            return false; 
        } 
        
        Object.assign(gameState, loaded); 
        console.log("Game loaded successfully."); 
        
        // Update UX components with loaded game state
        if (window.promptVisualizer) {
            console.log(`Initializing prompt visualizer from loadGame: Level ${gameState.playerLevel}`);
            // Force update to ensure templates are unlocked immediately
            promptVisualizer.forceUpdatePlayerLevel(gameState.playerLevel);
            promptVisualizer.updateContext(gameState.playerLevel, `${gameState.currentLevel}-${gameState.currentChallenge}`);
        }
        
        return true; 
    } catch (e) { 
        console.error("Load Error:", e); 
        localStorage.removeItem(SAVE_KEY); 
        return false; 
    } 
}
/**
 * Resets the game by clearing saved data and reloading the page
 */
function resetGame() { 
  try { 
    localStorage.removeItem(SAVE_KEY); 
    displayOutput("Save cleared. Reloading...", 'feedback-good'); 
    setTimeout(() => window.location.reload(), 1500); 
  } catch (e) { 
    console.error("Reset Error:", e); 
  } 
}

// --- Core Game Functions ---
function displayOutput(text, type = 'description') { const p = document.createElement('p'); String(text).split('\n').forEach((ln, i) => { if (i > 0) p.appendChild(document.createElement('br')); p.appendChild(document.createTextNode(ln)); }); p.className = type; gameOutput.appendChild(p); gameOutput.scrollTop = gameOutput.scrollHeight; }
function updateStatusBar() { 
    const lvlData = gameState.levels[gameState.currentLevel]; 
    if (!lvlData) { 
        console.warn("updateStatusBar: invalid level", gameState.currentLevel); 
        return; 
    } 
    playerLevelValueDisplay.textContent = gameState.playerLevel; 
    playerXpDisplay.textContent = gameState.playerXP; 
    xpToNextLevelDisplay.textContent = gameState.xpToNextLevel; 
    playerLocationDisplay.textContent = lvlData?.name || "Unknown"; 
    
    // Update context for UX components
    if (window.promptVisualizer) {
        promptVisualizer.updateContext(gameState.currentLevel, `${gameState.currentLevel}-${gameState.currentChallenge}`);
    }
}
function levelUp() { 
    gameState.playerLevel++; 
    const excessXP = gameState.playerXP - gameState.xpToNextLevel; 
    gameState.xpToNextLevel = Math.floor(gameState.xpToNextLevel * 1.8); 
    gameState.playerXP = Math.max(0, excessXP); 
    
    displayOutput(`*** LEVEL UP! Level ${gameState.playerLevel}! ***`, 'xp-gain'); 
    
    let gained = null, type = 'command'; 
    if (gameState.playerLevel === 2 && !gameState.playerAbilities.includes('hint')) { 
        gameState.playerAbilities.push('hint'); 
        gained = 'Hint'; 
    } else if (gameState.playerLevel === 3 && !gameState.playerAbilities.includes('analyze')) { 
        gameState.playerAbilities.push('analyze'); 
        gained = 'Analyze'; 
    } else if (gameState.playerLevel === 4 && !gameState.playerAbilities.includes('specify_format')) { 
        gameState.playerAbilities.push('specify_format'); 
        gained = 'Specify Format'; 
        type = 'knowledge'; 
    } else if (gameState.playerLevel === 5 && !gameState.playerAbilities.includes('synthesize')) { 
        gameState.playerAbilities.push('synthesize'); 
        gained = 'Synthesis'; 
        type = 'knowledge'; 
    } else if (gameState.playerLevel === 6 && !gameState.playerAbilities.includes('frameworks')) { 
        gameState.playerAbilities.push('frameworks'); 
        gained = 'Framework Awareness'; 
        type = 'knowledge'; 
    } 
    
    if (gained) { 
        if (type === 'knowledge') 
            displayOutput(`Knowledge Gained: ${gained}!`, 'feedback-good'); 
        else 
            displayOutput(`Ability Unlocked: ${gained}! Type '${gained.toLowerCase()}'`, 'feedback-good'); 
    } 
    
    // Update UX components with new level
    if (window.promptVisualizer) {
        console.log(`Updating prompt visualizer with new level: ${gameState.playerLevel}`);
        // Use the force update function to ensure templates are unlocked immediately
        promptVisualizer.forceUpdatePlayerLevel(gameState.playerLevel);
        promptVisualizer.updateContext(gameState.playerLevel, `${gameState.currentLevel}-${gameState.currentChallenge}`);
    }
    
    // Save game state to ensure level is persisted
    saveGame();
    
    updateStatusBar(); 
    
    if (gameState.playerXP >= gameState.xpToNextLevel) 
        levelUp(); 
}
/**
 * Adds experience points to the player
 * @param {number} amount - The amount of XP to add
 */
function addXP(amount) { 
  if (amount <= 0) return; 
  gameState.playerXP += amount; 
  displayOutput(`+${amount} XP!`, 'xp-gain'); 
  if (gameState.playerXP >= gameState.xpToNextLevel) {
    levelUp();
  } else {
    updateStatusBar();
  }
}

/**
 * Evaluates the player's prompt against the current challenge conditions
 * @param {string} prompt - The player's input text
 * @returns {Object} Result object with success status and feedback
 */
function evaluatePrompt(prompt) {
    const level = gameState.levels[gameState.currentLevel]; if (!level?.challenges || gameState.currentChallenge >= level.challenges.length) return failure('noChallenge');
    let challenge = level.challenges[gameState.currentChallenge]; let conditions = null, feedback = null; let isMultiStage = !!challenge.stages, currentStageData = null;
    if (isMultiStage) { currentStageData = challenge.stages.find(s => s.stageNum === gameState.currentChallengeStage); if (!currentStageData) { console.error(`Eval Stage Err ${gameState.currentChallengeStage}`); return failure('error'); } conditions = currentStageData.solveConditions; feedback = currentStageData.feedback; } else { conditions = challenge.solveConditions; feedback = challenge.feedback; }
    feedback = feedback || {}; const lowerPrompt = prompt.toLowerCase().trim(); const cleanedLowerPrompt = lowerPrompt.replace(/[.,!?;:]+$/, ''); const words = cleanedLowerPrompt.split(/\s+/);
    gameState.lastFailedPrompt = cleanedLowerPrompt; if (!cleanedLowerPrompt) return failure('vague');
    let actionFound=null, targetFound=null, mentionedNPC=null, features=[], contextWords=[], sequenceInput=[], paramsFound={}, missingParams=[], personaFound=false, formatFound=false, negativeConstraintFound=false, excludedItemsMentionedCorrectly=false, creativeTaskKeywordsFound=false, topicFound=false, frameworkLabelsFound=0, critiqueKeywordsFound=0; let commonWords=['the','a','an','to','is','at','on','in','of','it','its','for','with','as','then'];
    words.forEach((rawWord, index) => { const word = rawWord.replace(/[.,!?;:]+$/, ''); if (!word) return; if (conditions.keywords?.includes(word)) actionFound=word; if (conditions.target) { const opts=conditions.target.split('|'); if(opts.includes(word)){if(!targetFound||targetFound!==word)targetFound=word;}else if(index>0&&words[index-1]?.replace(/[.,!?;:]+$/,'')==='the'&&opts.includes(word)){if(!targetFound)targetFound=word;}} level.npcs?.forEach(npc=>{if(npc.aliases.includes(word)){mentionedNPC=npc;if(!targetFound&&conditions.target==="guide")targetFound=word;}}); if (conditions.requiredSequence?.includes(word)) sequenceInput.push(word); if (conditions.requiredContext?.includes(word)||conditions.requiredKeywordsContext?.includes(word)) contextWords.push(word); if (conditions.requiredParams) {for(const pN in conditions.requiredParams){if(conditions.requiredParams[pN].includes(word))paramsFound[pN]=word;}} if (conditions.requiredPersona?.some(p=>lowerPrompt.includes(p))) personaFound=true; if (conditions.requiredFormat?.some(f=>lowerPrompt.includes(f))) formatFound=true; if (conditions.negativeConstraint?.exclude) {let exKW=["exclude","avoid","without","not","don't","except"]; if(exKW.includes(word)){let exIdx=words.indexOf(rawWord); if(exIdx!==-1){let after=words.slice(exIdx+1).map(w=>w.replace(/[.,!?;:]+$/,'')); if(conditions.negativeConstraint.exclude.some(item=>after.includes(item))){excludedItemsMentionedCorrectly=true;negativeConstraintFound=true;}else if(after.length>0||exKW.includes(word)){negativeConstraintFound=true;}}}} if(conditions.target?.match(/poem|verse|rhyme|story|description/)){if(conditions.keywords?.includes(word))creativeTaskKeywordsFound=true; if(conditions.requiredContext?.some(ctx=>lowerPrompt.includes(ctx)))topicFound=true;} if(conditions.requiredStructure?.labels?.includes(rawWord.endsWith(':')?rawWord:rawWord+':'))frameworkLabelsFound++; if(isMultiStage&&currentStageData?.stageNum===0&&challenge.id==="6-2"&&conditions.requiredKeywordsContext?.includes(word))critiqueKeywordsFound++; if(isMultiStage&&currentStageData?.stageNum>0&&conditions.target){const opts=conditions.target.split('|');if(!targetFound&&opts.some(opt=>lowerPrompt.includes(opt)))targetFound=opts.find(opt=>lowerPrompt.includes(opt));} let isParamV=conditions.requiredParams&&Object.values(conditions.requiredParams).some(arr=>arr.includes(word)); let isFLabel=conditions.requiredStructure?.labels?.includes(word+':'); let isSecTgtWord=Array.isArray(conditions.secondaryTarget)&&conditions.secondaryTarget.includes(word); let isTgtWord=word===targetFound||(conditions.target==="guide"&&mentionedNPC?.aliases.includes(word)); let isKnown=conditions.keywords?.includes(word)||isTgtWord||conditions.requiredSequence?.includes(word)||isParamV||isFLabel||isSecTgtWord; if(!isKnown&&word.length>1&&!commonWords.includes(word)){features.push(word);} });
    if(conditions.requiredSequence)features=features.filter(f=>!conditions.requiredSequence.includes(f));
    function success(data={}){gameState.lastFailedPrompt=null;return {success:true,feedbackKey:null,data:data};} function failure(key,data={}){return {success:false,feedbackKey:key,data:{...data,prompt:lowerPrompt}};}
    // --- Logic Cascade ---
    if(conditions.exactMatch&&cleanedLowerPrompt===conditions.exactMatch)return success();
    if(conditions.requiredStructure?.labels){/* 6-1 */let rC=conditions.requiredStructure.labels.length,cOK=true,mA=null;let aFLbls=conditions.requiredStructure.labels.filter(lbl=>lowerPrompt.includes(lbl)).length;if(aFLbls>=rC){try{const rT=lowerPrompt.match(/role:(.*?)(task:|format:|$)/)?.[1].trim()||"";const tT=lowerPrompt.match(/task:(.*?)(role:|format:|$)/)?.[1].trim()||"";const fT=lowerPrompt.match(/format:(.*?)(role:|task:|$)/)?.[1].trim()||"";if(!conditions.personaInRole.some(p=>rT.includes(p))){cOK=false;mA='Role';}if(!conditions.taskDefinition.every(t=>tT.includes(t))){cOK=false;mA='Task';}if(!conditions.formatInFormat.some(f=>fT.includes(f))){cOK=false;mA='Format';}}catch(e){cOK=false;mA='Parsing';}}else{cOK=false;}if(aFLbls>=rC&&cOK)return success();if(aFLbls<rC)return failure('missingStructure');return failure(mA==='Role'?'missingRoleContent':mA==='Task'?'missingTaskContent':mA==='Format'?'missingFormatContent':'incorrectContent');}
    if(isMultiStage&&currentStageData?.stageNum===0&&challenge.id==="6-2"){/* 6-2 S0 */const minF=2;let dF=new Set(words.filter(w=>conditions.requiredKeywordsContext?.includes(w))).size;if(actionFound&&targetFound&&dF>=minF)return success();if(!actionFound||!targetFound)return failure('vague');if(dF>0)return failure('notEnoughFlaws');return failure('missingFlaws');}
    if(isMultiStage&&currentStageData?.stageNum===1&&challenge.id==="6-2"){/* 6-2 S1 */let qMet=conditions.requiredKeywordsContext.some(q=>["vivid","detailed","specific"].includes(q)&&lowerPrompt.includes(q));let dMet=conditions.requiredKeywordsContext.filter(d=>!["vivid","detailed","specific"].includes(d)).every(det=>lowerPrompt.includes(det));let negU=conditions.negativeKeywords?.some(neg=>lowerPrompt.includes(neg));if(actionFound&&targetFound&&qMet&&dMet&&!negU)return success();if(!actionFound||!targetFound)return failure('vague');if(negU)return failure('usedNegative');if(!qMet)return failure('missingQuality');if(!dMet)return failure('missingDetails');return failure('tooSimple');}
    if(actionFound&&targetFound&&conditions.requiredPersona&&conditions.requiredFormat&&(conditions.requiredKeywordsContext||conditions.negativeConstraint)){/* 5-0/6-0 */let ctxMet=!conditions.requiredKeywordsContext||conditions.requiredKeywordsContext.some(ctx=>lowerPrompt.includes(ctx));let conMet=!conditions.negativeConstraint||(negativeConstraintFound&&excludedItemsMentionedCorrectly);let secMet=!conditions.secondaryTarget||(Array.isArray(conditions.secondaryTarget)&&conditions.secondaryTarget.some(st=>words.includes(st)||features.includes(st)||lowerPrompt.includes(st)));if(personaFound&&formatFound&&ctxMet&&conMet&&secMet)return success();if(!personaFound)return failure('missingPersona');if(!ctxMet&&conditions.requiredKeywordsContext)return failure(challenge.id==='6-0'?'missingCriteria':'missingFilter');if(!formatFound)return failure('missingFormat');if(!conMet&&conditions.negativeConstraint)return failure('missingExclusion');if(!secMet&&conditions.secondaryTarget)return failure('missingSecondaryTarget');return failure('vague');}
    if(actionFound&&mentionedNPC&&conditions.target==="guide"&&conditions.requiredContext&&conditions.secondaryTarget){/* 2-1 */const ctxMet=conditions.requiredContext.some(ctx=>lowerPrompt.includes(ctx));const secTgtMet=Array.isArray(conditions.secondaryTarget)&&conditions.secondaryTarget.some(st=>lowerPrompt.includes(st));if(ctxMet&&secTgtMet){return success({npc:mentionedNPC.name});}if(!ctxMet){return failure('missingContext',{npc:mentionedNPC.name});}if(!secTgtMet){return failure('missingSecondaryTarget',{npc:mentionedNPC.name});}return failure('guideConfused',{npc:mentionedNPC.name});}
    if(creativeTaskKeywordsFound&&conditions.requiredParams&&conditions.target?.match(/poem|verse|rhyme|story|description/)){/* 5-1 */missingParams=Object.keys(conditions.requiredParams).filter(pN=>!conditions.requiredParams[pN].some(val=>lowerPrompt.includes(val)));if(missingParams.length===0&&topicFound)return success();if(!topicFound)return failure('missingTopic');if(missingParams.length>0){const fM=missingParams[0],fK=`missing_${fM}`;return failure(feedback[fK]?fK:'missingParams');}return failure('vague');}
    if(isMultiStage&&currentStageData?.stageNum>0&&challenge.id==="5-2"){/* 5-2 S1 */if(actionFound&&targetFound){const opts=conditions.target.split('|');if(opts.includes(targetFound))return success({target:targetFound});return failure('wrongTarget',{target:targetFound});}return failure(actionFound?'noTarget':'vague');}
    if(actionFound&&targetFound&&conditions.requiredParams&&!conditions.requiredPersona){/* L3 */missingParams=Object.keys(conditions.requiredParams).filter(pN=>!paramsFound[pN]);if(missingParams.length===0){if(conditions.negativeKeywords?.some(neg=>words.includes(neg)))return failure('negativeAction');return success();}else{const fM=missingParams[0],fK=`missing_${fM}`;return failure(feedback[fK]?fK:'missingParams',{paramsFound:paramsFound,missing:missingParams});}}
    if(actionFound&&targetFound&&conditions.requiredPersona&&!conditions.requiredFormat){/* L4 P */if(personaFound)return success();return failure(lowerPrompt.includes("as a ")?'wrongPersona':'missingPersona');}
    if(actionFound&&targetFound&&conditions.requiredFormat&&!conditions.requiredPersona){/* L4 F */let ctxMet=!conditions.requiredKeywordsContext||conditions.requiredKeywordsContext.some(ctx=>lowerPrompt.includes(ctx));if(formatFound&&ctxMet)return success();if(!formatFound)return failure('missingFormat');if(!ctxMet)return failure('missingFilter');return failure('vague');}
    if(actionFound&&targetFound&&conditions.negativeConstraint&&!conditions.requiredPersona){/* L4 C */if(negativeConstraintFound&&excludedItemsMentionedCorrectly)return success();return failure('missingExclusion',{detail:negativeConstraintFound?"Specify *what*":"Use 'exclude'"});}
    if(actionFound&&targetFound&&conditions.requiredFeature&&!conditions.requiredParams){/* L2 Spec */const reqF=conditions.requiredFeature.split(' ');const hasF=reqF.every(f=>features.includes(f)||lowerPrompt.includes(conditions.requiredFeature));if(hasF){if(conditions.negativeKeywords?.some(neg=>words.includes(neg)))return failure('negativeAction');return success();}else{const mFeat=features.join(' ');return failure(mFeat?'wrongCrystal':'missingSpecificity',{target:mFeat?(mFeat+' '+targetFound).trim():targetFound});}}
    if(actionFound&&targetFound&&conditions.requiredSequence){/* L2 Seq */const match=sequenceInput.length===conditions.requiredSequence.length&&sequenceInput.every((v,i)=>v===conditions.requiredSequence[i]);if(match)return success();return failure(sequenceInput.length>0?'wrongOrder':'incompleteSequence');}
    if(actionFound&&targetFound&&!isMultiStage&&!conditions.requiredFeature&&!conditions.requiredParams&&!conditions.requiredSequence&&!conditions.requiredPersona&&!conditions.requiredFormat&&!conditions.negativeConstraint&&!conditions.requiredStructure){/* L1 */if(conditions.complexityLimit&&words.length>conditions.complexityLimit)return failure('tooComplex');if(conditions.negativeKeywords?.some(neg=>words.includes(neg)))return failure(feedback['negativeAction']?'negativeAction':'wrongAction',{action:actionFound});return success();}
    // Fallbacks
    if (actionFound && !targetFound) {
      let guess = features.find(f => !commonWords.includes(f)) || 
                words.find((w, i) => {
                  const cW = w;
                  return i > 0 && cW !== actionFound && cW.length > 1 && !commonWords.includes(cW);
                });
      if (guess && conditions.target && !conditions.target.split('|').includes(guess)) {
        return failure('wrongTarget', {target: guess});
      }
      return failure('noTarget', {action: actionFound});
    }
    if (!actionFound && targetFound) {
      return failure('wrongAction', {target: targetFound});
    }
    if (mentionedNPC && !actionFound) {
      return failure('missingContext', {npc: mentionedNPC.name});
    }
    
    // Check if prompt is too complex for current level
    const complexityThreshold = (gameState.currentLevel > 2) ? 12 : 8;
    if (words.length > complexityThreshold) {
      return failure('tooComplex');
    }
    return failure('vague');
}

/**
 * Provides analysis of the last failed prompt to help the player
 * Displays detailed feedback about why their prompt didn't work
 */
function analyzeLastPrompt() { if (!gameState.playerAbilities.includes('analyze')) { displayOutput("Analyze ability not unlocked.", 'feedback-bad'); return; } const prompt = gameState.lastFailedPrompt; if (!prompt) { displayOutput("No recent failed prompt.", 'feedback-hint'); return; } const level = gameState.levels[gameState.currentLevel]; const challenge = level?.challenges[gameState.currentChallenge]; if (!challenge) return; let conditions = null, currentStageData = null; const isMultiStage = !!challenge.stages; if (isMultiStage) { currentStageData = challenge.stages.find(s => s.stageNum === gameState.currentChallengeStage); conditions = currentStageData?.solveConditions; } else { conditions = challenge.solveConditions; } if (!conditions) { displayOutput("Cannot analyze: Conditions missing.", 'feedback-bad'); return; } const words = prompt.split(/\s+/); displayOutput(`--- Analyzing: "${prompt}" ---`, 'feedback-hint'); let analysis = []; let actionF = words.find(w => conditions.keywords?.includes(w)); let targetF = words.find(w => conditions.target?.split('|').includes(w)); if (isMultiStage && currentStageData?.stageNum > 0 && conditions.target) targetF = conditions.target.split('|').find(opt => prompt.includes(opt)) || targetF; analysis.push(`Action: ${actionF ? `'${actionF}' (OK?)` : conditions.keywords ? `(Miss/Wrong - Try: ${conditions.keywords.join('/')})` : '(N/A)'}`); analysis.push(`Target: ${targetF ? `'${targetF}' (OK?)` : conditions.target ? `(Miss/Wrong - Try: ${conditions.target.replace('|','/')})` : '(N/A)'}`); if (conditions.requiredParams) { let ps = []; for (const pN in conditions.requiredParams) { let fV = words.find(w => conditions.requiredParams[pN].includes(w)); ps.push(`${pN}: ${fV ? `'${fV}' (Recognized)` : `(Missing/Incorrect - Expected e.g., ${conditions.requiredParams[pN][0]})`}`); } analysis.push(`Parameters: ${ps.join(', ')}`); } if (conditions.requiredSequence) { let seqP = words.filter(w => conditions.requiredSequence.includes(w)); let seqM = seqP.length === conditions.requiredSequence.length && seqP.every((v, i) => v === conditions.requiredSequence[i]); analysis.push(`Sequence (${conditions.requiredSequence.join(' ')}): ${seqM ? 'OK' : `Incorrect (Found: ${seqP.join(' ') || 'None'})`}`); } if (conditions.requiredFeature) { let fMet = conditions.requiredFeature.split(' ').every(f => prompt.includes(f)); analysis.push(`Specificity ('${conditions.requiredFeature}'): ${fMet ? 'Met' : 'Missing/Wrong'}`); } let ctxKW = conditions.requiredContext || conditions.requiredKeywordsContext || []; if (ctxKW.length > 0) { let ctxMet = ctxKW.some(ctx => prompt.includes(ctx)); analysis.push(`Context (${ctxKW.join('/')}): ${ctxMet ? 'Met' : 'Missing/Wrong'}`); } if (gameState.currentLevel >= 4) { if (conditions.requiredPersona) { let pM = conditions.requiredPersona.some(p => prompt.includes(p)); analysis.push(`Persona (${conditions.requiredPersona.join('/')}): ${pM ? 'Met' : `Miss/Wrong (Try 'As a ${conditions.requiredPersona[0]}...')`}`); } if (conditions.requiredFormat) { let fM = conditions.requiredFormat.some(f => prompt.includes(f)); analysis.push(`Format (${conditions.requiredFormat.join('/')}): ${fM ? 'Met' : `Miss/Wrong (Try adding '${conditions.requiredFormat[0]}')`}`); } if (conditions.negativeConstraint?.exclude) { let cW=words.some(w=>["exclude","avoid","without","not","don't","except"].includes(w)); let iOK=false; let eIdx=words.findIndex(w=>["exclude","avoid","without","not","don't","except"].includes(w)); if(eIdx!==-1)if(conditions.negativeConstraint.exclude.some(item=>words.slice(eIdx+1).includes(item))) iOK=true; let aT=`Constraint (Exclude ${conditions.negativeConstraint.exclude.join('/')}): `; if(cW&&iOK)aT+='Met'; else if(cW)aT+=`Keyword found, miss items? (Mention: ${conditions.negativeConstraint.exclude.join('/')})`; else aT+=`Missing keyword (Try 'exclude ${conditions.negativeConstraint.exclude[0]}...')`; analysis.push(aT); } } if (gameState.currentLevel >= 5) { if (conditions.requiredPersona && conditions.requiredFormat) { let pM=conditions.requiredPersona.some(p=>prompt.includes(p)); let fM=conditions.requiredFormat.some(f=>prompt.includes(f)); analysis.push(`Combined (P&F): ${pM&&fM?'Met':`Missing (P:${pM}, F:${fM})`}`); } if (conditions.target?.match(/poem|story|description/)) { let aM=conditions.keywords?.some(k=>prompt.includes(k)); let tM=conditions.requiredContext?.some(ctx=>prompt.includes(ctx)); let lM=!conditions.requiredParams?.length||Object.values(conditions.requiredParams).flat().some(val=>prompt.includes(val)); analysis.push(`Creative (Act/Topic/Len): ${aM&&tM&&lM?'Struct OK':`Missing (A:${aM}, T:${tM}, L:${lM})`}`); } if (isMultiStage && currentStageData?.stageNum > 0 && challenge.id === "5-2") { let pMsg=challenge.stages[0]?.successMessage||""; let opts=pMsg.match(/\[(.*?)\]/)?.[1]||"?"; let tOpt=conditions.target.split('|').some(opt=>prompt.includes(opt)); analysis.push(`Follow-up Target: ${tOpt?'OK':`Miss/Wrong (Choose: [${opts}])`}`); } } if (gameState.currentLevel >= 6) { if (conditions.requiredStructure?.labels) { let lbls=conditions.requiredStructure.labels.filter(lbl=>prompt.toLowerCase().includes(lbl)); let aTxt=`Framework Labels (${conditions.requiredStructure.labels.join(' ')}): ${lbls.length===conditions.requiredStructure.labels.length?'All Found':'Missing: '+(conditions.requiredStructure.labels.filter(lbl=>!prompt.toLowerCase().includes(lbl)).join(' '))}`; if(lbls.length===conditions.requiredStructure.labels.length) aTxt+=' (Content check needed)'; analysis.push(aTxt); } if (challenge.id === "6-2" && currentStageData?.stageNum === 0 && conditions.requiredKeywordsContext) { let flaws=new Set(words.filter(w=>conditions.requiredKeywordsContext.includes(w))).size; analysis.push(`Critique Flaws: ${flaws>=2?`OK (${flaws} found)`:`Found ${flaws}, Need >= 2`}`); } if (challenge.id === "6-2" && currentStageData?.stageNum === 1 && conditions.requiredKeywordsContext) { let qMet=conditions.requiredKeywordsContext.some(q=>(["vivid","detailed"].includes(q))&&prompt.includes(q)); let dMet=conditions.requiredKeywordsContext.filter(d=>!["vivid","detailed"].includes(d)).every(det=>prompt.includes(det)); analysis.push(`Refined Quality: ${qMet?'Met':'Miss ("vivid"/"detailed")'}`); analysis.push(`Refined Details: ${dMet?'Met':'Miss details?'}`); let negU=conditions.negativeKeywords?.some(neg=>prompt.includes(neg)); if(negU) analysis.push(`Refined Negatives: (Used '${conditions.negativeKeywords.find(neg=>prompt.includes(neg))}')`); } } analysis.forEach(line => displayOutput(line, 'feedback-hint')); displayOutput("--- End Analysis ---", 'feedback-hint'); }
/**
 * Helper function to handle basic NPC dialogue interactions
 * @param {string} lowerPrompt - The lowercase player prompt
 * @param {Object} level - The current level object
 * @returns {string|null} The NPC response or null if no valid interaction
 */
function handleNpcDialogue(lowerPrompt, level) { if (!level?.npcs?.length > 0) return null; const words = lowerPrompt.split(/\s+/); const actionWord = words[0]; if (!["ask", "talk", "speak", "greet"].includes(actionWord)) return null; let targetNPC = null, topic = null; const potentialAliases = ['npc','figure','guide','construct','robot','archivist','keeper','scrivener','observer','master']; level.npcs.forEach(npc => { if (!targetNPC) for (let i=1; i<words.length; i++) { const cleanWord = words[i].replace(/[.,!?;:]+$/, ''); if (npc.aliases.includes(cleanWord)) { targetNPC = npc; topic = words.slice(i+1).join(' '); break; } } }); let genericNpcWordIndex = words.findIndex((w,i) => i>0 && (potentialAliases.includes(w.replace(/[.,!?;:]+$/, '')) || level.npcs.some(n=>n.aliases.includes(w.replace(/[.,!?;:]+$/, ''))))); if (!targetNPC && genericNpcWordIndex !== -1) { let matchedWord = words[genericNpcWordIndex].replace(/[.,!?;:]+$/, ''); targetNPC = level.npcs.find(n=>n.aliases.includes(matchedWord)) || (level.npcs.length === 1 ? level.npcs[0] : null); if (targetNPC) topic = words.slice(genericNpcWordIndex + 1).join(' '); } if (targetNPC){ let dialogueKey = 'generic'; if (actionWord === 'greet' || !topic) dialogueKey = 'greet'; else { /* Topic matching */ if (targetNPC.name === "Celestial Scrivener") { if(topic.includes('intent')) dialogueKey='ask_intent'; else if(topic.includes('framework')) dialogueKey='ask_framework'; else if(topic.includes('evaluation')) dialogueKey='ask_evaluation'; } else if (targetNPC.name === "Nexus Archivist") { if(topic.includes('nexus')) dialogueKey='ask_nexus'; else if(topic.includes('persona')) dialogueKey='ask_persona'; else if(topic.includes('format')) dialogueKey='ask_format'; else if(topic.includes('constraint')) dialogueKey='ask_constraints'; } else if (targetNPC.name === "Sparking Construct") { if(topic.includes('console')) dialogueKey='ask_consoles'; else if(topic.includes('energy')) dialogueKey='ask_energy'; else if(topic.includes('help')) dialogueKey='ask_help'; } else if (targetNPC.name === "Echoing Guide") { if(topic.includes('crystal')) dialogueKey='ask_crystals'; else if(topic.includes('dark')) dialogueKey='ask_darkness'; else if(topic.includes('path')) dialogueKey='ask_path'; } } return `${targetNPC.name}: "${targetNPC.dialogue[dialogueKey] || targetNPC.dialogue.generic}"`; } return null; }
/**
 * Processes player input from the prompt input field
 * Handles commands, challenge evaluation, and game progression
 */
function processInput() { const promptText = promptInput.value; if (promptText.trim() === '') return; if (!isAwaitingResetConfirmation || promptText.toLowerCase().trim() !== 'confirm reset') { displayOutput(`> ${promptText}`, 'command-echo'); } promptInput.value = ''; const lowerPrompt = promptText.toLowerCase().trim(); const level = gameState.levels[gameState.currentLevel]; console.log(`Processing: "${lowerPrompt}"`); if (isAwaitingResetConfirmation) { if (lowerPrompt === 'confirm reset') { isAwaitingResetConfirmation = false; resetGame(); } else { isAwaitingResetConfirmation = false; displayOutput("Reset cancelled.", 'feedback-hint'); } return; } if (lowerPrompt === 'reset' || lowerPrompt === 'reset game') { displayOutput("Confirm reset? Type 'confirm reset'.", 'feedback-bad'); isAwaitingResetConfirmation = true; return; } if (lowerPrompt === 'hint') { if (!gameState.playerAbilities.includes('hint')) { displayOutput("Hint not unlocked.", 'feedback-bad'); return; } const challenge = level?.challenges[gameState.currentChallenge]; let hintText = challenge?.stages ? challenge.stages.find(s => s.stageNum === gameState.currentChallengeStage)?.hint : challenge?.hint; if (hintText) { if (!gameState.hintUsedInChallenge) { displayOutput(`Hint: ${hintText}`, 'feedback-hint'); gameState.hintUsedInChallenge = true; } else { displayOutput("Hint already used.", 'feedback-hint'); } } else { displayOutput("No hint available.", 'feedback-hint'); } return; } if (lowerPrompt === 'analyze') { analyzeLastPrompt(); return; } if (lowerPrompt === 'look' || lowerPrompt === 'look around') { displayOutput(level?.description||"?.", 'description'); level?.npcs?.forEach(n=>displayOutput(`Nearby: ${n.name}. ${n.description}`, 'description')); const ch=level?.challenges[gameState.currentChallenge]; let sD=ch?.stages?ch.stages.find(s=>s.stageNum===gameState.currentChallengeStage):ch; if(sD?.description) displayOutput(sD.description, 'description'); if(sD?.promptTask) displayOutput(`Task: ${sD.promptTask}`, 'task-description'); if(!sD&&level?.completionMessage&&gameState.currentChallenge >= (level.challenges?.length||0)-1) displayOutput("Area clear.", 'feedback-hint'); return; } if (lowerPrompt === 'help' || lowerPrompt === 'commands') { displayOutput("--- Commands ---", 'description'); /*...*/ return; } let challenge = level?.challenges ? level.challenges[gameState.currentChallenge] : null; if (!challenge && level?.id > 0) { if(level?.nextLevel && !(level.challenges && level.challenges.some(c => c.id === `${level.id}-move`))) displayOutput("Area clear. 'go forward'?", 'feedback-hint'); else if (level.challenges) displayOutput("Nothing more here.", 'feedback-hint'); return; } if (!challenge) { console.log("No challenge, exiting."); return; } const isMultiStage = !!challenge.stages; let currentStageData = isMultiStage ? challenge.stages.find(s => s.stageNum === gameState.currentChallengeStage) : null; if (challenge.id === `${level.id}-move`) { /* Move Logic */ const moveResult=evaluatePrompt(promptText); let fbSuccess=false; const clLP=lowerPrompt.replace(/[.,!?;:]+$/, ''); const pW=clLP.split(/\s+/); if(!moveResult.success){const mW=["go","move","proceed","continue","walk","head","enter","take","follow","use"]; const fW=["forward","ahead","onwards","next","further"]; const nL=gameState.levels[level.nextLevel]; const nLN=nL?.name.toLowerCase().split(/\s+/).filter(w=>w.length>3)||[]; const hMW=mW.some(w=>pW.includes(w)); const hFW=fW.some(w=>pW.includes(w)); const mNL=nLN.some(w=>clLP.includes(w)); if(hMW&&hFW)fbSuccess=true; else if(hMW&&mNL)fbSuccess=true;} if(moveResult.success||fbSuccess){ displayOutput(challenge.successMessage,'feedback-good'); addXP(challenge.xpReward); let pLIdx=gameState.currentLevel; gameState.currentLevel=level.nextLevel; gameState.currentChallenge=0; gameState.hintUsedInChallenge=false; gameState.lastFailedPrompt=null; gameState.currentChallengeStage=0; gameState.challengeContext={}; if(gameState.levels[pLIdx])gameState.levels[pLIdx].challenges=gameState.levels[pLIdx].challenges.filter(c=>!c.id.endsWith('-move')); loadLevel(gameState.currentLevel);}else{const fbMap=challenge.feedback||{}; let fbMsg=fbMap[moveResult.feedbackKey]||"Doesn't work."; displayOutput(fbMsg.replace('{action}', moveResult.data?.action || '?').replace('{target}', moveResult.data?.target || '?'),'feedback-bad'); gameState.lastFailedPrompt=clLP;} return; } try { console.log("Calling evaluatePrompt..."); const result = evaluatePrompt(promptText); console.log("evaluatePrompt result:", result); if (result.success) { console.log("Processing SUCCESS path..."); let successMessage="", xpReward=0, nextChallengeIndex=-1; let stageCompleted=false, levelCompleted=false; if (isMultiStage && currentStageData) { successMessage=currentStageData.successMessage; if(result.data.target)successMessage=successMessage.replace('{target}',result.data.target.toUpperCase()); if (currentStageData.nextStage !== null){gameState.currentChallengeStage=currentStageData.nextStage; stageCompleted=true;} else {xpReward=challenge.xpReward; nextChallengeIndex=challenge.nextChallenge; levelCompleted=(nextChallengeIndex===null);} } else { successMessage=challenge.successMessage; xpReward=challenge.xpReward; nextChallengeIndex=challenge.nextChallenge; levelCompleted=(nextChallengeIndex===null); } if (isMultiStage&&currentStageData?.stageNum===0&&challenge.id==="6-2"&&currentStageData.simulatedOutput){displayOutput("--- Simulated ---",'feedback-hint'); displayOutput(currentStageData.simulatedOutput,'npc-dialogue'); displayOutput("---",'feedback-hint');} displayOutput(successMessage.replace(/\\n/g,'\n'), 'feedback-good'); if(xpReward > 0) addXP(xpReward); gameState.hintUsedInChallenge=false; gameState.lastFailedPrompt=null; if (!stageCompleted) {gameState.currentChallengeStage=0; gameState.challengeContext={};} console.log("Calling saveGame after success..."); saveGame(); console.log("Handling advancement..."); if (stageCompleted) { 
                const nextS=challenge.stages.find(s=>s.stageNum===gameState.currentChallengeStage); 
                if(nextS){
                    displayOutput(nextS.description,'description'); 
                    if(nextS.promptTask)displayOutput(`Task: ${nextS.promptTask}`,'task-description');
                    
                    // Update educational content manager with new stage context
                    if (contentLoaded && window.educationalContent) {
                        window.educationalContent.updateContext(gameState.currentLevel, `${challenge.id}-${gameState.currentChallengeStage}`);
                    }
                    
                    // Update prompt visualizer with new stage context
                    if (window.promptVisualizer) {
                        promptVisualizer.updateContext(gameState.currentLevel, `${challenge.id}-${gameState.currentChallengeStage}`);
                    }
                    

                }
            } else if (nextChallengeIndex !== null) { 
                gameState.currentChallenge=nextChallengeIndex; 
                const nextC=level.challenges[gameState.currentChallenge]; 
                gameState.currentChallengeStage=0; 
                let sOrC=nextC.stages?nextC.stages[0]:nextC; 
                displayOutput(sOrC.description,'description'); 
                if(sOrC.promptTask)displayOutput(`Task: ${sOrC.promptTask}`,'task-description'); 
                
                // Update educational content manager with new challenge context
                if (contentLoaded && window.educationalContent) {
                    window.educationalContent.updateContext(gameState.currentLevel, nextC.id || `${gameState.currentLevel}-${nextChallengeIndex}`);
                }
                
                // Update prompt visualizer with new challenge context
                if (window.promptVisualizer) {
                    promptVisualizer.updateContext(gameState.currentLevel, nextC.id || `${gameState.currentLevel}-${nextChallengeIndex}`);
                }
                

            } else if (levelCompleted) { 
                displayOutput(level.completionMessage.replace(/\n/g,'\n'),'description'); 
                

                
                if(level.nextLevel){ 
                    if(!(level.challenges&&level.challenges.some(c=>c.id===`${level.id}-move`))){
                        if(!level.challenges)level.challenges=[]; 
                        let exitT="archway|forward|passage"; 
                        if(level.id===1)exitT="archway|f|p|caverns";
                        else if(level.id===2)exitT="passage|f|d|chamber";
                        else if(level.id===3)exitT="door|f|p|nexus";
                        else if(level.id===4)exitT="node|path|f|core";
                        else if(level.id===5)exitT="path|f|observatory"; 
                        level.challenges.push({id:`${level.id}-move`, 
                            description:"", 
                            solveConditions:{keywords:["enter","go","proceed","move","walk","continue","use","take","follow"], 
                            target:exitT}, 
                            successMessage:`You move towards ${gameState.levels[level.nextLevel]?.name||'next area'}...`, 
                            feedback:{vague:"Go where?", wrongAction:"How?", noTarget:"Go/enter where?", wrongTarget:"Can't go there."}, 
                            xpReward:5, 
                            nextChallenge:null 
                        }); 
                    } 
                    gameState.currentChallenge=level.challenges.length-1; 
                    displayOutput("Command to proceed?",'feedback-hint'); 
                } else { 
                    displayOutput("Mastery achieved.",'feedback-good'); 
                    promptInput.disabled=true; 
                } 
            } console.log("Advancement handled."); } else { console.log("Processing FAILURE path..."); const dialogueResponse = handleNpcDialogue(lowerPrompt, level); if (dialogueResponse) { console.log("Failure overridden by NPC dialogue."); displayOutput(dialogueResponse, 'npc-dialogue'); } else { console.log("Standard failure processing."); let feedbackMsg = ""; const feedbackMap=(isMultiStage&&currentStageData)?currentStageData.feedback:challenge.feedback; const pFbMap=(isMultiStage&&currentStageData)?currentStageData.partialSuccessFeedback:challenge.partialSuccessFeedback; if(result.feedbackKey.startsWith('missing_')&&pFbMap&&pFbMap[result.feedbackKey]){feedbackMsg=pFbMap[result.feedbackKey]; if(result.data.paramsFound)for(const pN in result.data.paramsFound)feedbackMsg=feedbackMsg.replace(`{${pN}}`,result.data.paramsFound[pN]);}else{feedbackMsg=(feedbackMap&&feedbackMap[result.feedbackKey])||"That didn't work.";} if(isMultiStage&&currentStageData?.stageNum>0&&result.feedbackKey==='wrongTarget'&&challenge.id==="5-2"){let opts=challenge.stages[0]?.successMessage.match(/\[(.*?)\]/)?.[1]||"options"; feedbackMsg=feedbackMsg.replace(/\[.*?\]/,`[${opts}]`);} feedbackMsg=feedbackMsg.replace('{action}',result.data?.action||'?').replace('{target}',result.data?.target||'that').replace('{npc}',result.data?.npc||'figure').replace('{parameter}',result.data?.parameter||'?').replace('{detail}',result.data?.detail||''); let fbType='feedback-bad'; const hKeys=['missingSpecificity','guideConfused','incompleteSequence','missingPersona','wrongPersona','missingFormat','missingFilter','missingExclusion','missingTopic','missingParams','missing_length','missingStructure','missingRoleContent','missingTaskContent','missingFormatContent','incorrectContent','missingFlaws','notEnoughFlaws','missingQuality','missingDetails','tooSimple','usedNegative','noTarget','wrongTarget','missingSecondaryTarget','missingContext']; if(result.feedbackKey.startsWith('missing_')||hKeys.includes(result.feedbackKey))fbType='feedback-hint'; console.log("Displaying failure feedback:", feedbackMsg); displayOutput(feedbackMsg,fbType); } } } catch (error) { console.error("ERROR during processInput execution:", error); displayOutput("An unexpected error occurred processing your command.", 'feedback-bad'); } console.log("processInput finished."); }
/** Loads level state */
function loadLevel(levelIndex) { 
    console.log("loadLevel called for index:", levelIndex); 
    const level = gameState.levels[levelIndex]; 
    
    if (!level || typeof level.name === 'undefined') { 
        console.error(`Invalid level data ${levelIndex}`); 
        displayOutput("Fatal Error: Corrupt level data.", "feedback-bad"); 
        promptInput.disabled = true; 
        return; 
    } 
    
    gameState.currentLevel = levelIndex; 
    gameState.currentChallenge = 0; 
    gameState.currentChallengeStage = 0; 
    gameState.hintUsedInChallenge = false; 
    gameState.lastFailedPrompt = null; 
    gameState.challengeContext = {}; 
    
    // Load the appropriate level image
    if (levelIndex > 0 && levelIndex <= 13) {
        levelImage.src = `images/level${levelIndex}.png`;
        levelImage.alt = `Level ${levelIndex}: ${level.name}`;
        console.log(`Loading image for level ${levelIndex}: images/level${levelIndex}.png`);
        
        // Show the image container on larger screens (handled by CSS)
        levelImageContainer.style.display = 'block';
    } else {
        // Hide the image container if no valid level
        levelImageContainer.style.display = 'none';
    }
    
    updateStatusBar(); 
    console.log(`Displaying level ${levelIndex}: ${level.name}`); 
    displayOutput(`--- ${level.name} ---`, 'description'); 
    displayOutput(level.description, 'description'); 
    
    // Update educational content manager with new level context
    if (contentLoaded && window.educationalContent) {
        const challengeId = level.challenges?.[0]?.id || `${levelIndex}-0`;
        window.educationalContent.updateContext(levelIndex, challengeId);
        
        // Display educational content tip
        displayOutput("Educational materials available! Click the 'Theory' or 'Examples' buttons to learn more about prompt engineering principles.", 'feedback-hint');
    }
    
    // Update prompt visualizer with new level context
    if (window.promptVisualizer) {
        const challengeId = level.challenges?.[0]?.id || `${levelIndex}-0`;
        promptVisualizer.updateContext(levelIndex, challengeId);
    }
    
    const firstChallenge = level.challenges?.[0]; 
    if (firstChallenge) { 
        const firstStage = firstChallenge.stages ? firstChallenge.stages[0] : firstChallenge; 
        console.log("Displaying first challenge/stage description"); 
        if(firstStage?.description) displayOutput(firstStage.description, 'description'); 
        if(firstStage?.promptTask) displayOutput(`Task: ${firstStage.promptTask}`, 'task-description'); 
    } else { 
        if(level.id > 0) { 
            console.log("No challenges found for this level."); 
            displayOutput("Area quiet...", 'feedback-hint'); 
        } 
    } 
    
    console.log("loadLevel finished, calling saveGame..."); 
    saveGame(); 
}
/** Initializes game on load */
async function initializeGame() { 
    console.log("Init game..."); 
    updateStatusBar(); 
    
    // Initialize UX components
    if (window.promptVisualizer) {
        console.log("Initializing prompt visualizer...");
        promptVisualizer.updateContext(gameState.currentLevel, `${gameState.currentLevel}-${gameState.currentChallenge}`);
    }
    
    // Initialize content loader first
    try {
        displayOutput("Loading educational content...", "feedback-hint");
        await contentLoader.initialize();
        contentLoaded = true;
        console.log("Educational content loaded successfully");
        
        // Update educational content manager with current context
        if (window.educationalContent) {
            window.educationalContent.updateContext(gameState.currentLevel, `${gameState.currentLevel}-${gameState.currentChallenge}`);
        }
    } catch (error) {
        console.error("Failed to load educational content:", error);
        displayOutput("Warning: Educational content could not be loaded. Game will still function, but educational materials won't be available.", "feedback-bad");
    }
    
    let loadSuccess = false; 
    try { 
        loadSuccess = loadGame(); 
    } catch (error) { 
        console.error("Crit err loadGame:", error); 
        loadSuccess = false; 
        localStorage.removeItem(SAVE_KEY); 
    } 
    
    console.log("loadGame returned:", loadSuccess); 
    if (loadSuccess) { 
        console.log("Load successful path."); 
        landingPage.style.display='none'; 
        gameWrapper.style.display='flex';
        gameContainer.style.display='flex'; 
        try{console.log("Enabling input..."); promptInput.disabled=false; console.log("Input enabled.");}catch(e){console.error("Err enabling input:", e);} 
        updateStatusBar(); 
        displayOutput("--- Game Loaded ---",'feedback-good'); 
        const level = gameState.levels[gameState.currentLevel]; 
        if (!level || typeof level.name !== 'string' || !Array.isArray(level.challenges)) { 
            console.error("CRIT: Invalid loaded level struct:", gameState.currentLevel); 
            displayOutput("Err: Corrupt save (invalid level). Reset game.",'feedback-bad'); 
            localStorage.removeItem(SAVE_KEY); 
            promptInput.disabled = true; 
            return; 
        } 
        
        // Load the level image for the current level when loading a saved game
        const levelIndex = gameState.currentLevel;
        if (levelIndex > 0 && levelIndex <= 13) {
            levelImage.src = `images/level${levelIndex}.png`;
            levelImage.alt = `Level ${levelIndex}: ${level.name}`;
            console.log(`Loading image for level ${levelIndex}: images/level${levelIndex}.png`);
            levelImageContainer.style.display = 'block';
        }
        displayOutput(`Loaded into: ${level.name}`,'description'); 
        
        // Update educational content manager with current context
        if (contentLoaded && window.educationalContent) {
            window.educationalContent.updateContext(gameState.currentLevel, `${gameState.currentLevel}-${gameState.currentChallenge}`);
        }
        
        try { 
            console.log(`Display challenge ${gameState.currentChallenge} Lvl ${gameState.currentLevel}`); 
            const challenge = level.challenges?.[gameState.currentChallenge]; 
            if (challenge) { 
                console.log("Challenge obj found:", challenge); 
                const stageData = challenge.stages ? challenge.stages.find(s=>s.stageNum===gameState.currentChallengeStage) : challenge; 
                if (stageData) { 
                    console.log("StageData found:", stageData); 
                    if(stageData.description) { 
                        console.log("Display stage desc..."); 
                        displayOutput(stageData.description,'description'); 
                        console.log("Stage desc done."); 
                    } else console.log("No stage desc."); 
                    if(stageData.promptTask) { 
                        console.log("Display stage task..."); 
                        displayOutput(`Task: ${stageData.promptTask}`,'task-description'); 
                        console.log("Stage task done."); 
                    } else console.log("No stage task."); 
                } else { 
                    console.warn("No stageData."); 
                    if (challenge.description) { 
                        console.log("Display fallback challenge desc..."); 
                        displayOutput(challenge.description, 'description'); 
                        if(challenge.promptTask) displayOutput(`Task: ${challenge.promptTask}`, 'task-description');
                    } 
                } 
            } else if (level.completionMessage) { 
                console.log("No challenge, completion/move state."); 
                displayOutput(level.completionMessage.replace(/\n/g,'\n'),'description'); 
                if (!level.nextLevel) { 
                    /* End game */ 
                    displayOutput("Mastery achieved.",'feedback-good'); 
                    promptInput.disabled=true; 
                } else { 
                    /* Waiting move */ 
                    displayOutput("Proceed?",'feedback-hint'); 
                    let moveIdx=level.challenges?.findIndex(c=>c.id===`${level.id}-move`); 
                    if(moveIdx===-1||typeof moveIdx==='undefined'){ 
                        if(!level.challenges)level.challenges=[]; 
                        let exitT="archway|forward|passage"; 
                        if(level.id===1)exitT="archway|f|p|caverns";
                        else if(level.id===2)exitT="passage|f|d|chamber";
                        else if(level.id===3)exitT="door|f|p|nexus";
                        else if(level.id===4)exitT="node|path|f|core";
                        else if(level.id===5)exitT="path|f|observatory"; 
                        level.challenges.push({id:`${level.id}-move`, 
                            description:"", 
                            solveConditions:{keywords:["enter","go","proceed","move","walk","continue","use","take","follow"], 
                            target:exitT}, 
                            successMessage:`You move towards ${gameState.levels[level.nextLevel]?.name||'next area'}...`, 
                            feedback:{vague:"Go where?", wrongAction:"How?", noTarget:"Go/enter where?", wrongTarget:"Can't go there."}, 
                            xpReward:5, 
                            nextChallenge:null 
                        }); 
                        gameState.currentChallenge=level.challenges.length-1;
                    } else {
                        gameState.currentChallenge=moveIdx;
                    } 
                } 
            } else if (level.id > 0) { 
                console.log("Lvl loaded, no challenges/completion."); 
                displayOutput("Area quiet...", 'feedback-hint'); 
            } 
        } catch (error) { 
            console.error("ERR display loaded state:", error); 
            displayOutput("Err display state. Reset.", 'feedback-bad'); 
        } 
        try { 
            console.log("Focusing input..."); 
            promptInput.focus(); 
            console.log("Input focused."); 
        } catch(e) { 
            console.error("Err focusing input:", e); 
        } 
    } else { 
        console.log("Load fail/no save."); 
        landingPage.style.display='block'; 
        gameWrapper.style.display='none'; 
        gameContainer.style.display='none'; 
        if (startButton) { 
            console.log("Attach listener startBtn."); 
            startButton.removeEventListener('click', startGame); 
            startButton.addEventListener('click', startGame); 
        } else { 
            console.error("CRIT ERR: Cannot find startBtn!"); 
        } 
    } 
    console.log("initializeGame finished."); 
}
/** Starts a new game */
function startGame() { 
    console.log("startGame called!"); 
    if (startButton) { 
        startButton.removeEventListener('click', startGame); 
    } 
    landingPage.style.display='none'; 
    gameWrapper.style.display='flex'; 
    gameContainer.style.display='flex'; 
    promptInput.disabled = false; 
    promptInput.focus(); 
    gameState.playerLevel=1; 
    gameState.playerXP=0; 
    gameState.xpToNextLevel=50; 
    gameState.playerAbilities=[]; 
    gameOutput.innerHTML = ''; 
    console.log("Display welcome..."); 
    displayOutput("Welcome, Prompt Crafter!", 'description'); 
    displayOutput("Begin your journey...", 'description'); 
    displayOutput("Type 'help' for commands.", 'feedback-hint'); 
    console.log("Calling loadLevel(1)..."); 
    loadLevel(1); 
    console.log("startGame finished."); 
}

// --- Event Listeners ---
promptInput.addEventListener('keypress', function(event) { 
  if (event.key === 'Enter' && !promptInput.disabled) { 
    event.preventDefault(); 
    processInput(); 
  } 
});
document.addEventListener('DOMContentLoaded', (event) => { 
  console.log("DOM ready. Init game..."); 
  initializeGame(); 
});

// Connect prompt help button to prompt visualizer
promptHelpButton.addEventListener('click', () => {
    promptVisualizer.updateContext(gameState.currentLevel, `${gameState.currentLevel}-${gameState.currentChallenge}`);
    promptVisualizer.showModal();
});

console.log("Script loaded.");