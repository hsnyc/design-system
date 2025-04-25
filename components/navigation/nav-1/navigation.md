# Navigation Component

The Navigation component provides a responsive navigation bar for your application. It includes a mobile-friendly menu, dropdown support, and theme toggle functionality.

## Features

- Responsive design that adapts to different screen sizes
- Mobile menu for small screens
- Dropdown menus for organizing navigation items
- Theme toggle button for switching between light and dark modes
- Customizable through CSS variables

## Usage

```html
<!-- Include the navigation CSS -->
<link rel="stylesheet" href="components/navigation/navigation.css">

<!-- Include the navigation component -->
<div id="navigation-container"></div>

<!-- Load the navigation -->
<script>
  fetch('components/navigation/navigation.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('navigation-container').innerHTML = html;
      
      // Initialize theme toggle
      const themeToggle = document.getElementById('theme-toggle');
      const themeStylesheet = document.getElementById('theme-stylesheet');
      
      if (themeToggle && themeStylesheet) {
        themeToggle.addEventListener('click', () => {
          if (themeStylesheet.getAttribute('href') === 'styles/light-theme.css') {
            themeStylesheet.setAttribute('href', 'styles/dark-theme.css');
            document.querySelector('.sun-icon').style.display = 'block';
            document.querySelector('.moon-icon').style.display = 'none';
          } else {
            themeStylesheet.setAttribute('href', 'styles/light-theme.css');
            document.querySelector('.sun-icon').style.display = 'none';
            document.querySelector('.moon-icon').style.display = 'block';
          }
        });
      }
    });
</script>
```

## Customization

You can customize the navigation by modifying the CSS variables in your theme files:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --border-color: #e2e8f0;
  /* Other variables */
}
```

## Accessibility

The navigation component includes several accessibility features:

- Proper ARIA labels for interactive elements
- Keyboard navigation support
- Focus management for dropdown menus
- Semantic HTML structure

## Examples

### Basic Navigation

```html
<nav class="navbar">
  <div class="navbar-start">
    <a href="/" class="navbar-brand">Design System</a>
  </div>
  
  <div class="navbar-center">
    <ul class="navbar-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
  
  <div class="navbar-end">
    <button id="theme-toggle" class="theme-toggle">Toggle Theme</button>
  </div>
</nav>
```

### Navigation with Dropdown

```html
<nav class="navbar">
  <div class="navbar-start">
    <a href="/" class="navbar-brand">Design System</a>
  </div>
  
  <div class="navbar-center">
    <ul class="navbar-menu">
      <li><a href="#home">Home</a></li>
      <li class="dropdown">
        <a href="#products">Products</a>
        <div class="dropdown-content">
          <ul>
            <li><a href="#product1">Product 1</a></li>
            <li><a href="#product2">Product 2</a></li>
          </ul>
        </div>
      </li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
