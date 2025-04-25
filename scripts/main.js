/**
 * Design System JavaScript
 * Contains functionality for theme switching, code viewing, and mobile navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme from localStorage or system preference
    initThemeToggle();
    
    // Initialize code toggles
    initCodeViewer();
    
    // Initialize mobile navigation
    initMobileNavigation();
});

function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-stylesheet');
    
    if (themeToggle && themeStylesheet) {
        // Function to check if current theme is dark
        const isDarkTheme = () => {
            const href = themeStylesheet.getAttribute('href') || '';
            return href.includes('dark-theme.css');
        };
        
        // Set initial icon state
        updateThemeIcons(isDarkTheme());
        
        themeToggle.addEventListener('click', () => {
            const currentPath = themeStylesheet.getAttribute('href') || '';
            const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
            const newTheme = isDarkTheme() ? 'light' : 'dark';
            
            themeStylesheet.setAttribute('href', `${basePath}${newTheme}-theme.css`);
            updateThemeIcons(!isDarkTheme());
            localStorage.setItem('theme', newTheme);
            
            // Dispatch theme change event for other components
            window.dispatchEvent(new CustomEvent('themechange', { 
                detail: { theme: newTheme } 
            }));
        });
        
        // Apply saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme) {
            const currentPath = themeStylesheet.getAttribute('href') || '';
            const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
            themeStylesheet.setAttribute('href', `${basePath}${savedTheme}-theme.css`);
            updateThemeIcons(savedTheme === 'dark');
        } else if (prefersDark) {
            const currentPath = themeStylesheet.getAttribute('href') || '';
            const basePath = currentPath.substring(0, currentPath.lastIndexOf('/') + 1);
            themeStylesheet.setAttribute('href', `${basePath}dark-theme.css`);
            updateThemeIcons(true);
            localStorage.setItem('theme', 'dark');
        }
    }
}

function updateThemeIcons(isDark) {
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    
    if (sunIcon instanceof HTMLElement && moonIcon instanceof HTMLElement) {
        sunIcon.style.display = isDark ? 'block' : 'none';
        moonIcon.style.display = isDark ? 'none' : 'block';
    }
}

/**
 * Initialize code viewer functionality
 */
function initCodeViewer() {
    // Add click handlers to all code toggle buttons
    const codeToggles = document.querySelectorAll('.code-toggle');
    
    codeToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const codeBlockId = this.getAttribute('data-target');
            const codeBlock = document.getElementById(codeBlockId);
            
            if (codeBlock) {
                if (codeBlock.style.display === 'none' || !codeBlock.style.display) {
                    codeBlock.style.display = 'block';
                    this.textContent = 'Hide Code';
                } else {
                    codeBlock.style.display = 'none';
                    this.textContent = 'View Code';
                }
            }
        });
    });
    
    // Add copy functionality to code blocks
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText(block.textContent.trim())
                .then(() => {
                    copyButton.textContent = 'Copied!';
                    setTimeout(() => {
                        copyButton.textContent = 'Copy';
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
        
        // Create a wrapper for the code block
        const wrapper = document.createElement('div');
        wrapper.className = 'code-block-wrapper';
        
        // Insert the wrapper before the code block
        block.parentNode.insertBefore(wrapper, block);
        
        // Move the code block into the wrapper
        wrapper.appendChild(block);
        
        // Add the copy button to the wrapper
        wrapper.appendChild(copyButton);
    });
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
