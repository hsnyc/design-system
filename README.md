# Framework-Agnostic Design System

A comprehensive design system built with plain HTML, CSS, and JavaScript that can be used in any project regardless of the framework. This design system provides reusable components and design guidelines for building consistent user interfaces.

## Features

- **Framework Agnostic**: Works with any web project - React, Vue, Angular, or plain HTML
- **No Build Steps**: Simple copy-paste integration without complex build processes
- **Responsive Design**: All components are mobile-friendly and responsive
- **Themeable**: Light and dark mode support with customizable color schemes
- **Accessible**: Built with accessibility in mind
- **Documented**: Comprehensive documentation for all components and guidelines

## Components

The design system includes the following components:

- **Navigation**: Responsive navigation bar with mobile menu and dropdowns
- **Buttons**: Various button styles and states
- **Cards**: Flexible content containers
- **Inputs**: Form controls including text inputs, textareas, and more
- **Alerts**: Contextual feedback messages
- **Badges**: Status indicators and counters

## Design Guidelines

- **Colors**: Consistent color palette with primary, secondary, and accent colors
- **Typography**: Type scale and text styles
- **Spacing**: Consistent spacing system
- **Layout**: Grid system and containers

## Getting Started

### Installation

1. Download or clone this repository:
   ```
   git clone https://github.com/yourusername/design-system.git
   ```

2. Include the necessary CSS files in your HTML:
   ```html
   <!-- Core Styles -->
   <link rel="stylesheet" href="styles/variables.css">
   <link rel="stylesheet" href="styles/global.css">
   
   <!-- Component Styles (include only what you need) -->
   <link rel="stylesheet" href="components/button/button.css">
   <link rel="stylesheet" href="components/card/card.css">
   
   <!-- Theme -->
   <link id="theme-stylesheet" rel="stylesheet" href="styles/light-theme.css">
   ```

3. Include the JavaScript file for interactive components:
   ```html
   <script src="scripts/main.js"></script>
   ```

4. Copy the HTML markup for the components you need from the documentation.

### Usage

To use a component, simply copy its HTML markup from the documentation:

```html
<!-- Button Example -->
<button class="btn btn-primary">Primary Button</button>

<!-- Card Example -->
<div class="card">
  <div class="card-body">
    <h3 class="card-title">Card Title</h3>
    <p>Card content goes here.</p>
    <div class="card-actions">
      <button class="btn btn-primary">Action</button>
    </div>
  </div>
</div>
```

## Customization

### Theming

The design system uses CSS variables for theming. You can customize the colors, typography, and other design tokens by modifying the variables in the following files:

- `styles/variables.css`: Core design tokens
- `styles/light-theme.css`: Light theme colors
- `styles/dark-theme.css`: Dark theme colors

Example of customizing the primary color:

```css
:root {
  --color-primary: #0066cc; /* Change to your brand color */
}
```

### Adding New Components

To add a new component:

1. Create a new directory in the `components` folder
2. Add the component's CSS, HTML, and documentation files
3. Link to the component's CSS in your HTML

## Browser Support

The design system supports all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
