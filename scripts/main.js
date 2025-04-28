/**
 * Design System JavaScript
 * Contains functionality for theme switching, code viewing, and mobile navigation
 */

document.addEventListener('DOMContentLoaded', function() {

    // Initialize code toggles
    initCodeViewer();
    
});



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
