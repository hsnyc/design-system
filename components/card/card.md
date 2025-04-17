# Card Component

Cards provide a flexible and extensible content container. They include options for headers, footers, content, images, and powerful display options.

## Usage

Import or link the `card.css` stylesheet.

### Basic Card

```html
<div class="card">
    <div class="card-body">
        <h3 class="card-title">Card Title</h3>
        <p>This is some text within a card body.</p>
    </div>
</div>
```

### Card with Image

Place an image with the class `.card-img-top` before the `.card-body`.

```html
<div class="card">
    <img src="..." alt="..." class="card-img-top">
    <div class="card-body">
        <h3 class="card-title">Card Title</h3>
        <p>Card content.</p>
    </div>
</div>
```

### Card with Actions

Use the `.card-actions` container, typically within the `.card-body`, to group buttons or links.

```html
<div class="card">
    <div class="card-body">
        <h3 class="card-title">Card Title</h3>
        <p>Card content.</p>
        <div class="card-actions">
            <button class="btn btn-primary">Action</button>
        </div>
    </div>
</div>
```

## Classes

- `.card`: The main container element.
- `.card-body`: Padding and flex container for card content.
- `.card-title`: Styles for the card title heading.
- `.card-img-top`: Styles an image placed at the top of the card.
- `.card-actions`: Container for action buttons/links.
