# Adaptive Prompting Examples

## Basic Adaptive Prompting Examples

### Example 1: Simple Feedback-Based Adaptation

**Prompt:**
```
As a language tutor, create a conversation to help someone practice basic Spanish. Start with a simple greeting and question about their day. If they respond in Spanish, continue with slightly more complex Spanish. If they respond in English, provide the Spanish translation of what they said and encourage them to try responding in Spanish.
```

**Why it works:**
- Defines the role (language tutor)
- Specifies the starting point (simple greeting)
- Includes basic adaptation logic (response language)
- Provides clear adaptation paths for different responses
- Maintains educational purpose throughout adaptation

### Example 2: Structured Multi-Path Conversation

**Prompt:**
```
As a financial advisor, create an interactive conversation to help someone determine their investment risk tolerance. Begin by asking about their investment experience. Then:

- If they have minimal experience: Ask about their comfort with temporary investment losses and explain concepts in simpler terms
- If they have moderate experience: Ask about their specific investment preferences and use more technical terminology
- If they have extensive experience: Discuss advanced portfolio allocation strategies and use industry terminology

After assessing their experience level, ask about their investment timeframe and adapt your recommendations based on both their experience and timeframe.
```

**Why it works:**
- Specifies the role (financial advisor)
- Defines clear starting point (investment experience)
- Provides structured adaptation paths for three different scenarios
- Includes specific content adjustments for each path (terminology, concepts)
- Adds a second adaptation dimension (timeframe)
- Maintains purpose (risk tolerance assessment) across adaptations

## Intermediate Adaptive Prompting Examples

### Example 3: Comprehensive Educational Adaptation

**Prompt:**
```
As an educational AI tutor, design an adaptive learning conversation to teach the concept of photosynthesis. The conversation should adapt along multiple dimensions based on student responses:

1. Initial Knowledge Assessment:
   - Begin by asking "What do you already know about how plants make their food?"
   - Analyze the response for:
     * Depth of prior knowledge (none, basic, intermediate, advanced)
     * Presence of misconceptions
     * Vocabulary level
     * Areas of interest or curiosity

2. Content Adaptation Rules:
   - For minimal prior knowledge: Start with simple analogies comparing plants to factories
   - For basic knowledge: Build on their understanding, filling specific gaps
   - For intermediate knowledge: Focus on biochemical details and energy transfer
   - For advanced knowledge: Discuss current research and complex interactions
   - When misconceptions are detected: Address them directly with evidence-based corrections

3. Engagement Adaptation:
   - If responses are brief: Ask more specific, closed-ended questions
   - If responses show curiosity: Ask open-ended questions that explore their interests
   - If responses show confusion: Provide simpler explanations and check understanding
   - If responses show mastery: Introduce more challenging concepts and applications

4. Explanation Adaptation:
   - Adjust vocabulary complexity based on the student's language level
   - Shift between visual descriptions, process explanations, and functional examples
   - Incorporate the student's own examples or interests into explanations
   - Provide analogies relevant to previously mentioned interests or knowledge

5. Progress Tracking:
   - Periodically summarize what has been covered
   - Check understanding with application questions
   - Address any persistent confusion before moving to new topics
   - Acknowledge and reinforce correct understanding

The conversation should feel natural while systematically building understanding, with each response tailored to the specific learning needs demonstrated in previous interactions.
```

**Why it works:**
- Specifies specialized role (educational AI tutor)
- Focuses on specific educational topic (photosynthesis)
- Creates comprehensive adaptation structure with multiple dimensions
- Includes initial assessment strategy
- Provides specific adaptation rules for different knowledge levels
- Addresses engagement patterns and explanation approaches
- Includes progress tracking and reinforcement
- Balances systematic adaptation with natural conversation flow

### Example 4: Customer Support Troubleshooting

**Prompt:**
```
As a technical support specialist, create an adaptive troubleshooting conversation for helping users resolve issues with their wireless router. The conversation should:

1. Initial Problem Assessment:
   - Begin with: "I'd be happy to help you troubleshoot your wireless router issues. Could you briefly describe what problem you're experiencing?"
   - Categorize the response into problem types:
     * Connectivity issues (no connection, intermittent connection)
     * Speed problems (slow performance, inconsistent speed)
     * Device-specific issues (certain devices can't connect)
     * Setup difficulties (configuration problems)

2. Technical Level Adaptation:
   - Assess technical sophistication based on terminology, described attempts, and question framing
   - For non-technical users: Use simple analogies and step-by-step instructions with explanations of why each step helps
   - For moderately technical users: Provide more efficient troubleshooting paths and some technical details
   - For highly technical users: Discuss advanced diagnostics, configuration options, and technical specifications

3. Troubleshooting Path Branching:
   - For connectivity issues:
     * First check if router is powered and showing normal indicator lights
     * Then verify if the issue affects all devices or specific ones
     * Branch to different solution paths based on the response
   - For speed problems:
     * Check for interference sources and channel congestion
     * Test speeds at different distances and times
     * Evaluate bandwidth usage and router specifications
   - [Include similar branches for other problem categories]

4. Clarification and Verification Loops:
   - After each troubleshooting step: "Were you able to complete that step? What did you observe?"
   - If step was successful: Move to next logical step in the sequence
   - If step failed or user is confused: Provide more detailed instructions or an alternative approach
   - If symptoms change: Adapt to the new information and recategorize if necessary

5. Solution Confirmation and Prevention:
   - Once issue appears resolved: "Let's verify that everything is working properly now. Could you try [specific test relevant to their issue]?"
   - If resolved: Provide preventative advice specific to their issue type
   - If not resolved: Escalate to more advanced troubleshooting or alternative solutions
   - Conclude with an opportunity for additional questions

Throughout the conversation, maintain context of their specific router issues, remember which steps have already been attempted, and adjust technical language based on their demonstrated understanding.
```

**Why it works:**
- Specifies specialized role (technical support specialist)
- Addresses specific technical domain (wireless router troubleshooting)
- Creates structured assessment and categorization approach
- Provides adaptation based on technical sophistication
- Includes detailed branching paths for different problem types
- Incorporates verification loops to confirm progress
- Maintains context throughout the troubleshooting process
- Balances technical accuracy with accessibility
- Includes solution confirmation and prevention

## Advanced Adaptive Prompting Examples

### Example 5: Therapeutic Conversation Framework

**Prompt:**
```
As a mental health conversation designer, create an adaptive therapeutic dialogue framework for helping individuals explore and manage anxiety. The framework should dynamically adjust across multiple dimensions while maintaining therapeutic integrity and ethical boundaries.

1. Initial Presentation Assessment:
   - Begin with an empathetic, open-ended invitation: "I'm here to help you explore feelings of anxiety. Perhaps you could share a bit about what you've been experiencing?"
   - Analyze the response along multiple dimensions:
     * Severity indicators (panic attacks, physical symptoms, functional impairment)
     * Cognitive patterns (catastrophizing, overgeneralization, black-and-white thinking)
     * Behavioral patterns (avoidance, safety behaviors, reassurance seeking)
     * Insight level (awareness of patterns, understanding of anxiety mechanisms)
     * Readiness for change (pre-contemplation through action stages)
     * Communication style (analytical, emotional, narrative, solution-focused)

2. Therapeutic Approach Adaptation:
   - For primarily physical symptom focus: Gradually shift toward psychoeducation about mind-body connection
   - For cognitive pattern focus: Adapt toward gentle Socratic questioning about thought patterns
   - For behavioral focus: Blend validation with exploration of behavior functions and consequences
   - For existential concerns: Adapt toward meaning-centered reflections and normalizing uncertainty
   - Dynamically adjust between approaches based on response patterns, while maintaining consistency

3. Depth Calibration Mechanisms:
   - Begin with surface-level reflection and validation
   - Assess receptiveness to deeper exploration through:
     * Engagement with reflections (dismissal vs. elaboration)
     * Emotional activation indicators in language
     * Explicit readiness signals or boundaries
   - Incrementally adjust depth through:
     * Shallow: Validation and normalization
     * Medium: Pattern identification and gentle connections
     * Deeper: Exploration of underlying fears, needs, and patterns
     * Calibrate backward if resistance or overwhelm signals appear

4. Emotional Resonance Adaptation:
   - Continuously assess emotional tone and match appropriate therapeutic stance:
     * For overwhelm: Shift toward grounding and stabilization
     * For intellectualization: Gently bridge to emotional experience
     * For anger/frustration: Validate underlying needs and concerns
     * For sadness/vulnerability: Provide compassionate presence and validation
   - Adjust language patterns to match emotional processing style while gently expanding range

5. Intervention Sequencing Logic:
   - Establish safety and rapport before challenging perspectives
   - Sequence interventions based on readiness signals:
     * Awareness building → Pattern recognition → Exploration of alternatives → Skill building → Practice planning
   - Adapt sequence based on:
     * Response to previous interventions
     * Emerging priorities and concerns
     * Windows of tolerance and receptivity
     * Natural conversation flow and client-directed focus

6. Integration and Consolidation Mechanisms:
   - Periodically offer personalized synthesis: "From what you've shared, it seems like [pattern observation]. How does that fit with your experience?"
   - Calibrate synthesis depth based on insight readiness
   - Provide incremental summaries that highlight connections and patterns
   - Check alignment and adjust understanding based on feedback
   - Bridge insights to practical applications when readiness indicators appear

7. Autonomy and Agency Enhancement:
   - Continuously adjust directiveness based on:
     * Expressed preferences for guidance vs. exploration
     * Demonstrated capacity for self-reflection
     * Decision-making confidence signals
   - Offer choices at key decision points with appropriate framing for current state
   - Transition from more guided to more client-led as capacity indicators increase
   - Explicitly acknowledge and reinforce agency in small decisions throughout

8. Ethical Boundary Maintenance:
   - Maintain clear scope boundaries while preserving conversation naturalness
   - Include automatic recognition triggers for:
     * Crisis indicators requiring higher level of care
     * Topics beyond appropriate scope
     * Unhealthy dependency patterns
   - Have prepared transition language for appropriate referrals or scope clarification
   - Balance validation with appropriate limitations

The framework should feel natural and person-centered while systematically adapting to the individual's needs, maintaining appropriate therapeutic boundaries, and supporting exploration at a pace and depth matched to their current state and readiness.
```

**Why it works:**
- Specifies highly specialized role (mental health conversation designer)
- Addresses sensitive domain with ethical considerations
- Creates sophisticated multi-dimensional assessment framework
- Provides detailed adaptation strategies for different presentation patterns
- Includes depth calibration with safety mechanisms
- Addresses emotional resonance and appropriate therapeutic stance
- Incorporates intervention sequencing based on readiness
- Includes integration mechanisms and autonomy enhancement
- Maintains ethical boundaries throughout
- Balances systematic adaptation with natural conversation flow

### Example 6: Complex Decision Support System

**Prompt:**
```
As a strategic decision support specialist, design an adaptive multi-stage decision facilitation protocol for complex organizational decisions with high uncertainty and multiple stakeholders. The protocol should dynamically evolve based on decision characteristics, stakeholder dynamics, and emerging information.

1. Decision Context Mapping Phase:
   - Initial framing: "To help with this decision process, I'd like to understand the full context. Could you outline the key decision that needs to be made and what makes it challenging?"
   - Analyze response to assess:
     * Decision type (resource allocation, strategic direction, problem resolution)
     * Complexity factors (uncertainty, interdependencies, constraints)
     * Stakeholder landscape (alignment, power dynamics, expertise distribution)
     * Time horizons and urgency factors
     * Previous attempts and organizational history
   - Adapt subsequent approach based on complexity profile:
     * For high uncertainty: Emphasize scenario planning and robust decision methods
     * For high stakeholder divergence: Focus on values clarification and alignment
     * For high technical complexity: Prioritize expert input and analysis frameworks
     * For high time pressure: Streamline process while preserving critical elements

2. Problem Formulation Adaptation:
   - Guide problem definition with adaptive questioning:
     * If problem framing is solution-focused: "Before we explore specific solutions, let's ensure we've defined the core problem. What fundamental needs or objectives are we trying to address?"
     * If problem framing is symptom-focused: "These symptoms are important. What might be the underlying causes or systems creating these issues?"
     * If problem framing is constraint-focused: "Within these constraints, what possibilities remain open? What would an ideal outcome look like?"
   - Iteratively refine problem definition based on response patterns
   - Adapt between divergent and convergent approaches based on:
     * Premature convergence signals: Broaden exploration
     * Analysis paralysis signals: Guide toward synthesis
     * Scope creep indicators: Refocus on core issues

3. Stakeholder Perspective Integration:
   - Assess which perspectives are represented vs. missing
   - Adapt facilitation to balance voices:
     * For dominant perspectives: "We've explored this viewpoint thoroughly. How might someone with [different role/priority] see this situation?"
     * For unaddressed perspectives: "I notice we haven't considered how this might impact [stakeholder group]. What considerations might be important from their perspective?"
   - Dynamically adjust perspective-taking approaches based on:
     * Receptivity to multiple viewpoints
     * Power dynamics in represented perspectives
     * Empathy capacity signals in responses

4. Information Processing Calibration:
   - Begin with open information gathering
   - Assess information processing patterns:
     * Data orientation (quantitative vs. qualitative preference)
     * Abstraction level (concrete examples vs. patterns/principles)
     * Processing style (sequential/analytical vs. parallel/intuitive)
   - Adapt information organization and presentation:
     * For analytical processors: Structured frameworks and systematic evaluation
     * For intuitive processors: Pattern recognition and holistic synthesis
     * For mixed processors: Toggle between structured analysis and integrative synthesis
   - Adjust information density based on:
     * Processing capacity signals
     * Cognitive load indicators
     * Expressed preferences for detail vs. summary

5. Decision Method Selection and Adaptation:
   - Based on accumulated context, dynamically select and adapt appropriate decision methods:
     * For multi-criteria decisions with clear priorities: Weighted scoring approaches
     * For high uncertainty decisions: Scenario planning and robust decision making
     * For value-laden decisions: Values-focused thinking and ethical frameworks
     * For innovation decisions: Design thinking and creative problem solving
   - Introduce selected method with appropriate framing for context
   - Adapt method application based on:
     * Engagement signals and comprehension indicators
     * Emerging information and changing constraints
     * Resistance or misalignment with decision context

6. Convergence and Commitment Pathway:
   - Assess decision readiness through:
     * Information sufficiency indicators
     * Alternative consideration adequacy
     * Stakeholder alignment signals
     * Implementation planning readiness
   - Adapt convergence approach based on readiness profile:
     * For premature convergence: Introduce structured devil's advocacy
     * For decision avoidance: Implement incremental commitment strategies
     * For fragile consensus: Strengthen through implementation planning
     * For robust readiness: Facilitate clear decision documentation
   - Calibrate decision confidence framing based on:
     * Actual uncertainty levels in available information
     * Organization's tolerance for ambiguity
     * Implementation flexibility and reversibility

7. Learning Integration Loop:
   - Throughout process, maintain adaptive learning mechanisms:
     * Capture key insights and decision rationale
     * Identify assumptions that can be tested
     * Create feedback loops for post-decision learning
     * Establish triggers for decision review or adaptation
   - Adjust learning focus based on:
     * Decision reversibility
     * Uncertainty concentration
     * Implementation complexity

8. Meta-Process Adaptation:
   - Continuously monitor process effectiveness through:
     * Engagement quality across stakeholders
     * Progress toward decision clarity
     * Emerging constraints or opportunities
   - Implement process pivots when needed:
     * Shift between divergent and convergent thinking
     * Adjust pace based on urgency vs. complexity tension
     * Reframe approach when stuck in unproductive patterns
     * Balance structure and emergence based on group needs

The protocol should maintain a conversational flow while systematically adapting to the specific decision context, stakeholder dynamics, and emerging information. It should feel supportive rather than mechanical, while still providing robust decision support appropriate to the complexity of the situation.
```

**Why it works:**
- Specifies highly specialized role (strategic decision support specialist)
- Addresses complex organizational decision-making
- Creates sophisticated multi-phase protocol with adaptive elements
- Provides detailed assessment and adaptation strategies
- Includes stakeholder perspective integration
- Addresses information processing styles and preferences
- Incorporates multiple decision methodologies with selection criteria
- Includes convergence mechanisms and learning integration
- Maintains meta-process adaptation for overall effectiveness
- Balances systematic support with natural conversation flow

## Common Mistakes and Improvements

### Weak Prompt:
```
Create a conversation that changes based on what the user says.
```

**Problems:**
- No specified role
- Extremely vague adaptation instruction ("changes")
- No specific conversation purpose or topic
- No guidance on adaptation dimensions or triggers
- No indication of conversation flow or structure
- No adaptation strategies provided

### Improved Prompt:
```
As a career coach, create an adaptive conversation to help someone explore potential career changes. Begin by asking about their current job satisfaction. Then:

1. If they express high dissatisfaction:
   - Focus on identifying specific pain points in their current role
   - Explore their values and interests to identify alternative directions
   - Gradually transition to practical transition planning

2. If they express mixed feelings:
   - Dig deeper into what aspects are working vs. not working
   - Help them explore whether job crafting or role adjustment might be sufficient
   - Discuss both enhancement of current role and potential alternatives

3. If they express general satisfaction but curiosity:
   - Focus on growth and development within their field
   - Explore adjacent opportunities that build on existing strengths
   - Discuss experimental approaches to exploration (side projects, informational interviews)

Throughout the conversation, adjust your language complexity based on their industry knowledge, shift between practical and reflective questions based on their response style, and periodically summarize insights to confirm understanding. If they express anxiety about change, incorporate reassurance and risk-mitigation strategies.
```

**Improvements:**
- Added specific role (career coach)
- Defined clear conversation purpose (career change exploration)
- Specified starting point (current job satisfaction)
- Created structured adaptation paths for three different scenarios
- Included specific content focus for each path
- Added continuous adaptation dimensions (language, question type)
- Incorporated periodic summarization for context maintenance
- Added emotional adaptation for anxiety
- Maintained purpose (career exploration) across adaptations
