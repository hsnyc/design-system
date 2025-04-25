/**
 * Navigation Component
 * This script handles the navigation functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Theme Switching
    initThemeToggle();
    
    // Mobile Navigation
    initMobileNavigation();
  });
  
  /**
   * Initialize theme toggle functionality
   */
  function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    
    if (themeToggle && themeStylesheet) {
      // Set initial icon state based on current theme
      updateThemeIcons(themeStylesheet.getAttribute('href') === '../../../styles/dark-theme.css');
      
      themeToggle.addEventListener('click', () => {
        if (themeStylesheet.getAttribute('href') === '../../../styles/light-theme.css') {
          themeStylesheet.setAttribute('href', '../../../styles/dark-theme.css');
          updateThemeIcons(true);
          localStorage.setItem('theme', 'dark');
        } else {
          themeStylesheet.setAttribute('href', '../../../styles/light-theme.css');
          updateThemeIcons(false);
          localStorage.setItem('theme', 'light');
        }
      });
      
      // Apply saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        themeStylesheet.setAttribute('href', `../../../styles/${savedTheme}-theme.css`);
        updateThemeIcons(savedTheme === 'dark');
      }
    }
  }
  
  /**
   * Update theme toggle icons based on current theme
   * @param {boolean} isDark - Whether the current theme is dark
   */
  function updateThemeIcons(isDark) {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    if (sunIcon && moonIcon) {
      if (isDark) {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      }
    }
  }

  /**
 * Initialize mobile navigation functionality
 */
function initMobileNavigation() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
      });
      
      // Close mobile menu when clicking outside
      document.addEventListener('click', (event) => {
        if (mobileMenu.classList.contains('active') && 
            !mobileMenu.contains(event.target) && 
            !mobileMenuButton.contains(event.target)) {
          mobileMenu.classList.remove('active');
        }
      });
      
      // Close mobile menu when clicking a link
      const mobileMenuLinks = mobileMenu.querySelectorAll('a');
      mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('active');
        });
      });
    }
  }