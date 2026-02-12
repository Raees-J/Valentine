# Valentine's Day Card 💝

An interactive, animated Valentine's Day greeting card built with React, Framer Motion, and Tailwind CSS.

## Features

- 📖 Book-like opening animation
- 💜 Floating hearts background with 3D rotation
- ⌨️ Typewriter effect with personalized message
- 🖼️ Photo collage with your memories
- ⏱️ Live timer counting since your first conversation
- 🎵 Background music player
- 📱 Fully mobile responsive

## Setup

1. Clone the repository:
```bash
git clone https://github.com/Raees-J/Valentine.git
cd Valentine
```

2. Install dependencies:
```bash
npm install
```

3. Add your background music:
   - Place your music file in the `public` folder
   - Name it `background-music.mp3` (or update the path in `src/components/BackgroundMusic.jsx`)

4. Replace the images:
   - Add your photos to the `public` folder
   - Update the image paths in `src/components/ImageCarousel.jsx`

5. Run the development server:
```bash
npm run dev
```

6. Build for production:
```bash
npm run build
```

## Customization

### Update the Message
Edit `src/components/TypewriterText.jsx` to customize the message on the left page.

### Change the Names
Edit `src/components/CyclingText.jsx` to change the cycling names on the front cover.

### Update the Date
Edit `src/components/TimeSinceCounter.jsx` to change the starting date for the timer.

### Change Colors
- Front cover gradient: `src/components/GreetingCard.jsx`
- Left page gradient (lilac purple): `src/components/GreetingCard.jsx`
- Background: `src/App.jsx`

## Technologies Used

- React 18
- Vite
- Framer Motion (animations)
- Tailwind CSS (styling)

## License

MIT

---

Made with 💜 for Aaisha
