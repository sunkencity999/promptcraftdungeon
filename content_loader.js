// --- START OF MODIFIED content_loader.js ---

// ... (keep ContentLoader class definition and constructor) ...

class ContentLoader {
    constructor() {
        this.contentCache = {
            levels: {},
            tutorials: {},
            examples: {}
        };
        this.loadingPromises = [];
    }

    // ... (keep initialize function) ...
    async initialize() {
        console.log("Initializing content loader...");
        try {
            // Check if we're running in a file:// context
            const isFileProtocol = window.location.protocol === 'file:';
            if (isFileProtocol) {
                console.log("Running in file:// protocol - some content may not load properly");
                console.log("Consider using a local web server instead for full functionality");
            }

            console.log("Attempting to load level index...");
            let levelIndex;

            try {
                levelIndex = await this.fetchJSON('/content/level_index.json');
                console.log("Level index loaded successfully:", levelIndex);
            } catch (indexError) {
                console.warn("Failed to load level index, using default:", indexError);
                levelIndex = {
                    "levels": [
                        "level1_hall_of_first_words", "level2_echoing_caverns",
                        "level3_parameter_chambers", "level4_persona_nexus",
                        "level5_constraint_core", "level6_framework_observatory",
                         // Add others if they exist in your final index
                        "level7_creative_writing_realm", "level8_code_forge",
                        "level9_data_analysis_nexus", "level10_hr_management_suite",
                        "level11_sysadmin_command_center", "level12_research_laboratory",
                        "level13_master_prompting_citadel"
                    ]
                };
            }

            const loadPromises = [];
            for (const levelId of levelIndex.levels) { // levelId is like 'level1_hall_of_first_words'
                console.log(`Queueing load for level: ${levelId}`);
                loadPromises.push(
                    this.loadLevelInfo(levelId).catch(err => {
                        console.warn(`Non-critical error loading level info/base for ${levelId}:`, err);
                        // Ensure a basic level structure exists in cache on error
                        if (!this.contentCache.levels[levelId]) {
                           this.contentCache.levels[levelId] = {
                                info: { id: levelId.split('_')[0].replace('level', ''), name: `Level ${levelId}`, challenges: [] },
                                intro: `# Level ${levelId}\n\nContent failed to load...`,
                                summary: "Content failed to load...",
                                challenges: {}
                           };
                        }
                        return this.contentCache.levels[levelId]; // Allow Promise.all to resolve
                    })
                );
            }

            console.log("Waiting for all level info and initial challenges to load...");
            try {
                const results = await Promise.all(loadPromises);
                console.log(`Loaded base info for ${results.length} levels.`);
            } catch (loadError) {
                // Errors inside loadLevelInfo/loadChallenge are caught individually now
                console.warn("Some levels might have encountered issues during loading (check previous warnings).");
            }

             console.log("Content loader initialization finished.");
            return true; // Always resolve true
        } catch (error) {
            console.error("FATAL: Failed to initialize content loader:", error);
            this.setupMinimalContentCache(); // Setup minimal as fallback
            return true; // Allow game to continue if possible
        }
    }

    // ... (keep setupMinimalContentCache) ...
    setupMinimalContentCache() {
        console.log("Setting up minimal content cache...");
        const defaultLevels = [
            "level1_hall_of_first_words", "level2_echoing_caverns",
            "level3_parameter_chambers", "level4_persona_nexus",
            "level5_constraint_core", "level6_framework_observatory",
            "level7_creative_writing_realm", "level8_code_forge",
            "level9_data_analysis_nexus", "level10_hr_management_suite",
            "level11_sysadmin_command_center", "level12_research_laboratory",
            "level13_master_prompting_citadel"
        ];
        for (const levelId of defaultLevels) {
            if (!this.contentCache.levels[levelId]) { // Only add if not partially loaded
                const levelNumMatch = levelId.match(/^level(\d+)/);
                const levelNum = levelNumMatch ? levelNumMatch[1] : '?';
                const simpleChallengeId = `challenge1`; // Default first challenge
                const fullChallengeId = `${levelId}-${simpleChallengeId}`;

                this.contentCache.levels[levelId] = {
                    info: {
                        id: levelNum,
                        name: `Level ${levelNum}`,
                        challenges: [simpleChallengeId] // Needs actual ID if known
                    },
                    intro: `# Level ${levelId}\n\nContent is being prepared...`,
                    summary: "Content is being prepared...",
                    challenges: {
                        [simpleChallengeId]: { // Use a default ID key
                            config: { id: fullChallengeId, name: "Challenge 1", description: "This challenge is being prepared..." },
                            theory: `# Challenge ${simpleChallengeId}\n\nContent is being prepared...`,
                            examples: "Examples are being prepared..."
                        }
                    }
                };
            }
        }
        console.log("Minimal content cache setup complete");
    }


    async loadLevelInfo(levelId) { // levelId is like 'level1_hall_of_first_words'
        console.log(`Loading level info for ${levelId}...`);

        // Ensure base structure exists in cache
        if (!this.contentCache.levels[levelId]) {
             this.contentCache.levels[levelId] = {
                 info: null, // Will be loaded
                 intro: `# Level ${levelId}\n\nLoading intro...`,
                 summary: "Loading summary...",
                 challenges: {}
             };
        }
        const levelDataCache = this.contentCache.levels[levelId];


        // Load level_info.json first
        try {
            const infoPath = `/content/levels/${levelId}/level_info.json`;
            console.log(`Attempting to load level info from: ${infoPath}`);
            levelDataCache.info = await this.fetchJSON(infoPath);
            console.log(`Successfully loaded level info for ${levelId}:`, levelDataCache.info);
        } catch (infoError) {
            console.warn(`Could not load level info for ${levelId}:`, infoError);
             // Create minimal info if loading failed but wasn't created before
             if (!levelDataCache.info) {
                 const levelNumMatch = levelId.match(/^level(\d+)/);
                 levelDataCache.info = {
                     id: levelNumMatch ? levelNumMatch[1] : '?',
                     name: `Level ${levelId}`,
                     challenges: [] // Assume no challenges if info fails
                 };
             }
        }

        // Load intro markdown
        try {
            const introPath = `/content/levels/${levelId}/level_intro.md`;
            levelDataCache.intro = await this.fetchMarkdown(introPath);
            console.log(`Successfully loaded level intro for ${levelId}`);
        } catch (introError) {
            console.warn(`Could not load level intro for ${levelId}:`, introError);
            levelDataCache.intro = `# Level ${levelId}\n\nIntro content could not be loaded.`; // Set specific error message
        }

        // Load summary markdown
        try {
            const summaryPath = `/content/levels/${levelId}/level_summary.md`;
            levelDataCache.summary = await this.fetchMarkdown(summaryPath);
            console.log(`Successfully loaded level summary for ${levelId}`);
        } catch (summaryError) {
            console.warn(`Could not load level summary for ${levelId}:`, summaryError);
            levelDataCache.summary = "Summary content could not be loaded."; // Set specific error message
        }

        // Load challenges defined in level_info.json
        if (levelDataCache.info && Array.isArray(levelDataCache.info.challenges) && levelDataCache.info.challenges.length > 0) {
            console.log(`Loading ${levelDataCache.info.challenges.length} challenges for level ${levelId}...`);
            const challengeLoadPromises = [];

            // *** Iterate with index ***
            for (const [index, challengeIdentifier] of levelDataCache.info.challenges.entries()) {
                let challengeIdString = null; // This is the ID like 'challenge1_door' used for JSON
                if (typeof challengeIdentifier === 'string') {
                    challengeIdString = challengeIdentifier;
                } else if (typeof challengeIdentifier === 'object' && challengeIdentifier !== null && typeof challengeIdentifier.id === 'string') {
                    challengeIdString = challengeIdentifier.id;
                }

                if (!challengeIdString) {
                     console.warn(`Skipping invalid challenge identifier at index ${index} for level ${levelId}:`, challengeIdentifier);
                     continue;
                }

                 // *** Calculate the simple challenge name like 'challenge1', 'challenge2' ***
                 const simpleChallengeName = `challenge${index + 1}`;

                 console.log(`Queueing load for challenge: ${levelId}/${challengeIdString} (using simple name ${simpleChallengeName} for MD files)`);
                 challengeLoadPromises.push(
                    // *** Pass both IDs to loadChallenge ***
                    this.loadChallenge(levelId, challengeIdString, simpleChallengeName).catch(challengeError => {
                        console.warn(`Non-critical error loading challenge ${levelId}/${challengeIdString}:`, challengeError);
                        // Ensure placeholder exists in cache IF NOT ALREADY POPULATED by loadChallenge's catch
                         if (!levelDataCache.challenges[challengeIdString]) {
                             levelDataCache.challenges[challengeIdString] = {
                                config: { id: `${levelId}-${challengeIdString}`, name: `Challenge ${challengeIdString}`, description: "Content failed to load..." },
                                theory: `# Challenge ${challengeIdString}\n\nContent failed to load...`,
                                examples: "Examples failed to load..."
                             };
                         }
                        return levelDataCache.challenges[challengeIdString]; // Allow Promise.all to resolve
                    })
                );
            }
             // Wait for challenges specific to this level to finish loading *before* returning
             // This prevents race conditions where the game might try to access a challenge before it's loaded.
             await Promise.all(challengeLoadPromises);
             console.log(`Finished processing challenges for ${levelId}.`);

        } else {
            console.log(`No challenges defined or found for level ${levelId}`);
        }

        return levelDataCache; // Return the populated cache entry
    }

    /**
     * Load challenge data, theory, and examples.
     * @param {string} levelId - The level directory identifier (e.g., 'level1_hall_of_first_words')
     * @param {string} challengeId - The specific challenge identifier used for JSON (e.g., 'challenge1_door')
     * @param {string} simpleChallengeName - The index-based name used for MD files (e.g., 'challenge1')
     * @returns {Promise<object>} - Resolves with challenge data object
     */
    async loadChallenge(levelId, challengeId, simpleChallengeName) { // Added simpleChallengeName
        // Ensure level structure exists
         if (!this.contentCache.levels[levelId]) {
             this.contentCache.levels[levelId] = { challenges: {} };
         }
         if (!this.contentCache.levels[levelId].challenges) {
             this.contentCache.levels[levelId].challenges = {};
         }

        // Use the cache entry if it exists, otherwise create a placeholder
         let challengeData = this.contentCache.levels[levelId].challenges[challengeId];
         if (!challengeData) {
             challengeData = {
                config: null,
                theory: `# Challenge ${challengeId}\n\nContent is being prepared...`,
                examples: "Examples are being prepared..."
                // practice: "Practice is being prepared..." // Optional
             };
             // Immediately put placeholder in cache to prevent race conditions
             this.contentCache.levels[levelId].challenges[challengeId] = challengeData;
         }


        try {
            console.log(`Loading challenge content for ${levelId}/${challengeId} (using simple name ${simpleChallengeName} for MD)...`);

            // Try to load the challenge configuration (uses full challengeId)
            // Only load if not already loaded or if it's null
            if (!challengeData.config) {
                try {
                    const configPath = `/content/levels/${levelId}/challenges/${challengeId}.json`;
                    console.log(`Attempting to load challenge config from: ${configPath}`);
                    challengeData.config = await this.fetchJSON(configPath);
                    console.log(`Successfully loaded config for ${challengeId}`);
                } catch (configError) {
                    console.warn(`Could not load config for ${challengeId}:`, configError);
                    // Create a minimal config if loading failed
                    challengeData.config = {
                        id: `${levelId}-${challengeId}`, // Use the full ID here
                        name: `Challenge ${challengeId.replace(/_/g, ' ')}`,
                        description: "This challenge config failed to load."
                    };
                }
            }

            // Try to load the theory content (uses simpleChallengeName)
             // Only load if it's still the placeholder
             const placeholderTheoryBase = `# Challenge ${challengeId}\n\nContent is being prepared...`;
             if (challengeData.theory.trim() === placeholderTheoryBase.trim()) {
                try {
                    const theoryPath = `/content/levels/${levelId}/challenges/${simpleChallengeName}_theory.md`; // Use simple name
                    console.log(`Attempting to load challenge theory from: ${theoryPath}`);
                    challengeData.theory = await this.fetchMarkdown(theoryPath);
                    console.log(`Successfully loaded theory for ${simpleChallengeName}`);
                } catch (theoryError) {
                    console.warn(`Could not load theory for ${simpleChallengeName}:`, theoryError);
                    // Keep placeholder if fetch fails
                }
             }

            // Try to load examples content (uses simpleChallengeName)
            // Only load if it's still the placeholder
             const placeholderExamples = "Examples are being prepared...";
             if (challengeData.examples.trim() === placeholderExamples.trim()) {
                try {
                    const examplesPath = `/content/levels/${levelId}/challenges/${simpleChallengeName}_examples.md`; // Use simple name
                    console.log(`Attempting to load challenge examples from: ${examplesPath}`);
                    challengeData.examples = await this.fetchMarkdown(examplesPath);
                    console.log(`Successfully loaded examples for ${simpleChallengeName}`);
                } catch (examplesError) {
                    console.warn(`Could not load examples for ${simpleChallengeName} (Might be missing):`, examplesError);
                    // Keep placeholder if fetch fails (especially expected if file is missing)
                }
             }

             // Optionally load practice content (uses simpleChallengeName)
             const placeholderPractice = "Practice is being prepared..."; // Assuming a placeholder
             if (!challengeData.practice || challengeData.practice.trim() === placeholderPractice.trim()) { // Check if not loaded or placeholder
                 try {
                    const practicePath = `/content/levels/${levelId}/challenges/${simpleChallengeName}_practice.md`; // Use simple name
                    console.log(`Attempting to load challenge practice from: ${practicePath}`);
                    challengeData.practice = await this.fetchMarkdown(practicePath); // Add practice key
                    console.log(`Successfully loaded practice for ${simpleChallengeName}`);
                 } catch (practiceError) {
                    console.warn(`Could not load practice for ${simpleChallengeName}:`, practiceError);
                    // Assign placeholder if fetch fails and no content exists
                     if (!challengeData.practice) {
                         challengeData.practice = "# Practice\n\nPractice content could not be loaded.";
                     }
                 }
             }


            // Cache already updated since we modified the object reference directly
            return challengeData;

        } catch (error) {
            console.error(`Failed severely during loading challenge ${levelId}/${challengeId}:`, error);
             // Ensure placeholder is still in cache if something went very wrong
             if (!this.contentCache.levels[levelId].challenges[challengeId]) {
                 this.contentCache.levels[levelId].challenges[challengeId] = {
                     config: { id: `${levelId}-${challengeId}`, name: `Challenge ${challengeId}`, description: "Critical load error." },
                     theory: `# Challenge ${challengeId}\n\nCritical load error.`,
                     examples: "Critical load error.",
                     practice: "Critical load error."
                 };
             }
            throw error; // Re-throw so the outer catch in loadLevelInfo can potentially log it
        }
    }


    // ... (keep loadTutorial, loadExample, getLevel, getChallenge - note getChallenge might need update if using placeholders) ...
    async getChallenge(levelId, challengeId) { // challengeId is like 'challenge1_door'
        const levelCache = this.contentCache.levels[levelId];
        if (levelCache?.challenges?.[challengeId]) {
            // Optionally: If content is placeholder, trigger a background reload?
            // For now, just return what's in cache. EducationalContentManager handles fetching on demand.
            return levelCache.challenges[challengeId];
        }

        // If not in cache, try loading the level info first (which loads challenges)
        console.log(`Challenge ${levelId}/${challengeId} not in cache. Ensuring level info is loaded.`);
        await this.getLevel(levelId); // This calls loadLevelInfo -> loadChallenge

        // Check cache again after loading
        if (this.contentCache.levels[levelId]?.challenges?.[challengeId]) {
            return this.contentCache.levels[levelId].challenges[challengeId];
        } else {
            // If still not found after loading, something is wrong or it failed. Return a placeholder.
             console.warn(`Challenge ${levelId}/${challengeId} still not found after load attempt. Returning placeholder.`);
             return {
                 config: { id: `${levelId}-${challengeId}`, name: `Challenge ${challengeId}`, description: "Load error." },
                 theory: `# Challenge ${challengeId}\n\nLoad error.`,
                 examples: "Load error.",
                 practice: "Load error."
             };
        }
    }


    // ... (keep fetchJSON and fetchMarkdown, but ensure fetchMarkdown logs HEAD check on error) ...
    async fetchJSON(path) {
        try {
            const relativePath = path.startsWith('/') ? '.' + path : path;
            console.log(`Fetching JSON from: ${relativePath}`);
            const isFileProtocol = window.location.protocol === 'file:';

            if (isFileProtocol) {
                // Use XMLHttpRequest for file protocol
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest();
                    xhr.overrideMimeType('application/json');
                    xhr.open('GET', relativePath, true);
                    xhr.onreadystatechange = function() {
                        if (xhr.readyState === 4) {
                            if (xhr.status === 200 || xhr.status === 0) {
                                try {
                                    const jsonData = JSON.parse(xhr.responseText);
                                    resolve(jsonData);
                                } catch (parseError) {
                                    console.error(`Error parsing JSON from ${relativePath}:`, parseError);
                                    reject(new Error(`JSON Parse Error in ${relativePath}: ${parseError.message}`));
                                }
                            } else {
                                const error = new Error(`XHR Error: Failed to load ${relativePath} - Status ${xhr.status}`);
                                console.error(error);
                                reject(error);
                            }
                        }
                    };
                    xhr.onerror = function(error) {
                        console.error(`XHR Network error for ${relativePath}:`, error);
                        reject(new Error(`XHR Network error loading ${relativePath}`));
                    };
                    xhr.send(null);
                });
            } else {
                // Use fetch API for http/https
                const response = await fetch(relativePath);
                if (!response.ok) {
                    throw new Error(`Fetch Error: Failed to fetch ${relativePath} - ${response.status} ${response.statusText}`);
                }
                return response.json();
            }
        } catch (error) {
            console.error(`Error fetching JSON from ${path}:`, error);
            // Handle specific cases like level_index or re-throw
             if (path.includes('level_index.json')) {
                 console.warn('fetchJSON failed for level_index.json, returning default.');
                 return { /* return default index */ };
             }
            throw error; // Re-throw other errors
        }
    }

    async fetchMarkdown(path) {
        try {
            const relativePath = path.startsWith('/') ? '.' + path : path;
            console.log(`Fetching markdown from: ${relativePath}`);
            const isFileProtocol = window.location.protocol === 'file:';
            const fullUrl = new URL(relativePath, window.location.href).href;
            console.log(`Full URL being accessed: ${fullUrl}`);


            if (isFileProtocol) {
                 // Use XMLHttpRequest for file protocol
                 return new Promise((resolve, reject) => {
                     const xhr = new XMLHttpRequest();
                     xhr.overrideMimeType('text/markdown'); // Set correct MIME type
                     xhr.open('GET', relativePath, true);
                     xhr.onreadystatechange = function() {
                         if (xhr.readyState === 4) {
                             if (xhr.status === 200 || xhr.status === 0) { // 0 for local files
                                 resolve(xhr.responseText);
                             } else {
                                 const error = new Error(`XHR Error: Failed to load ${relativePath} - Status ${xhr.status}`);
                                 console.error(error);
                                 reject(error);
                             }
                         }
                     };
                     xhr.onerror = function(error) {
                         console.error(`XHR Network error for ${relativePath}:`, error);
                         reject(new Error(`XHR Network error loading ${relativePath}`));
                     };
                     xhr.send(null);
                 });
            } else {
                // Use fetch API for http/https
                const response = await fetch(relativePath);
                if (!response.ok) {
                    throw new Error(`Fetch Error: Failed to fetch ${relativePath} - ${response.status} ${response.statusText}`);
                }
                return response.text();
            }
        } catch (error) {
            console.error(`Error fetching markdown from ${path}:`, error);

            // Attempt HEAD request for diagnostics (only for non-file protocols)
            if (window.location.protocol !== 'file:') {
                try {
                    const relativePath = path.startsWith('/') ? '.' + path : path;
                    const headResponse = await fetch(relativePath, { method: 'HEAD' });
                    console.log(`HEAD request for ${relativePath} returned status: ${headResponse.status}`);
                    if (!headResponse.ok) {
                        console.error(`Diagnostics: File likely does not exist or is inaccessible at ${relativePath} (HEAD status: ${headResponse.status})`);
                    }
                 } catch (headError) {
                    console.error(`Diagnostics: Error checking file existence with HEAD for ${path}: ${headError}`);
                 }
            } else {
                 console.warn(`Diagnostics: Cannot perform HEAD check on file:// protocol for ${path}`);
            }

            throw error; // Re-throw the original error after diagnostics
        }
    }

} // End of ContentLoader class

// Instantiate and assign to window
const instance = new ContentLoader();
window.contentLoader = instance;
console.log("ContentLoader instance created and assigned to window.contentLoader");

// --- END OF MODIFIED content_loader.js ---