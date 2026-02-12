# Greeting Card with React & Framer Motion

An interactive greeting card that opens like a real book with smooth animations.

## Features

- 3D card flip animation
- Expands to fill the screen when opened
- Image carousel with drag/swipe support
- Built with React, Framer Motion, and Tailwind CSS

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (usually http://localhost:5173)

## Customization

To add your own images, edit the `images` array in `src/components/ImageCarousel.jsx`:

```javascript
const images = [
  { id: 1, emoji: '📸', label: 'Image 1', gradient: 'from-purple-500 to-indigo-600' },
  // Add more images here
]
```

You can replace the emoji placeholders with actual image URLs or import image files.
