// Prompt Visualizer for PromptCraft Dungeon
// Provides visual representations of prompt structures and templates

class PromptVisualizer {
    constructor() {
        this.modal = document.createElement('div');
        this.modal.id = 'prompt-visualizer-modal';
        this.modal.className = 'modal';
        
        this.container = document.createElement('div');
        this.container.id = 'prompt-visualizer-container';
        this.container.className = 'modal-content';
        
        this.closeButton = document.createElement('span');
        this.closeButton.className = 'close-modal';
        this.closeButton.innerHTML = '&times;';
        
        this.title = document.createElement('h2');
        this.title.textContent = 'Prompt Visualization';
        
        this.tabContainer = document.createElement('div');
        this.tabContainer.className = 'tab-container';
        
        this.visualizerTab = document.createElement('button');
        this.visualizerTab.className = 'tab-button active';
        this.visualizerTab.textContent = 'Visualizer';
        this.visualizerTab.setAttribute('data-tab', 'visualizer');
        
        this.templatesTab = document.createElement('button');
        this.templatesTab.className = 'tab-button';
        this.templatesTab.textContent = 'Templates';
        this.templatesTab.setAttribute('data-tab', 'templates');
        
        this.tabContainer.appendChild(this.visualizerTab);
        this.tabContainer.appendChild(this.templatesTab);
        
        this.contentContainer = document.createElement('div');
        this.contentContainer.id = 'prompt-visualizer-content';
        
        this.container.appendChild(this.closeButton);
        this.container.appendChild(this.title);
        this.container.appendChild(this.tabContainer);
        this.container.appendChild(this.contentContainer);
        this.modal.appendChild(this.container);
        
        // Add to DOM
        document.body.appendChild(this.modal);
        
        // Initialize event listeners
        this.initEventListeners();
        
        // Load saved level or default to 1
        const savedLevel = localStorage.getItem('promptVisualizerLevel');
        this.currentLevel = savedLevel ? parseInt(savedLevel) : 1;
        console.log(`Prompt visualizer initialized with level: ${this.currentLevel}`);
        
        this.currentChallenge = '1-0';
        this.activeTab = 'visualizer';
        
        // Check if game state is available and update level accordingly
        if (window.gameState && window.gameState.playerLevel) {
            this.currentLevel = Math.max(this.currentLevel, window.gameState.playerLevel);
            console.log(`Updated prompt visualizer level from game state: ${this.currentLevel}`);
        }
        
        // Template library
        this.templates = {
            'basic': {
                name: 'Basic Prompt',
                description: 'A simple, direct instruction to the AI',
                template: 'Please [action] about [topic].',
                example: 'Please write a summary about climate change.',
                level: 1
            },
            'detailed': {
                name: 'Detailed Prompt',
                description: 'A more detailed prompt with specific requirements',
                template: 'I need you to [action] about [topic]. Please include [specific elements] and make sure to [requirements].',
                example: 'I need you to write a summary about climate change. Please include recent statistics and make sure to address both causes and solutions.',
                level: 2
            },
            'persona': {
                name: 'Persona-Based Prompt',
                description: 'Assigns a specific role or persona to the AI',
                template: 'You are a [role/persona] with expertise in [field]. Please [action] about [topic].',
                example: 'You are a climate scientist with expertise in atmospheric physics. Please explain the greenhouse effect and its impact on global temperatures.',
                level: 4
            },
            'constraints': {
                name: 'Constraint-Based Prompt',
                description: 'Includes specific constraints or limitations',
                template: 'Please [action] about [topic]. Your response should [format requirements]. Do NOT [constraints/limitations].',
                example: 'Please write an analysis of renewable energy sources. Your response should be under 300 words and include pros and cons. Do NOT focus only on solar and wind power.',
                level: 5
            },
            'framework': {
                name: 'Framework Prompt',
                description: 'Uses a structured framework for complex tasks',
                template: '# Task: [action] about [topic]\n\n## Context\n[background information]\n\n## Requirements\n- [requirement 1]\n- [requirement 2]\n- [requirement 3]\n\n## Format\n[output format]\n\n## Constraints\n[limitations]',
                example: '# Task: Create a business analysis for a renewable energy startup\n\n## Context\nThe startup is focusing on residential solar panel installation in urban areas.\n\n## Requirements\n- Include market analysis\n- Identify key competitors\n- Suggest pricing strategy\n\n## Format\nStructured report with headings and bullet points\n\n## Constraints\nKeep it under 500 words and focus on practical implementation',
                level: 6
            }
        };
    }
    
    initEventListeners() {
        // Close modal when clicking the X
        this.closeButton.addEventListener('click', () => this.hideModal());
        
        // Close modal when clicking outside the content
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.hideModal();
            }
        });
        
        // Tab switching
        this.visualizerTab.addEventListener('click', () => this.switchTab('visualizer'));
        this.templatesTab.addEventListener('click', () => this.switchTab('templates'));
        
        // Use the existing prompt help button instead of creating a new one
        const promptHelpButton = document.getElementById('prompt-help-button');
        if (promptHelpButton) {
            promptHelpButton.addEventListener('click', () => this.showModal());
        }
    }
    
    showModal() {
        this.switchTab(this.activeTab);
        this.modal.style.display = 'flex';
    }
    
    hideModal() {
        this.modal.style.display = 'none';
    }
    
    switchTab(tabName) {
        this.activeTab = tabName;
        
        // Update tab button styles
        this.visualizerTab.classList.toggle('active', tabName === 'visualizer');
        this.templatesTab.classList.toggle('active', tabName === 'templates');
        
        // Update content
        if (tabName === 'visualizer') {
            this.showVisualizer();
        } else if (tabName === 'templates') {
            this.showTemplates();
        }
    }
    
    showVisualizer() {
        // Get the current level and challenge
        const levelName = this.getLevelName(this.currentLevel);
        const challengeId = this.currentChallenge.split('-')[1];
        
        // Clear previous content
        this.contentContainer.innerHTML = '';
        
        // Create visualization container
        const visualizerContainer = document.createElement('div');
        visualizerContainer.className = 'visualizer-container';
        
        // Add visualization based on current level
        switch (this.currentLevel) {
            case 1:
                visualizerContainer.innerHTML = this.createBasicVisualization();
                break;
            case 2:
                visualizerContainer.innerHTML = this.createEchoingVisualization();
                break;
            case 3:
                visualizerContainer.innerHTML = this.createParameterVisualization();
                break;
            case 4:
                visualizerContainer.innerHTML = this.createPersonaVisualization();
                break;
            case 5:
                visualizerContainer.innerHTML = this.createConstraintVisualization();
                break;
            case 6:
                visualizerContainer.innerHTML = this.createFrameworkVisualization();
                break;
            default:
                visualizerContainer.innerHTML = '<p>No visualization available for this level.</p>';
        }
        
        this.contentContainer.appendChild(visualizerContainer);
    }
    
    showTemplates() {
        // Clear previous content
        this.contentContainer.innerHTML = '';
        
        // Check if game state is available and update level accordingly
        if (window.gameState && window.gameState.playerLevel) {
            // Always use the highest level between stored level and current game level
            const gameStateLevel = parseInt(window.gameState.playerLevel);
            if (gameStateLevel > this.currentLevel) {
                console.log(`Updating template display level from ${this.currentLevel} to ${gameStateLevel} (from game state)`);
                this.currentLevel = gameStateLevel;
                // Save to localStorage
                localStorage.setItem('promptVisualizerLevel', this.currentLevel);
            }
        }
        
        // Create templates container
        const templatesContainer = document.createElement('div');
        templatesContainer.className = 'templates-container';
        
        // Add header
        const header = document.createElement('h3');
        header.textContent = 'Prompt Templates';
        templatesContainer.appendChild(header);
        
        // Add description
        const description = document.createElement('p');
        description.textContent = 'Use these templates to help structure your prompts. All templates are available, but they are organized by complexity level.';
        templatesContainer.appendChild(description);
        
        // Add templates
        for (const templateId in this.templates) {
            const template = this.templates[templateId];
            
            // Make all templates available by default
            const isUnlocked = true;
            console.log(`Template ${template.name}: Making all templates available by default`);
            
            const templateCard = document.createElement('div');
            templateCard.className = `template-card ${isUnlocked ? 'unlocked' : 'locked'}`;
            
            const templateHeader = document.createElement('div');
            templateHeader.className = 'template-header';
            
            const templateName = document.createElement('h4');
            templateName.textContent = template.name;
            
            const templateLevel = document.createElement('span');
            templateLevel.className = 'template-level';
            templateLevel.textContent = `Recommended for Level ${template.level}+`;
            
            templateHeader.appendChild(templateName);
            templateHeader.appendChild(templateLevel);
            
            const templateDescription = document.createElement('p');
            templateDescription.className = 'template-description';
            templateDescription.textContent = template.description;
            
            const templateContent = document.createElement('div');
            templateContent.className = 'template-content';
            
            if (isUnlocked) {
                const templateText = document.createElement('pre');
                templateText.className = 'template-text';
                templateText.textContent = template.template;
                
                const exampleHeader = document.createElement('h5');
                exampleHeader.textContent = 'Example:';
                
                const exampleText = document.createElement('pre');
                exampleText.className = 'example-text';
                exampleText.textContent = template.example;
                
                const copyButton = document.createElement('button');
                copyButton.className = 'copy-button';
                copyButton.textContent = 'Copy Template';
                copyButton.addEventListener('click', () => {
                    navigator.clipboard.writeText(template.template);
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy Template';
                    }, 2000);
                });
                
                templateContent.appendChild(templateText);
                templateContent.appendChild(exampleHeader);
                templateContent.appendChild(exampleText);
                templateContent.appendChild(copyButton);
            }
            
            templateCard.appendChild(templateHeader);
            templateCard.appendChild(templateDescription);
            templateCard.appendChild(templateContent);
            
            templatesContainer.appendChild(templateCard);
        }
        
        this.contentContainer.appendChild(templatesContainer);
    }
    
    createBasicVisualization() {
        return `
            <h3>Basic Prompt Structure</h3>
            <div class="visualization-diagram">
                <div class="prompt-component instruction">
                    <h4>Instruction</h4>
                    <p>Clear, direct instruction</p>
                </div>
                <div class="prompt-arrow">→</div>
                <div class="prompt-component response">
                    <h4>Response</h4>
                    <p>AI follows instruction</p>
                </div>
            </div>
            <div class="visualization-example">
                <h4>Example:</h4>
                <div class="example-prompt">
                    <p class="instruction-text">Write a short poem about the ocean.</p>
                </div>
            </div>
            <p class="visualization-tip">
                <strong>Tip:</strong> Start with clear, direct instructions. Be specific about what you want.
            </p>
        `;
    }
    
    createEchoingVisualization() {
        return `
            <h3>Echoing Techniques</h3>
            <div class="visualization-diagram">
                <div class="prompt-component instruction">
                    <h4>Instruction</h4>
                    <p>Initial instruction</p>
                </div>
                <div class="prompt-arrow">→</div>
                <div class="prompt-component echo">
                    <h4>Echo/Repetition</h4>
                    <p>Reinforcement of key points</p>
                </div>
                <div class="prompt-arrow">→</div>
                <div class="prompt-component response">
                    <h4>Response</h4>
                    <p>AI follows reinforced instruction</p>
                </div>
            </div>
            <div class="visualization-example">
                <h4>Example:</h4>
                <div class="example-prompt">
                    <p class="instruction-text">Write a short poem about the ocean. The poem should have exactly 4 lines. Remember, exactly 4 lines, no more, no less.</p>
                </div>
            </div>
            <p class="visualization-tip">
                <strong>Tip:</strong> Repetition helps emphasize important aspects of your instruction and ensures the AI follows specific requirements.
            </p>
        `;
    }
    
    createParameterVisualization() {
        return `
            <h3>Parameter-Based Prompting</h3>
            <div class="visualization-diagram">
                <div class="prompt-component instruction">
                    <h4>Instruction</h4>
                    <p>Base instruction</p>
                </div>
                <div class="prompt-plus">+</div>
                <div class="prompt-component parameters">
                    <h4>Parameters</h4>
                    <p>Specific control values</p>
                    <ul>
                        <li>Length</li>
                        <li>Format</li>
                        <li>Style</li>
                        <li>Tone</li>
                    </ul>
                </div>
                <div class="prompt-arrow">→</div>
                <div class="prompt-component response">
                    <h4>Controlled Response</h4>
                    <p>AI follows with parameter constraints</p>
                </div>
            </div>
            <div class="visualization-example">
                <h4>Example:</h4>
                <div class="example-prompt">
                    <p class="instruction-text">Write a poem about the ocean with the following parameters:</p>
                    <ul>
                        <li>Length: 4 lines</li>
                        <li>Style: Haiku-inspired</li>
                        <li>Tone: Peaceful</li>
                        <li>Must include imagery about waves</li>
                    </ul>
                </div>
            </div>
            <p class="visualization-tip">
                <strong>Tip:</strong> Using explicit parameters gives you fine-grained control over different aspects of the AI's response.
            </p>
        `;
    }
    
    createPersonaVisualization() {
        return `
            <h3>Persona-Based Prompting</h3>
            <div class="visualization-diagram">
                <div class="prompt-component persona">
                    <h4>Persona Assignment</h4>
                    <p>Role or character for AI</p>
                </div>
                <div class="prompt-plus">+</div>
                <div class="prompt-component instruction">
                    <h4>Instruction</h4>
                    <p>Task within persona context</p>
                </div>
                <div class="prompt-arrow">→</div>
                <div class="prompt-component response">
                    <h4>In-Character Response</h4>
                    <p>AI responds as assigned persona</p>
                </div>
            </div>
            <div class="visualization-example">
                <h4>Example:</h4>
                <div class="example-prompt">
                    <p class="instruction-text">You are a marine biologist with 20 years of experience studying ocean ecosystems. Write a short explanation about the importance of coral reefs for a high school student.</p>
                </div>
            </div>
            <p class="visualization-tip">
                <strong>Tip:</strong> Assigning a specific persona helps the AI adopt particular knowledge, tone, and perspective that's appropriate for your task.
            </p>
        `;
    }
    
    createConstraintVisualization() {
        return `
            <h3>Constraint-Based Prompting</h3>
            <div class="visualization-diagram">
                <div class="prompt-component instruction">
                    <h4>Instruction</h4>
                    <p>Base instruction</p>
                </div>
                <div class="prompt-plus">+</div>
                <div class="prompt-component positive">
                    <h4>Positive Constraints</h4>
                    <p>What to include/do</p>
                </div>
                <div class="prompt-plus">+</div>
                <div class="prompt-component negative">
                    <h4>Negative Constraints</h4>
                    <p>What to avoid/not do</p>
                </div>
                <div class="prompt-arrow">→</div>
                <div class="prompt-component response">
                    <h4>Bounded Response</h4>
                    <p>AI follows within constraints</p>
                </div>
            </div>
            <div class="visualization-example">
                <h4>Example:</h4>
                <div class="example-prompt">
                    <p class="instruction-text">Write a short poem about the ocean. DO include imagery about waves and the sound of the sea. DO NOT use rhyming couplets or mention any sea creatures.</p>
                </div>
            </div>
            <p class="visualization-tip">
                <strong>Tip:</strong> Explicitly stating both what to include and what to avoid helps create clear boundaries for the AI's response.
            </p>
        `;
    }
    
    createFrameworkVisualization() {
        return `
            <h3>Framework-Based Prompting</h3>
            <div class="visualization-diagram">
                <div class="prompt-framework">
                    <div class="framework-header">Structured Framework</div>
                    <div class="framework-section">
                        <h5>Context/Background</h5>
                        <p>Situational information</p>
                    </div>
                    <div class="framework-section">
                        <h5>Task Definition</h5>
                        <p>Clear objective</p>
                    </div>
                    <div class="framework-section">
                        <h5>Constraints</h5>
                        <p>Boundaries and limitations</p>
                    </div>
                    <div class="framework-section">
                        <h5>Format Requirements</h5>
                        <p>Output structure</p>
                    </div>
                    <div class="framework-section">
                        <h5>Evaluation Criteria</h5>
                        <p>Success metrics</p>
                    </div>
                </div>
                <div class="prompt-arrow">→</div>
                <div class="prompt-component response">
                    <h4>Comprehensive Response</h4>
                    <p>AI follows framework structure</p>
                </div>
            </div>
            <div class="visualization-example">
                <h4>Example:</h4>
                <div class="example-prompt">
                    <pre class="framework-example">
# Context
You are creating educational content for a marine biology class.

# Task
Write a short informational piece about coral reefs.

# Constraints
- Keep it under 200 words
- Target audience is high school students
- Focus on conservation aspects

# Format
- Title
- Introduction paragraph
- 3 key points with subheadings
- Conclusion with call to action

# Success Criteria
- Scientifically accurate
- Engaging and clear language
- Actionable conservation message
                    </pre>
                </div>
            </div>
            <p class="visualization-tip">
                <strong>Tip:</strong> Using a structured framework helps organize complex prompts and ensures comprehensive coverage of all requirements.
            </p>
        `;
    }
    
    getLevelName(level) {
        const levelNames = {
            1: 'hall_of_first_words',
            2: 'echoing_caverns',
            3: 'parameter_chambers',
            4: 'persona_nexus',
            5: 'constraint_core',
            6: 'framework_observatory'
        };
        
        return levelNames[level] || '';
    }
    
    updateContext(level, challenge) {
        console.log(`Prompt visualizer updating context: Level ${level}, Challenge ${challenge}`);
        
        // Make sure we're using an integer for level comparison
        const newLevel = parseInt(level);
        
        // Check if game state is available and use the highest level
        if (window.gameState && window.gameState.playerLevel) {
            const gameStateLevel = parseInt(window.gameState.playerLevel);
            if (gameStateLevel > newLevel) {
                console.log(`Using game state level ${gameStateLevel} instead of provided level ${newLevel}`);
                this.currentLevel = gameStateLevel;
            } else {
                this.currentLevel = newLevel;
            }
        } else {
            // Only update if the level has changed or is higher
            if (newLevel >= this.currentLevel) {
                console.log(`Updating prompt visualizer level from ${this.currentLevel} to ${newLevel}`);
                this.currentLevel = newLevel;
            }
        }
        
        this.currentChallenge = challenge;
        
        // Force refresh of content if modal is open
        if (this.modal.style.display === 'flex') {
            this.switchTab(this.activeTab);
        }
        
        // Save current level to localStorage
        localStorage.setItem('promptVisualizerLevel', this.currentLevel);
    }
}

// Add a function to force update the player level
PromptVisualizer.prototype.forceUpdatePlayerLevel = function(newLevel) {
    newLevel = parseInt(newLevel);
    console.log(`Force updating prompt visualizer level to ${newLevel}`);
    
    if (newLevel > this.currentLevel) {
        this.currentLevel = newLevel;
        localStorage.setItem('promptVisualizerLevel', this.currentLevel);
        
        // Force refresh if modal is open
        if (this.modal.style.display === 'flex') {
            this.switchTab(this.activeTab);
        }
        
        return true;
    }
    
    return false;
};

// Create and export the prompt visualizer
const promptVisualizer = new PromptVisualizer();
