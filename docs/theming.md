# Theming the Design System

This guide explains how to customize the design system's appearance through theming.

## Overview

The design system uses CSS custom properties (variables) for theming, making it easy to customize colors, typography, spacing, and other visual aspects. The theming system is designed to be:

- **Flexible**: Easily change the look and feel without modifying component code
- **Consistent**: Ensure visual consistency across all components
- **Maintainable**: Centralize design decisions in a few files
- **Extensible**: Create multiple themes or variations

## Theme Structure

The theming system is organized into several files:

1. **variables.css**: Core design tokens (spacing, typography, shadows, etc.)
2. **light-theme.css**: Light theme color variables
3. **dark-theme.css**: Dark theme color variables

## Core Design Tokens

The `variables.css` file contains the foundational design tokens:

```css
:root {
  /* Colors */
  --color-primary: #570DF8;
  --color-primary-content: #4406c5;
  --color-secondary: #F000B8;
  --color-accent: #37CDBE;
  --color-neutral: #3D4451;
  
  /* Typography */
  --font-family-base: 'SourceCodePro', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --line-height-base: 1.5;
  --line-height-heading: 1.2;

  /* Spacing */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-12: 3rem;

  /* Borders */
  --border-radius-sm: 0.125rem;
  --border-radius: 0.375rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 0.75rem;
  --border-radius-xl: 1rem;

  /* Shadows */
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}
```

## Theme-Specific Variables

The light and dark theme files define color variables specific to each theme:

### Light Theme (light-theme.css)

```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #0066cc;
  --secondary-color: #6c757d;
  --border-color: #e2e8f0;
  --card-bg: #ffffff;
  --header-bg: #ffffff;
  --sidebar-bg: #f8fafc;
  --bg-code: #f1f5f9;
  --text-code: #334155;
}
```

### Dark Theme (dark-theme.css)

```css
:root {
  --bg-color: #1a1a1a;
  --text-color: #e2e8f0;
  --primary-color: #3b82f6;
  --secondary-color: #94a3b8;
  --border-color: #2d2d2d;
  --card-bg: #242424;
  --header-bg: #1a1a1a;
  --sidebar-bg: #242424;
  --bg-code: #2d3748;
  --text-code: #e2e8f0;
}
```

## Customizing the Theme

### Basic Customization

To customize the theme, modify the CSS variables in the theme files:

1. Open the appropriate theme file (`light-theme.css` or `dark-theme.css`)
2. Change the variable values to match your desired colors
3. Save the file

Example of customizing the light theme:

```css
:root {
  --bg-color: #f8f9fa;          /* Lighter background */
  --text-color: #212529;         /* Darker text */
  --primary-color: #007bff;      /* Blue primary color */
  --secondary-color: #6c757d;    /* Gray secondary color */
  --border-color: #dee2e6;       /* Light gray border */
  --card-bg: #ffffff;            /* White card background */
  --header-bg: #f8f9fa;          /* Light header background */
  --sidebar-bg: #e9ecef;         /* Light gray sidebar */
}
```

### Creating a Custom Theme

To create a completely new theme:

1. Create a new CSS file (e.g., `custom-theme.css`)
2. Define your theme variables
3. Include the file instead of the default theme

Example of a custom theme:

```css
/* custom-theme.css */
:root {
  --bg-color: #f0f4f8;
  --text-color: #102a43;
  --primary-color: #1070ca;
  --secondary-color: #7b8794;
  --border-color: #d9e2ec;
  --card-bg: #ffffff;
  --header-bg: #f0f4f8;
  --sidebar-bg: #e1e8f0;
  --bg-code: #f5f7fa;
  --text-code: #243b53;
}
```

Then update your HTML to use the custom theme:

```html
<!-- Replace the default theme with your custom theme -->
<link id="theme-stylesheet" rel="stylesheet" href="styles/custom-theme.css">
```

### Dynamic Theme Switching

The design system includes JavaScript for switching between light and dark themes:

```javascript
const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

themeToggle.addEventListener('click', () => {
  if (themeStylesheet.getAttribute('href') === 'styles/light-theme.css') {
    themeStylesheet.setAttribute('href', 'styles/dark-theme.css');
    localStorage.setItem('theme', 'dark');
  } else {
    themeStylesheet.setAttribute('href', 'styles/light-theme.css');
    localStorage.setItem('theme', 'light');
  }
});

// Apply saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  themeStylesheet.setAttribute('href', `styles/${savedTheme}-theme.css`);
}
```

To add more themes to the switcher, modify the JavaScript to cycle through all available themes.

## Component-Specific Theming

Some components may have specific theming needs. You can add component-specific variables to your theme files:

```css
:root {
  /* Global theme variables */
  --bg-color: #ffffff;
  --text-color: #333333;
  
  /* Component-specific variables */
  --button-primary-bg: var(--primary-color);
  --button-primary-text: white;
  --button-secondary-bg: var(--secondary-color);
  --button-secondary-text: white;
  --button-border-radius: var(--border-radius);
}
```

Then use these variables in your component CSS:

```css
.btn-primary {
  background-color: var(--button-primary-bg);
  color: var(--button-primary-text);
  border-radius: var(--button-border-radius);
}

.btn-secondary {
  background-color: var(--button-secondary-bg);
  color: var(--button-secondary-text);
  border-radius: var(--button-border-radius);
}
```

## Best Practices

### Naming Conventions

- Use descriptive names that indicate the purpose of the variable
- Use kebab-case for variable names
- Group related variables together
- Use a consistent prefix for component-specific variables

### Organization

- Keep global theme variables in the theme files
- Add component-specific variables to the component CSS files
- Document the purpose and usage of each variable

### Accessibility

- Ensure sufficient color contrast between text and background
- Test your theme with screen readers and other assistive technologies
- Provide alternative visual indicators beyond color

### Performance

- Limit the number of CSS variables to maintain good performance
- Consider using CSS preprocessors for complex theming needs
- Test performance on lower-end devices

## Examples

### Brand-Specific Theme

```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #ff6b00;      /* Brand orange */
  --secondary-color: #0055a4;    /* Brand blue */
  --accent-color: #009639;       /* Brand green */
  --border-color: #e2e8f0;
  --card-bg: #ffffff;
  --header-bg: #f8fafc;
  --sidebar-bg: #f0f4f8;
}
```

### High Contrast Theme

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --primary-color: #0000cc;
  --secondary-color: #cc0000;
  --border-color: #000000;
  --card-bg: #ffffff;
  --header-bg: #f0f0f0;
  --sidebar-bg: #e0e0e0;
}
```

## Troubleshooting

### Theme Not Applying

- Check that the theme CSS file is properly linked in the HTML
- Verify that the CSS variables are correctly defined
- Check for any CSS specificity issues that might be overriding your theme
- Inspect the elements using browser developer tools

### Inconsistent Appearance

- Ensure all components are using the theme variables
- Check for hardcoded color values in component CSS
- Verify that the correct theme file is being loaded

### Browser Compatibility

- Add fallback values for browsers that don't support CSS variables
- Test in multiple browsers to ensure consistent appearance
