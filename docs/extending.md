# Extending the Design System

This guide explains how to extend the design system by adding new components or modifying existing ones.

## Adding a New Component

Follow these steps to add a new component to the design system:

### 1. Create the Component Directory

Create a new directory in the `components` folder with the name of your component:

```
components/
└── your-component/
```

### 2. Create the Component Files

Each component should have the following files:

```
components/
└── your-component/
    ├── your-component.css    # Component styles
    ├── your-component.html   # Component markup examples
    └── your-component.md     # Component documentation
```

### 3. Write the Component CSS

Create the CSS file with your component's styles. Follow these guidelines:

- Use CSS variables for theming (colors, spacing, etc.)
- Make the component responsive
- Follow the naming convention (component name as prefix)
- Add comments to explain complex parts

Example (`your-component.css`):

```css
/* Your Component Styles */
.your-component {
  display: flex;
  padding: var(--spacing-4);
  background-color: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}

.your-component-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2);
  color: var(--text-color);
}

.your-component-content {
  color: var(--text-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .your-component {
    flex-direction: column;
  }
}
```

### 4. Create the Component HTML

Create an HTML file with examples of your component:

Example (`your-component.html`):

```html
<!-- Basic Example -->
<div class="your-component">
  <h3 class="your-component-title">Component Title</h3>
  <div class="your-component-content">
    <p>This is the component content.</p>
  </div>
</div>

<!-- Variant Example -->
<div class="your-component your-component-variant">
  <h3 class="your-component-title">Variant Title</h3>
  <div class="your-component-content">
    <p>This is a variant of the component.</p>
  </div>
</div>
```

### 5. Write the Component Documentation

Create a Markdown file with documentation for your component:

Example (`your-component.md`):

```markdown
# Your Component

A brief description of what the component is and when to use it.

## Features

- Feature 1
- Feature 2
- Feature 3

## Usage

```html
<div class="your-component">
  <h3 class="your-component-title">Component Title</h3>
  <div class="your-component-content">
    <p>This is the component content.</p>
  </div>
</div>
```

## Variants

### Basic Variant

Description of the basic variant.

### Special Variant

Description of a special variant.

```html
<div class="your-component your-component-variant">
  <h3 class="your-component-title">Variant Title</h3>
  <div class="your-component-content">
    <p>This is a variant of the component.</p>
  </div>
</div>
```

## Accessibility

Accessibility considerations for this component.

## Best Practices

- Best practice 1
- Best practice 2
- Best practice 3
```

### 6. Update the Main Documentation

Add your component to the main documentation page (`index.html`):

1. Add the component CSS link to the head:

```html
<link rel="stylesheet" href="components/your-component/your-component.css">
```

2. Add the component to the sidebar navigation:

```html
<li><a href="#your-component">Your Component</a></li>
```

3. Add a section for your component in the main content:

```html
<section id="your-component">
  <h2>Your Component</h2>
  <p>Description of your component...</p>
  
  <div class="component-example">
    <h3>Examples</h3>
    <!-- Include your component examples here -->
    <div class="your-component">
      <h3 class="your-component-title">Component Title</h3>
      <div class="your-component-content">
        <p>This is the component content.</p>
      </div>
    </div>
  </div>
  
  <div class="component-docs">
    <h3>Usage</h3>
    <p>Usage instructions...</p>
    
    <button class="code-toggle" data-target="your-component-code">View Code</button>
    <pre class="code-block" id="your-component-code" style="display: none;">
&lt;div class="your-component"&gt;
  &lt;h3 class="your-component-title"&gt;Component Title&lt;/h3&gt;
  &lt;div class="your-component-content"&gt;
    &lt;p&gt;This is the component content.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
    </pre>
  </div>
</section>
```

## Modifying Existing Components

To modify an existing component:

1. Locate the component files in the `components` directory
2. Make your changes to the CSS, HTML, or documentation files
3. Update the main documentation if necessary

### Guidelines for Modifications

- Maintain backward compatibility when possible
- Document any breaking changes
- Follow the existing naming conventions and coding style
- Update the documentation to reflect your changes

## Adding JavaScript Functionality

If your component requires JavaScript functionality:

1. Add your JavaScript code to the component directory:

```
components/
└── your-component/
    ├── your-component.css
    ├── your-component.html
    ├── your-component.js    # Component JavaScript
    └── your-component.md
```

2. Include the JavaScript file in the main HTML:

```html
<script src="components/your-component/your-component.js"></script>
```

3. Or add your functionality to the main JavaScript file (`scripts/main.js`):

```javascript
/**
 * Your Component Functionality
 */
function initYourComponent() {
  // Your component initialization code
  const components = document.querySelectorAll('.your-component');
  
  components.forEach(component => {
    // Add event listeners or other functionality
    component.addEventListener('click', () => {
      // Do something
    });
  });
}

// Add your initialization function to the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
  // Existing initializations...
  
  // Your component initialization
  initYourComponent();
});
```

## Testing Your Component

Before finalizing your component:

1. Test it in different browsers
2. Test it at different screen sizes
3. Verify that it works with both light and dark themes
4. Check for accessibility issues
5. Validate the HTML and CSS

## Contributing Your Component

If you want to contribute your component to the main design system:

1. Fork the repository
2. Add your component following the guidelines above
3. Submit a pull request with a description of your component
