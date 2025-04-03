/**
 * PromptCraft Dungeon - Enhancements
 * This file integrates visual effects with the main game
 */

(function() {
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing PromptCraft Dungeon enhancements...');
    
    // Wait a short time to ensure all other scripts have loaded
    setTimeout(function() {
      initializeEnhancements();
    }, 300);
  });
  
  function initializeEnhancements() {
    // Check if visual effects module is available
    const hasVisualEffects = typeof window.visualEffects !== 'undefined';
    
    if (hasVisualEffects) {
      console.log('Applying visual enhancements...');
      enhanceVisuals();
    } else {
      console.warn('Visual effects module not found. Enhancements not applied.');
    }
  }
  
  function enhanceVisuals() {
    // Enhance buttons with subtle effects
    const buttons = document.querySelectorAll('.small-button, #start-button');
    window.visualEffects.enhanceButtons(buttons);
    
    // Add ambient background effects
    window.visualEffects.createAmbientBackground('background-canvas');
    
    // Enhance the start game experience
    enhanceStartGame();
    
    // Enhance text output
    enhanceTextDisplay();
    
    // Enhance level transitions
    enhanceLevelTransitions();
  }
  
  function enhanceStartGame() {
    // Get the start button
    const startButton = document.getElementById('start-button');
    if (!startButton) return;
    
    // Store the original function
    const originalStartGame = window.startGame;
    
    // Only override if the original function exists
    if (typeof originalStartGame === 'function') {
      // Create a new version with visual enhancements
      window.startGame = function() {
        console.log('Enhanced startGame called');
        
        // Get elements
        const landingPage = document.getElementById('landing-page');
        const gameWrapper = document.getElementById('game-wrapper');
        
        // Apply transition effect
        window.visualEffects.transitionElements(
          landingPage, 
          gameWrapper, 
          'portal',
          {
            duration: 800,
            onComplete: function() {
              // Show game interface
              landingPage.style.display = 'none';
              gameWrapper.style.display = 'flex';
              
              // Call original function to initialize game
              originalStartGame();
            }
          }
        );
      };
    }
  }
  
  function enhanceTextDisplay() {
    // Override the displayOutput function to use text animation
    if (typeof window.displayOutput === 'function') {
      const originalDisplayOutput = window.displayOutput;
      
      window.displayOutput = function(text, type = 'description', options = {}) {
        const gameOutput = document.getElementById('game-output');
        if (!gameOutput) return;
        
        // Create a new paragraph element
        const p = document.createElement('p');
        p.className = type;
        
        // Add empty paragraph first
        gameOutput.appendChild(p);
        
        // Use the text animation effect
        window.visualEffects.animateText(p, text, {
          speed: options.speed || 25,
          delay: options.delay || 0,
          onComplete: options.onComplete
        });
        
        // Scroll to the bottom
        gameOutput.scrollTop = gameOutput.scrollHeight;
        
        return p; // Return the paragraph element for potential further manipulation
      };
    }
  }
  
  function enhanceLevelTransitions() {
    // Only override if loadLevel exists
    if (typeof window.loadLevel === 'function') {
      const originalLoadLevel = window.loadLevel;
      
      window.loadLevel = function(levelIndex) {
        console.log('Enhanced loadLevel called for index:', levelIndex);
        
        // Call original function first
        originalLoadLevel(levelIndex);
        
        // Enhance level image display
        enhanceLevelImage(levelIndex);
      };
    }
  }
  
  function enhanceLevelImage(levelIndex) {
    // Get level image elements
    const levelImage = document.getElementById('level-image');
    const levelImageContainer = document.getElementById('level-image-container');
    
    if (levelImage && levelImageContainer) {
      // Check if we have a valid level
      if (levelIndex > 0 && levelIndex <= 13) {
        // Set image source
        levelImage.src = `images/level${levelIndex}.png`;
        levelImage.alt = `Level ${levelIndex}`;
        
        // Make sure container is visible
        levelImageContainer.style.display = 'block';
        
        // Add subtle animation when image loads
        levelImage.onload = function() {
          // Add a subtle particle effect
          window.visualEffects.createParticleEffect(levelImage, {
            particleCount: 8,
            colors: ['#00FF00', '#00FFFF'],
            duration: 800
          });
        };
      } else {
        // Hide container for invalid levels
        levelImageContainer.style.display = 'none';
      }
    }
  }
})();

console.log('PromptCraft Dungeon enhancements loaded');
