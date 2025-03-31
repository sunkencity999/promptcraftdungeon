// --- START OF FILE educational_content.js ---

// Educational Content Manager for PromptCraft Dungeon
// Handles displaying educational content in the modal

class EducationalContentManager {
    constructor() {
        console.log("[EduContent] Constructor started.");
        this.modal = document.getElementById('educational-modal');
        this.contentContainer = document.getElementById('modal-content-container');
        this.closeButton = document.querySelector('.close-modal');
        this.tabButtons = document.querySelectorAll('.tab-button');
        this.theoryButton = document.getElementById('theory-button');
        this.examplesButton = document.getElementById('examples-button');
        this.practiceButton = document.getElementById('practice-button'); // May be null

        console.log("[EduContent] Theory button element:", this.theoryButton);
        console.log("[EduContent] Examples button element:", this.examplesButton);
        console.log("[EduContent] Practice button element:", this.practiceButton);

        this.currentLevel = 1;
        this.currentChallenge = '1-0'; // Format like "level-challengeIndex"
        this.activeTab = 'theory';
        this.isFileProtocol = window.location.protocol === 'file:';

        // Bind methods to ensure correct 'this' context when used as handlers/callbacks
        this.showTheory = this.showTheory.bind(this);
        this.showExamples = this.showExamples.bind(this);
        this.showPractice = this.showPractice.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.hideModal = this.hideModal.bind(this);
        // No need to bind getChallengeInfo or getLevelDirectoryName as they are called internally

        // Show a warning if running in file:// protocol
        if (this.isFileProtocol) {
            console.warn('[EduContent] Running in file:// protocol - educational content may not load properly');
            console.warn('[EduContent] Consider using a local web server for full functionality');
            const warningDiv = document.createElement('div');
            warningDiv.id = 'file-protocol-warning'; // Add ID to prevent duplicates
            warningDiv.style.position = 'fixed';
            warningDiv.style.bottom = '10px';
            warningDiv.style.right = '10px';
            warningDiv.style.backgroundColor = 'rgba(255, 200, 0, 0.8)';
            warningDiv.style.color = 'black';
            warningDiv.style.padding = '10px';
            warningDiv.style.borderRadius = '5px';
            warningDiv.style.fontSize = '12px';
            warningDiv.style.fontFamily = 'monospace';
            warningDiv.style.zIndex = '1000';
            warningDiv.style.maxWidth = '300px';
            warningDiv.innerHTML = `
                <p style="margin: 0 0 5px 0;"><strong>File Protocol Warning</strong></p>
                <p style="margin: 0 0 5px 0;">Content may not load correctly.</p>
                <p style="margin: 0 0 5px 0;">Use a server for best results:</p>
                <code style="display: block; background: #eee; padding: 3px;">python -m http.server</code>
                <p style="margin: 5px 0 0 0;"><button id="dismiss-warning" style="padding: 5px; margin-top: 5px; font-size: 10px; cursor: pointer;">Dismiss</button></p>
            `;
             if (!document.getElementById(warningDiv.id)) {
                document.body.appendChild(warningDiv);
                const dismissButton = warningDiv.querySelector('#dismiss-warning');
                if (dismissButton) {
                    dismissButton.addEventListener('click', () => { warningDiv.style.display = 'none'; });
                }
             }
        }

        this.initEventListeners();
        console.log("[EduContent] Constructor finished.");
    }

    initEventListeners() {
        console.log("[EduContent] initEventListeners started.");
        // Close modal
        if (this.closeButton) {
             this.closeButton.addEventListener('click', this.hideModal);
        } else { console.warn("[EduContent] Close button not found."); }

        // Click outside
         if (this.modal) {
             this.modal.addEventListener('click', (e) => {
                 if (e.target === this.modal) {
                     console.log("[EduContent] Click outside modal content detected.");
                     this.hideModal();
                 }
             });
         } else { console.warn("[EduContent] Modal element not found for outside click listener."); }

        // Tab switching
         if (this.tabButtons.length > 0) {
             this.tabButtons.forEach(button => {
                 button.addEventListener('click', () => {
                     const tabName = button.getAttribute('data-tab');
                     console.log(`[EduContent] Tab button clicked: ${tabName}`);
                     this.switchTab(tabName);
                 });
             });
         } else { console.warn("[EduContent] No Tab buttons found."); }

        // Theory button
         if (this.theoryButton) {
             this.theoryButton.addEventListener('click', this.showTheory);
             console.log("[EduContent] Theory button listener attached.");
         } else { console.warn("[EduContent] Theory button not found for listener attachment."); }

        // Examples button
         if (this.examplesButton) {
             this.examplesButton.addEventListener('click', this.showExamples);
             console.log("[EduContent] Examples button listener attached.");
         } else { console.warn("[EduContent] Examples button not found for listener attachment."); }

        // Practice button
        if (this.practiceButton) {
            this.practiceButton.addEventListener('click', this.showPractice);
             console.log("[EduContent] Practice button listener attached.");
        } else {
             console.warn("[EduContent] Practice button not found. Hiding 'Practice' tab if it exists.");
             // Optionally disable or hide the corresponding tab button
             const practiceTabButton = document.querySelector('.tab-button[data-tab="practice"]');
             if (practiceTabButton) {
                 practiceTabButton.style.display = 'none'; // Hide the tab
             }
        }

        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal && this.modal.style.display !== 'none') {
                console.log("[EduContent] Escape key pressed, hiding modal.");
                this.hideModal();
            }
        });
        console.log("[EduContent] initEventListeners finished.");
    }

    /**
     * Update the current level and challenge state
     * @param {number} level - Current level number (e.g., 1)
     * @param {string} challengeStateId - Current challenge state ID (e.g., '1-0', '1-1')
     */
    updateContext(level, challengeStateId) {
        this.currentLevel = level;
        this.currentChallenge = challengeStateId;
        console.log(`[EduContent] Educational context updated: Level ${level}, Challenge State ID ${challengeStateId}`);
    }

    /**
     * Get the level directory name from level number
     * @param {number} levelNum - Level number
     * @returns {string} - Level name in snake_case (e.g., 'level1_hall_of_first_words')
     */
    getLevelDirectoryName(levelNum) {
         const levelNames = {
            1: 'hall_of_first_words', 2: 'echoing_caverns', 3: 'parameter_chambers',
            4: 'persona_nexus', 5: 'constraint_core', 6: 'framework_observatory',
            7: 'creative_writing_realm', 8: 'code_forge', 9: 'data_analysis_nexus',
            10: 'hr_management_suite', 11: 'sysadmin_command_center', 12: 'research_laboratory',
            13: 'master_prompting_citadel'
         };
         const baseName = levelNames[levelNum] || `unknown_level_${levelNum}`;
         return `level${levelNum}_${baseName}`;
    }

    /**
     * Helper function to get information about the current challenge.
     * @param {number} levelNum - The current level number (e.g., 1)
     * @param {string} challengeStateId - The game state's current challenge identifier (e.g., '1-0', '1-1')
     * @returns {object|null} An object { levelDir, actualId, simpleName } or null if info cannot be determined.
     */
    getChallengeInfo(levelNum, challengeStateId) {
        console.log(`[EduContent] getChallengeInfo called with: level ${levelNum}, stateId ${challengeStateId}`);
        if (!window.contentLoader || !window.contentLoader.contentCache) {
             console.error("[EduContent] getChallengeInfo: contentLoader or its cache is not available.");
             return null;
        }

        const levelDir = this.getLevelDirectoryName(levelNum);
        const levelData = window.contentLoader.contentCache.levels[levelDir];

        if (!levelData || !levelData.info || !Array.isArray(levelData.info.challenges)) {
            console.error(`[EduContent] getChallengeInfo: Cannot find level data/info/challenges in cache for ${levelDir}. Cache state:`, window.contentLoader.contentCache.levels);
            return null;
        }

        const parts = challengeStateId.split('-');
        if (parts.length < 2 || typeof parts[1] === 'undefined') {
             console.error(`[EduContent] getChallengeInfo: Invalid challengeStateId format: ${challengeStateId}. Expected format like 'level-index'.`);
             return null;
        }
        const challengeIndexStr = parts[1];
        const challengeIndex = parseInt(challengeIndexStr, 10);

        if (isNaN(challengeIndex) || challengeIndex < 0 || challengeIndex >= levelData.info.challenges.length) {
             console.error(`[EduContent] getChallengeInfo: Challenge index ${challengeIndex} (from ${challengeStateId}) is out of bounds for level ${levelDir}. Challenges available: ${levelData.info.challenges.length}`, levelData.info.challenges);
             return null;
        }

        const challengeIdentifier = levelData.info.challenges[challengeIndex];
        let actualId = null;
         if (typeof challengeIdentifier === 'string') {
            actualId = challengeIdentifier;
        } else if (typeof challengeIdentifier === 'object' && challengeIdentifier !== null && typeof challengeIdentifier.id === 'string') {
            actualId = challengeIdentifier.id;
        }

        if (!actualId) {
             console.error(`[EduContent] getChallengeInfo: Could not determine actual challenge file ID for ${levelDir} at index ${challengeIndex}. Identifier was:`, challengeIdentifier);
             return null;
        }

        const simpleName = `challenge${challengeIndex + 1}`; // Calculate simple name

        console.log(`[EduContent] getChallengeInfo resolved to:`, { levelDir, actualId, simpleName });
        return { levelDir, actualId, simpleName };
    }

    /**
     * Show the theory content for the current challenge
     */
    async showTheory() {
        console.log("[EduContent] showTheory called.");
        let challengeInfo = null;
        let finalMarkdown = ''; // Initialize here for error case
        const placeholderTheoryBase = `# Challenge ???\n\nContent is being prepared...`; // Base placeholder

        try {
            challengeInfo = this.getChallengeInfo(this.currentLevel, this.currentChallenge);
            if (!challengeInfo) {
                throw new Error(`Could not retrieve challenge info for state: ${this.currentLevel}-${this.currentChallenge}`);
            }

            const { levelDir, actualId, simpleName } = challengeInfo;
            const specificPlaceholderTheory = placeholderTheoryBase.replace('???', actualId); // Specific placeholder for comparison
            const theoryPath = `/content/levels/${levelDir}/challenges/${simpleName}_theory.md`; // Path using simpleName

            console.log(`[EduContent] showTheory - Loading theory for: ${levelDir}/${actualId} (file: ${simpleName}_theory.md)`);

            let theoryContent;
            const cache = window.contentLoader?.contentCache?.levels?.[levelDir]?.challenges?.[actualId];
            console.log(`[EduContent] showTheory - Cache check. Cache found: ${!!cache}. Theory key exists: ${!!cache?.theory}`);

            // Check if valid content exists in cache
            if (cache?.theory && cache.theory.trim() !== specificPlaceholderTheory.trim()) {
                 console.log(`[EduContent] showTheory - Using valid theory from cache for ${actualId}.`);
                 theoryContent = cache.theory;
            } else {
                 // Cache has placeholder or no theory entry, attempt fetch
                 if (cache?.theory) console.log(`[EduContent] showTheory - Theory in cache for ${actualId} is placeholder. Attempting direct load...`);
                 else console.log(`[EduContent] showTheory - Theory not in cache for ${actualId}. Attempting direct load...`);

                 console.log(`[EduContent] showTheory - Fetching from: ${theoryPath}`);
                 if (!window.contentLoader) throw new Error("contentLoader not available globally.");

                 try {
                    theoryContent = await window.contentLoader.fetchMarkdown(theoryPath);
                    console.log(`[EduContent] showTheory - Successfully fetched theory directly for ${simpleName}.`);

                    // Update cache
                    if (window.contentLoader.contentCache.levels[levelDir]?.challenges) {
                        if (!window.contentLoader.contentCache.levels[levelDir].challenges[actualId]) {
                            window.contentLoader.contentCache.levels[levelDir].challenges[actualId] = {}; // Ensure challenge object exists
                        }
                        window.contentLoader.contentCache.levels[levelDir].challenges[actualId].theory = theoryContent;
                        console.log(`[EduContent] showTheory - Updated cache for ${actualId} with fetched theory.`);
                    } else {
                         console.warn(`[EduContent] showTheory - Could not update cache for ${actualId} - level/challenge structure missing.`);
                    }

                 } catch (fetchError) {
                    console.error(`[EduContent] showTheory - Direct fetch failed for ${theoryPath}:`, fetchError);
                    // Set specific error message for display
                    theoryContent = `# Error Loading Theory\n\nCould not load theory content for **${actualId}**.\n\nReason: ${fetchError.message}\n\nPlease ensure the file exists at \`${theoryPath}\` and the server is running correctly. Check console for 404 errors.`;
                 }
            }

            // Prepare final markdown, adding title if it's not an error message
            finalMarkdown = theoryContent;
            if (!theoryContent.trim().startsWith('#')) {
                finalMarkdown = `# Theory: ${actualId.replace(/_/g, ' ')}\n\n${theoryContent}`;
            } else if (!theoryContent.trim().startsWith(`# Challenge ${actualId}`) && !theoryContent.trim().startsWith(`# Error`)) {
                // Prepend title if it has some other H1
                finalMarkdown = `# Theory: ${actualId.replace(/_/g, ' ')}\n\n${theoryContent}`;
            } else if (theoryContent.trim().startsWith(`# Challenge ${actualId}`)) {
                 // Replace generic title with a more specific one
                 finalMarkdown = theoryContent.replace(`# Challenge ${actualId}`, `# Theory: ${actualId.replace(/_/g, ' ')}`);
            }


        } catch (error) {
             // Catch errors from getChallengeInfo or other synchronous issues
             console.error('[EduContent] showTheory - General error:', error);
             const attemptedId = challengeInfo?.actualId || '(Error determining ID)';
             finalMarkdown = `# Error\n\nAn unexpected error occurred in showTheory.\n\nDetails: ${error.message}\nContext: Level ${this.currentLevel}, State ID ${this.currentChallenge}, Attempted ID ${attemptedId}`;
        }

        // Show modal regardless of success or failure (it will show content or error message)
        console.log(`[EduContent] showTheory - Calling showModal. Tab: theory. Content snippet:`, finalMarkdown?.substring(0, 100));
        this.showModal('theory', finalMarkdown);
    }

    /**
     * Show examples related to the current challenge
     */
    async showExamples() {
        console.log("[EduContent] showExamples called.");
        let challengeInfo = null;
        let finalMarkdown = '';
        const placeholderExamples = "Examples are being prepared...";

        try {
            challengeInfo = this.getChallengeInfo(this.currentLevel, this.currentChallenge);
            if (!challengeInfo) {
                throw new Error(`Could not retrieve challenge info for state: ${this.currentLevel}-${this.currentChallenge}`);
            }

            const { levelDir, actualId, simpleName } = challengeInfo;
            const examplesPath = `/content/levels/${levelDir}/challenges/${simpleName}_examples.md`; // Path using simpleName
            const levelExamplesPath = `/content/levels/${levelDir}/level_examples.md`; // Level fallback path

            console.log(`[EduContent] showExamples - Loading examples for: ${levelDir}/${actualId} (file: ${simpleName}_examples.md)`);

            let examplesContent;
            const cache = window.contentLoader?.contentCache?.levels?.[levelDir]?.challenges?.[actualId];
            console.log(`[EduContent] showExamples - Cache check. Cache found: ${!!cache}. Examples key exists: ${!!cache?.examples}`);

            // Check if valid content exists in cache
            if (cache?.examples && cache.examples.trim() !== placeholderExamples.trim()) {
                 console.log(`[EduContent] showExamples - Using valid examples from cache for ${actualId}.`);
                 examplesContent = cache.examples;
            } else {
                 // Cache has placeholder or no examples entry, attempt fetch
                 if (cache?.examples) console.log(`[EduContent] showExamples - Examples in cache for ${actualId} is placeholder. Attempting direct load...`);
                 else console.log(`[EduContent] showExamples - Examples not in cache for ${actualId}. Attempting direct load...`);

                 if (!window.contentLoader) throw new Error("contentLoader not available globally.");
                 try {
                    // Try challenge-specific examples first
                    console.log(`[EduContent] showExamples - Fetching challenge examples from: ${examplesPath}`);
                    examplesContent = await window.contentLoader.fetchMarkdown(examplesPath);
                    console.log(`[EduContent] showExamples - Successfully fetched challenge examples directly for ${simpleName}.`);

                 } catch (challengeError) {
                    console.warn(`[EduContent] showExamples - Challenge examples fetch failed for ${examplesPath}: ${challengeError.message}. Trying level examples...`);
                     try {
                        // Fall back to level-specific examples
                        console.log(`[EduContent] showExamples - Fetching level examples from: ${levelExamplesPath}`);
                        examplesContent = await window.contentLoader.fetchMarkdown(levelExamplesPath);
                        console.log(`[EduContent] showExamples - Successfully fetched level examples for ${levelDir}.`);
                     } catch (levelError) {
                        console.warn(`[EduContent] showExamples - Level examples fetch failed for ${levelExamplesPath}: ${levelError.message}. Using specific error message.`);
                        examplesContent = `# Examples Not Found\n\nCould not load example content for **${actualId}**.\n\nFile not found or error accessing:\n- \`${examplesPath}\`\n- \`${levelExamplesPath}\`\n\nCheck console for details.`;
                     }
                 }

                 // Update cache if fetch was successful (either challenge or level) and content isn't the error message
                 if (!examplesContent.includes("Examples Not Found")) {
                    if (window.contentLoader.contentCache.levels[levelDir]?.challenges) {
                        if (!window.contentLoader.contentCache.levels[levelDir].challenges[actualId]) {
                            window.contentLoader.contentCache.levels[levelDir].challenges[actualId] = {};
                        }
                        window.contentLoader.contentCache.levels[levelDir].challenges[actualId].examples = examplesContent;
                        console.log(`[EduContent] showExamples - Updated cache for ${actualId} with fetched examples.`);
                    } else {
                         console.warn(`[EduContent] showExamples - Could not update cache for ${actualId} - level/challenge structure missing.`);
                    }
                 }
            }

            // Prepare final markdown, adding title if it's not an error message
            finalMarkdown = examplesContent;
            if (!examplesContent.trim().startsWith('#')) {
                finalMarkdown = `# Examples: ${actualId.replace(/_/g, ' ')}\n\n${examplesContent}`;
            } else if (!examplesContent.trim().startsWith(`# Examples`)) {
                 // Prepend title if it has some other H1
                 finalMarkdown = `# Examples: ${actualId.replace(/_/g, ' ')}\n\n${examplesContent}`;
            }

        } catch (error) {
            console.error('[EduContent] showExamples - General error:', error);
            const attemptedId = challengeInfo?.actualId || '(Error determining ID)';
            finalMarkdown = `# Error\n\nAn unexpected error occurred in showExamples.\n\nDetails: ${error.message}\nContext: Level ${this.currentLevel}, State ID ${this.currentChallenge}, Attempted ID ${attemptedId}`;
        }

        // Show modal regardless of success or failure
        console.log(`[EduContent] showExamples - Calling showModal. Tab: examples. Content snippet:`, finalMarkdown?.substring(0, 100));
        this.showModal('examples', finalMarkdown);
    }

    /**
     * Show practice exercises related to the current challenge
     */
    async showPractice() {
        console.log("[EduContent] showPractice called.");
        let challengeInfo = null;
        let finalMarkdown = '';
        const placeholderPracticeBase = "# Practice Exercises"; // Base placeholder start
        const placeholderPracticeLoadedError = "# Practice\n\nPractice content could not be loaded.";

        try {
            challengeInfo = this.getChallengeInfo(this.currentLevel, this.currentChallenge);
            if (!challengeInfo) {
                throw new Error(`Could not retrieve challenge info for state: ${this.currentLevel}-${this.currentChallenge}`);
            }

            const { levelDir, actualId, simpleName } = challengeInfo;
            const practicePath = `/content/levels/${levelDir}/challenges/${simpleName}_practice.md`; // Path using simpleName
            const levelPracticePath = `/content/levels/${levelDir}/level_practice.md`; // Level fallback path

            console.log(`[EduContent] showPractice - Loading practice for: ${levelDir}/${actualId} (file: ${simpleName}_practice.md)`);

            let practiceContent;
            const cache = window.contentLoader?.contentCache?.levels?.[levelDir]?.challenges?.[actualId];
            console.log(`[EduContent] showPractice - Cache check. Cache found: ${!!cache}. Practice key exists: ${!!cache?.practice}`);

             // Check if valid content exists in cache (not a known placeholder)
             const isPlaceholderInCache = !cache?.practice ||
                                         cache.practice.trim().startsWith(placeholderPracticeBase) ||
                                         cache.practice.trim() === placeholderPracticeLoadedError.trim();

            if (cache?.practice && !isPlaceholderInCache) {
                 console.log(`[EduContent] showPractice - Using valid practice from cache for ${actualId}.`);
                 practiceContent = cache.practice;
             } else {
                if (cache?.practice && isPlaceholderInCache) console.log(`[EduContent] showPractice - Practice in cache for ${actualId} is placeholder. Attempting direct load...`);
                else console.log(`[EduContent] showPractice - Practice not in cache for ${actualId}. Attempting direct load...`);

                if (!window.contentLoader) throw new Error("contentLoader not available globally.");
                try {
                    console.log(`[EduContent] showPractice - Fetching challenge practice from: ${practicePath}`);
                    practiceContent = await window.contentLoader.fetchMarkdown(practicePath);
                    console.log(`[EduContent] showPractice - Successfully fetched challenge practice for ${simpleName}.`);
                } catch (challengeError) {
                    console.warn(`[EduContent] showPractice - Challenge practice fetch failed for ${practicePath}: ${challengeError.message}. Trying level practice...`);
                    try {
                        console.log(`[EduContent] showPractice - Fetching level practice from: ${levelPracticePath}`);
                        practiceContent = await window.contentLoader.fetchMarkdown(levelPracticePath);
                        console.log(`[EduContent] showPractice - Successfully fetched level practice for ${levelDir}.`);
                    } catch (levelError) {
                        console.warn(`[EduContent] showPractice - Level practice fetch failed for ${levelPracticePath}: ${levelError.message}. Using specific error message.`);
                        practiceContent = `# Practice Not Found\n\nCould not load practice content for **${actualId}**.\n\nFile not found or error accessing:\n- \`${practicePath}\`\n- \`${levelPracticePath}\`\n\nCheck console for details.`;
                    }
                }

                // Update cache if fetch was successful and content isn't the error message
                if (!practiceContent.includes("Practice Not Found")) {
                     if (window.contentLoader.contentCache.levels[levelDir]?.challenges) {
                        if (!window.contentLoader.contentCache.levels[levelDir].challenges[actualId]) {
                            window.contentLoader.contentCache.levels[levelDir].challenges[actualId] = {};
                        }
                        window.contentLoader.contentCache.levels[levelDir].challenges[actualId].practice = practiceContent; // Use 'practice' key
                        console.log(`[EduContent] showPractice - Updated cache for ${actualId} with fetched practice.`);
                    } else {
                         console.warn(`[EduContent] showPractice - Could not update cache for ${actualId} - level/challenge structure missing.`);
                    }
                }
            }

            // Prepare final markdown, adding title if it's not an error message
            finalMarkdown = practiceContent;
            if (!practiceContent.trim().startsWith('#')) {
                finalMarkdown = `# Practice: ${actualId.replace(/_/g, ' ')}\n\n${practiceContent}`;
            } else if (!practiceContent.trim().startsWith(`# Practice`)) {
                 // Prepend title if it has some other H1
                 finalMarkdown = `# Practice: ${actualId.replace(/_/g, ' ')}\n\n${practiceContent}`;
            }

        } catch (error) {
            console.error('[EduContent] showPractice - General error:', error);
            const attemptedId = challengeInfo?.actualId || '(Error determining ID)';
            finalMarkdown = `# Error\n\nAn unexpected error occurred in showPractice.\n\nDetails: ${error.message}\nContext: Level ${this.currentLevel}, State ID ${this.currentChallenge}, Attempted ID ${attemptedId}`;
        }

        // Show modal regardless of success or failure
        console.log(`[EduContent] showPractice - Calling showModal. Tab: practice. Content snippet:`, finalMarkdown?.substring(0, 100));
        this.showModal('practice', finalMarkdown);
    }

    /**
     * Show the modal with the specified content and activate the correct tab
     * @param {string} tab - Tab to activate ('theory', 'examples', 'practice')
     * @param {string} [content=''] - Markdown content to display. If empty, shows loading/error state.
     */
    showModal(tab, content = '') {
        console.log(`[EduContent] showModal called. Tab: ${tab}. Has content: ${!!content}`);
        if (!this.modal || !this.contentContainer || !this.tabButtons) {
            console.error("[EduContent] showModal - Cannot proceed, essential modal elements missing!");
            return;
        }

        this.activeTab = tab;
        this.tabButtons.forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-tab') === tab);
        });

        if (content) {
            try {
                 if (typeof marked === 'undefined') {
                    throw new Error("Markdown parser (marked.js) not loaded.");
                 }
                const htmlContent = marked.parse(content);
                // console.log(`[EduContent] showModal - Parsed HTML (first 100 chars):`, htmlContent?.substring(0, 100));
                this.contentContainer.innerHTML = htmlContent;

             } catch (error) {
                console.error(`[EduContent] showModal - Error rendering content for tab ${tab}:`, error);
                this.contentContainer.innerHTML = `
                    <p class="feedback-bad">Error rendering content.</p>
                    <p>Details: ${error.message}</p>
                    <hr>
                    <p>Raw Content (first 500 chars):</p>
                    <pre style="white-space: pre-wrap; word-wrap: break-word; border: 1px dashed grey; padding: 5px;">${content.substring(0, 500)}...</pre>
                `;
            }
        } else {
             console.log("[EduContent] showModal - No content provided, setting loading indicator.");
             // Only set loading if not already showing an error from the calling function
             if (!this.contentContainer.innerHTML.includes('feedback-bad')) {
                 this.contentContainer.innerHTML = `<p class="feedback-hint">Loading content for ${tab}...</p>`;
             }
        }

        console.log("[EduContent] showModal - Setting modal display to flex");
        this.modal.style.display = 'flex';
        this.contentContainer.scrollTop = 0; // Scroll to top
    }

    /**
     * Hide the modal
     */
    hideModal() {
        console.log("[EduContent] hideModal called.");
        if (this.modal) {
             this.modal.style.display = 'none';
        } else {
             console.error("[EduContent] hideModal - Modal element is null!");
        }
    }

    /**
     * Switch active tab and load its content
     * @param {string} tabName - Name of tab to activate ('theory', 'examples', 'practice')
     */
    switchTab(tabName) {
        console.log(`[EduContent] switchTab called for: ${tabName}`);
        // Prevent unnecessary reloads if already active
        if (this.activeTab === tabName && this.modal && this.modal.style.display === 'flex') {
             console.log(`[EduContent] Tab ${tabName} is already active.`);
             return;
        }

        this.activeTab = tabName;
        this.tabButtons.forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-tab') === tabName);
        });

        // Show loading indicator immediately before async calls
        this.contentContainer.innerHTML = '<p class="feedback-hint">Loading content...</p>';
        this.contentContainer.scrollTop = 0;

        // Call the appropriate async loading function
        if (tabName === 'theory') {
            this.showTheory(); // This now handles showing the modal
        } else if (tabName === 'examples') {
            this.showExamples(); // This now handles showing the modal
        } else if (tabName === 'practice') {
            this.showPractice(); // This now handles showing the modal
        } else {
            console.error(`[EduContent] switchTab - Unknown tab name: ${tabName}`);
            this.contentContainer.innerHTML = `<p class="feedback-bad">Unknown tab selected.</p>`;
        }
    }

} // End of EducationalContentManager class


// Initialize after DOM is ready and contentLoader exists
document.addEventListener('DOMContentLoaded', () => {
    console.log("[EduContent] DOMContentLoaded event fired.");
    if (window.contentLoader) {
        // Create instance and assign. Binding happens inside constructor.
        window.educationalContent = new EducationalContentManager();
        console.log("[EduContent] EducationalContentManager instance assigned to window.");
    } else {
         console.error("[EduContent] Failed to initialize: contentLoader not found on window at DOMContentLoaded.");
         const statusBar = document.getElementById('status-bar');
         if (statusBar && !document.getElementById('edu-sys-error')) { // Check if error already exists
             const errorSpan = document.createElement('span');
             errorSpan.id = 'edu-sys-error'; // Add ID
             errorSpan.textContent = ' Error loading educational system!';
             errorSpan.style.color = '#FF4136';
             errorSpan.style.marginLeft = '10px';
             statusBar.appendChild(errorSpan);
         }
    }
});

// --- END OF FILE educational_content.js ---