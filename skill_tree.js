// Skill Tree Visualization for PromptCraft Dungeon
// Displays a visual representation of the player's progress and skills

class SkillTreeManager {
    constructor() {
        this.modal = document.createElement('div');
        this.modal.id = 'skill-tree-modal';
        this.modal.className = 'modal';
        
        this.container = document.createElement('div');
        this.container.id = 'skill-tree-container';
        this.container.className = 'modal-content';
        
        this.closeButton = document.createElement('span');
        this.closeButton.className = 'close-modal';
        this.closeButton.innerHTML = '&times;';
        
        this.title = document.createElement('h2');
        this.title.textContent = 'Prompt Engineering Skill Tree';
        
        this.skillTreeSvg = document.createElement('div');
        this.skillTreeSvg.id = 'skill-tree-svg';
        
        this.container.appendChild(this.closeButton);
        this.container.appendChild(this.title);
        this.container.appendChild(this.skillTreeSvg);
        this.modal.appendChild(this.container);
        
        // Add to DOM
        document.body.appendChild(this.modal);
        
        // Initialize event listeners
        this.initEventListeners();
        
        // Skills data structure
        this.skills = {
            // Level 1: Basics
            "basic_prompting": { 
                name: "Basic Prompting", 
                level: 1, 
                description: "Ability to craft simple, clear instructions for AI",
                mastery: 0, // 0-100
                x: 400, y: 50,
                dependencies: []
            },
            
            // Level 2: Echoing Techniques
            "repetition": { 
                name: "Repetition Techniques", 
                level: 2, 
                description: "Using repetition to emphasize important instructions",
                mastery: 0,
                x: 250, y: 150,
                dependencies: ["basic_prompting"]
            },
            "echo_formatting": { 
                name: "Format Echoing", 
                level: 2, 
                description: "Reinforcing output format through examples",
                mastery: 0,
                x: 550, y: 150,
                dependencies: ["basic_prompting"]
            },
            
            // Level 3: Parameters
            "parameter_tuning": { 
                name: "Parameter Tuning", 
                level: 3, 
                description: "Adjusting specific parameters to control AI behavior",
                mastery: 0,
                x: 200, y: 250,
                dependencies: ["repetition"]
            },
            "temperature_control": { 
                name: "Temperature Control", 
                level: 3, 
                description: "Balancing creativity vs determinism in responses",
                mastery: 0,
                x: 400, y: 250,
                dependencies: ["repetition", "echo_formatting"]
            },
            "token_management": { 
                name: "Token Management", 
                level: 3, 
                description: "Optimizing prompt length and efficiency",
                mastery: 0,
                x: 600, y: 250,
                dependencies: ["echo_formatting"]
            },
            
            // Level 4: Personas
            "persona_design": { 
                name: "Persona Design", 
                level: 4, 
                description: "Creating effective AI personas for specific tasks",
                mastery: 0,
                x: 300, y: 350,
                dependencies: ["parameter_tuning", "temperature_control"]
            },
            "role_playing": { 
                name: "Role Playing", 
                level: 4, 
                description: "Using role assignments to guide AI behavior",
                mastery: 0,
                x: 500, y: 350,
                dependencies: ["temperature_control", "token_management"]
            },
            
            // Level 5: Constraints
            "negative_prompting": { 
                name: "Negative Prompting", 
                level: 5, 
                description: "Specifying what the AI should NOT do",
                mastery: 0,
                x: 250, y: 450,
                dependencies: ["persona_design"]
            },
            "boundary_setting": { 
                name: "Boundary Setting", 
                level: 5, 
                description: "Establishing clear constraints for AI responses",
                mastery: 0,
                x: 400, y: 450,
                dependencies: ["persona_design", "role_playing"]
            },
            "ethical_guidelines": { 
                name: "Ethical Guidelines", 
                level: 5, 
                description: "Implementing ethical constraints in prompts",
                mastery: 0,
                x: 550, y: 450,
                dependencies: ["role_playing"]
            },
            
            // Level 6: Frameworks
            "prompt_frameworks": { 
                name: "Prompt Frameworks", 
                level: 6, 
                description: "Using structured frameworks for complex tasks",
                mastery: 0,
                x: 300, y: 550,
                dependencies: ["negative_prompting", "boundary_setting"]
            },
            "chain_prompting": { 
                name: "Chain Prompting", 
                level: 6, 
                description: "Chaining multiple prompts for complex workflows",
                mastery: 0,
                x: 500, y: 550,
                dependencies: ["boundary_setting", "ethical_guidelines"]
            },
            
            // Master Skill
            "prompt_engineering_mastery": { 
                name: "Prompt Engineering Mastery", 
                level: 7, 
                description: "Complete mastery of prompt engineering techniques",
                mastery: 0,
                x: 400, y: 650,
                dependencies: ["prompt_frameworks", "chain_prompting"]
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
        
        // Add skill tree button to the game UI
        const gameUI = document.querySelector('.game-ui');
        if (gameUI) {
            const skillTreeButton = document.createElement('button');
            skillTreeButton.id = 'skill-tree-button';
            skillTreeButton.className = 'ui-button';
            skillTreeButton.textContent = 'Skill Tree';
            skillTreeButton.addEventListener('click', () => this.showModal());
            gameUI.appendChild(skillTreeButton);
        }
    }
    
    showModal() {
        this.renderSkillTree();
        this.modal.style.display = 'flex';
    }
    
    hideModal() {
        this.modal.style.display = 'none';
    }
    
    renderSkillTree() {
        // Clear previous content
        this.skillTreeSvg.innerHTML = '';
        
        // Create SVG element
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '800');
        svg.setAttribute('height', '700');
        svg.setAttribute('viewBox', '0 0 800 700');
        
        // Draw connections first (so they appear behind nodes)
        for (const skillId in this.skills) {
            const skill = this.skills[skillId];
            
            // Draw connections to dependencies
            for (const depId of skill.dependencies) {
                const depSkill = this.skills[depId];
                
                const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                line.setAttribute('x1', depSkill.x);
                line.setAttribute('y1', depSkill.y);
                line.setAttribute('x2', skill.x);
                line.setAttribute('y2', skill.y);
                line.setAttribute('stroke', this.getConnectionColor(depSkill.mastery, skill.mastery));
                line.setAttribute('stroke-width', '3');
                
                svg.appendChild(line);
            }
        }
        
        // Draw nodes
        for (const skillId in this.skills) {
            const skill = this.skills[skillId];
            
            // Create group for the node
            const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            g.setAttribute('class', 'skill-node');
            g.setAttribute('data-skill-id', skillId);
            
            // Create node circle
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', skill.x);
            circle.setAttribute('cy', skill.y);
            circle.setAttribute('r', '25');
            circle.setAttribute('fill', this.getNodeColor(skill.mastery));
            circle.setAttribute('stroke', '#000');
            circle.setAttribute('stroke-width', '2');
            
            // Add tooltip functionality
            g.addEventListener('mouseover', (e) => this.showTooltip(e, skill));
            g.addEventListener('mouseout', () => this.hideTooltip());
            
            g.appendChild(circle);
            
            // Add text label
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', skill.x);
            text.setAttribute('y', skill.y + 45);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('fill', '#fff');
            text.setAttribute('font-size', '12px');
            text.textContent = skill.name;
            
            g.appendChild(text);
            svg.appendChild(g);
        }
        
        this.skillTreeSvg.appendChild(svg);
    }
    
    getNodeColor(mastery) {
        if (mastery >= 80) return '#4CAF50'; // Green - Mastered
        if (mastery >= 50) return '#FFC107'; // Yellow - In Progress
        if (mastery > 0) return '#FF9800';   // Orange - Started
        return '#607D8B';                    // Gray - Locked
    }
    
    getConnectionColor(sourceMastery, targetMastery) {
        if (sourceMastery >= 50 && targetMastery > 0) {
            return '#4CAF50'; // Green - Active connection
        }
        if (sourceMastery >= 50) {
            return '#FFC107'; // Yellow - Available connection
        }
        return '#607D8B'; // Gray - Locked connection
    }
    
    showTooltip(event, skill) {
        // Remove any existing tooltip
        this.hideTooltip();
        
        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.id = 'skill-tooltip';
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${event.clientX + 10}px`;
        tooltip.style.top = `${event.clientY + 10}px`;
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        tooltip.style.color = '#fff';
        tooltip.style.padding = '10px';
        tooltip.style.borderRadius = '5px';
        tooltip.style.zIndex = '1000';
        tooltip.style.maxWidth = '250px';
        
        // Add content
        tooltip.innerHTML = `
            <h3>${skill.name}</h3>
            <p>${skill.description}</p>
            <div class="mastery-bar">
                <div class="mastery-progress" style="width: ${skill.mastery}%; background-color: ${this.getNodeColor(skill.mastery)}"></div>
            </div>
            <p>Mastery: ${skill.mastery}%</p>
        `;
        
        // Add to DOM
        document.body.appendChild(tooltip);
    }
    
    hideTooltip() {
        const tooltip = document.getElementById('skill-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
    
    updateSkillMastery(skillId, mastery) {
        if (this.skills[skillId]) {
            this.skills[skillId].mastery = Math.min(100, Math.max(0, mastery));
            this.saveProgress();
        }
    }
    
    completeChallenge(levelId, challengeId) {
        console.log(`Skill tree updating for: Level ${levelId}, Challenge ${challengeId}`);
        
        // Convert levelId to integer if it's a string
        levelId = parseInt(levelId);
        
        // Map challenges to skills
        const challengeSkillMap = {
            '1-0': 'basic_prompting',
            '2-0': 'repetition',
            '2-1': 'echo_formatting',
            '3-0': 'parameter_tuning',
            '3-1': 'temperature_control',
            '3-2': 'token_management',
            '4-0': 'persona_design',
            '4-1': 'role_playing',
            '5-0': 'negative_prompting',
            '5-1': 'boundary_setting',
            '5-2': 'ethical_guidelines',
            '6-0': 'prompt_frameworks',
            '6-1': 'chain_prompting'
        };
        
        const key = `${levelId}-${challengeId}`;
        const skillId = challengeSkillMap[key];
        
        console.log(`Mapped to skill: ${skillId}`);
        
        // Always unlock skills for the current level, even if specific challenge mapping not found
        for (const id in this.skills) {
            if (this.skills[id].level <= levelId && this.skills[id].mastery === 0) {
                this.updateSkillMastery(id, 25);
                console.log(`Unlocked skill ${id} for level ${levelId}`);
            }
        }
        
        // If we have a specific skill mapping, update its mastery
        if (skillId && this.skills[skillId]) {
            this.updateSkillMastery(skillId, this.skills[skillId].mastery + 25);
            console.log(`Updated skill ${skillId} mastery to ${this.skills[skillId].mastery}%`);
        }
        
        // Check for mastery skill update
        if (levelId >= 6) {
            this.updateSkillMastery('prompt_engineering_mastery', 
                this.calculateMasteryProgress());
        }
        
        // Force refresh the skill tree if it's visible
        if (this.modal.style.display === 'flex') {
            this.renderSkillTree();
        }
        
        // Save progress
        this.saveProgress();
    }
    
    calculateMasteryProgress() {
        let totalMastery = 0;
        let skillCount = 0;
        
        for (const skillId in this.skills) {
            if (skillId !== 'prompt_engineering_mastery') {
                totalMastery += this.skills[skillId].mastery;
                skillCount++;
            }
        }
        
        return Math.round(totalMastery / skillCount);
    }
    
    loadProgress() {
        const savedProgress = localStorage.getItem('promptCraftSkillTree');
        if (savedProgress) {
            try {
                const progress = JSON.parse(savedProgress);
                for (const skillId in progress) {
                    if (this.skills[skillId]) {
                        this.skills[skillId].mastery = progress[skillId];
                    }
                }
            } catch (e) {
                console.error('Error loading skill tree progress:', e);
            }
        }
    }
    
    saveProgress() {
        const progress = {};
        for (const skillId in this.skills) {
            progress[skillId] = this.skills[skillId].mastery;
        }
        localStorage.setItem('promptCraftSkillTree', JSON.stringify(progress));
    }
}

// Create and export the skill tree manager
const skillTreeManager = new SkillTreeManager();
