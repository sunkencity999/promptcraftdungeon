/**
 * PromptCraft Dungeon - Visual Effects
 * This module provides subtle visual enhancements to improve the game experience
 */

// Create a self-contained module to avoid global namespace pollution
const visualEffects = (function() {
  // Private variables
  const defaults = {
    textAnimationSpeed: 25,
    particleCount: 10,
    particleDuration: 800
  };
  
  /**
   * Animate text with a subtle typewriter effect
   * @param {HTMLElement} element - Element to animate text within
   * @param {string} text - Text to animate
   * @param {Object} options - Animation options
   */
  function animateText(element, text, options = {}) {
    const settings = {
      speed: options.speed || defaults.textAnimationSpeed,
      delay: options.delay || 0,
      onComplete: options.onComplete || null
    };
    
    // Clear existing content
    element.textContent = '';
    
    // Split text into characters
    const characters = text.split('');
    let index = 0;
    
    // Wait for the specified delay before starting
    setTimeout(() => {
      // Start the animation interval
      const interval = setInterval(() => {
        // Add the next character
        element.textContent += characters[index];
        index++;
        
        // Check if we've reached the end
        if (index >= characters.length) {
          clearInterval(interval);
          if (typeof settings.onComplete === 'function') {
            settings.onComplete();
          }
        }
      }, settings.speed);
    }, settings.delay);
  }
  
  /**
   * Create a particle effect
   * @param {HTMLElement} element - Element to create particles around
   * @param {Object} options - Particle options
   */
  function createParticleEffect(element, options = {}) {
    const settings = {
      particleCount: options.particleCount || defaults.particleCount,
      colors: options.colors || ['#00FF00', '#FFFFFF'],
      duration: options.duration || defaults.particleDuration,
      spread: options.spread || 30,
      gravity: options.gravity || 0.1
    };
    
    // Get element position
    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Create particles
    for (let i = 0; i < settings.particleCount; i++) {
      createParticle(x, y, settings);
    }
  }
  
  /**
   * Create a single particle
   * @param {number} x - Starting X position
   * @param {number} y - Starting Y position
   * @param {Object} settings - Particle settings
   */
  function createParticle(x, y, settings) {
    // Create particle element
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.width = '4px';
    particle.style.height = '4px';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';
    
    // Random color from options
    const colorIndex = Math.floor(Math.random() * settings.colors.length);
    particle.style.backgroundColor = settings.colors[colorIndex];
    
    // Set initial position
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Add to document
    document.body.appendChild(particle);
    
    // Random direction
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 2 + 1;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;
    
    // Animation variables
    let posX = x;
    let posY = y;
    let opacity = 1;
    const startTime = Date.now();
    
    // Animate particle
    function updateParticle() {
      const elapsed = Date.now() - startTime;
      
      if (elapsed < settings.duration) {
        // Update position
        posX += vx;
        posY += vy + settings.gravity * elapsed / 50;
        opacity = 1 - (elapsed / settings.duration);
        
        // Apply new styles
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.opacity = opacity;
        
        // Continue animation
        requestAnimationFrame(updateParticle);
      } else {
        // Remove particle when animation is complete
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }
    }
    
    // Start animation
    requestAnimationFrame(updateParticle);
  }
  
  /**
   * Add subtle hover effects to buttons
   * @param {NodeList|Array} buttons - Collection of button elements
   */
  function enhanceButtons(buttons) {
    buttons.forEach(button => {
      // Add enhanced class for styling
      button.classList.add('enhanced-button');
      
      // Add hover effect
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
        button.style.boxShadow = '0 0 8px rgba(0, 255, 0, 0.5)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = '';
        button.style.boxShadow = '';
      });
      
      // Add click effect
      button.addEventListener('click', (e) => {
        // Create particle effect on click
        createParticleEffect(button, {
          particleCount: 15,
          colors: ['#00FF00', '#FFFFFF', '#00FFFF', '#FFFF00'],
          duration: 800,
          spread: 50
        });
      });
    });
  }
  
  /**
   * Create a transition effect between elements
   * @param {HTMLElement} fromElement - Element to transition from
   * @param {HTMLElement} toElement - Element to transition to
   * @param {string} type - Transition type ('fade', 'slide', 'portal')
   * @param {Object} options - Transition options
   */
  function transitionElements(fromElement, toElement, type = 'fade', options = {}) {
    const settings = {
      duration: options.duration || 500,
      onComplete: options.onComplete || null
    };
    
    // Apply different transition types
    switch (type) {
      case 'fade':
        // Simple fade transition
        fromElement.style.transition = `opacity ${settings.duration}ms ease`;
        fromElement.style.opacity = '0';
        
        setTimeout(() => {
          if (typeof settings.onComplete === 'function') {
            settings.onComplete();
          }
        }, settings.duration);
        break;
        
      case 'portal':
        // Portal-like transition effect
        const portalEffect = document.createElement('div');
        portalEffect.style.position = 'fixed';
        portalEffect.style.top = '0';
        portalEffect.style.left = '0';
        portalEffect.style.width = '100%';
        portalEffect.style.height = '100%';
        portalEffect.style.backgroundColor = 'rgba(0, 255, 0, 0.1)';
        portalEffect.style.pointerEvents = 'none';
        portalEffect.style.zIndex = '999';
        
        // Add to document
        document.body.appendChild(portalEffect);
        
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'fixed';
        ripple.style.top = '50%';
        ripple.style.left = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.width = '10px';
        ripple.style.height = '10px';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(0, 255, 0, 0.8)';
        ripple.style.boxShadow = '0 0 20px rgba(0, 255, 0, 0.8)';
        ripple.style.transition = `all ${settings.duration}ms ease-out`;
        
        portalEffect.appendChild(ripple);
        
        // Animate ripple
        setTimeout(() => {
          ripple.style.width = '200vw';
          ripple.style.height = '200vw';
          ripple.style.backgroundColor = 'rgba(0, 255, 0, 0)';
        }, 10);
        
        // Remove effect after animation
        setTimeout(() => {
          if (portalEffect.parentNode) {
            portalEffect.parentNode.removeChild(portalEffect);
          }
          
          if (typeof settings.onComplete === 'function') {
            settings.onComplete();
          }
        }, settings.duration);
        break;
        
      default:
        // Default behavior
        if (typeof settings.onComplete === 'function') {
          settings.onComplete();
        }
    }
  }
  
  /**
   * Create ambient background effects
   * @param {string} canvasId - ID of the canvas element to use
   */
  function createAmbientBackground(canvasId = 'background-canvas') {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    
    // Ensure canvas is properly positioned and doesn't affect layout
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // Resize canvas to fill window
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    
    // Initialize particles
    function initParticles() {
      particles.length = 0;
      
      // Create particles - significantly increased count for much higher density
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // Slightly larger particles
          speedX: Math.random() * 0.2 - 0.1, // Slightly faster movement
          speedY: Math.random() * 0.2 - 0.1,
          opacity: Math.random() * 0.4 + 0.1 // More visible
        });
      }
    }
    
    // Draw particles
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw each particle
      particles.forEach(p => {
        // Move particle
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 0, ${p.opacity})`;
        ctx.fill();
      });
      
      // Continue animation
      requestAnimationFrame(drawParticles);
    }
    
    // Initialize
    resizeCanvas();
    initParticles();
    drawParticles();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
  }
  
  // Public API
  return {
    animateText,
    createParticleEffect,
    enhanceButtons,
    transitionElements,
    createAmbientBackground
  };
})();

// Expose to global scope
window.visualEffects = visualEffects;

// Log when loaded
console.log('Visual effects module loaded');
