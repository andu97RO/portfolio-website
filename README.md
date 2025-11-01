# Andrei Bogdan - Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations and a tech-inspired design.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with gradient accents and smooth animations
- **Framer Motion Animations**: Engaging animations and transitions throughout
- **Interactive Components**:
  - Dynamic navigation with mobile hamburger menu
  - Animated hero section with typing effect
  - Skills chart with animated progress bars
  - Filterable projects section
  - Contact form with validation
- **Sections**:
  - Hero/Landing page
  - About Me
  - Skills & Certifications
  - Experience & Education timeline
  - Featured Projects
  - Contact Form

## Tech Stack

- **React** - Frontend framework
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **CSS3** - Custom styling with CSS variables
- **React Intersection Observer** - Scroll-based animations

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.

### `npm test`

Launches the test runner in interactive watch mode.

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.js`):
   - Update name, title, and tagline
   - Change social media links

2. **About Section** (`src/components/About.js`):
   - Modify the about text and highlights

3. **Skills Section** (`src/components/Skills.js`):
   - Update skills array with your own skills and proficiency levels
   - Add/remove certifications

4. **Experience Section** (`src/components/Experience.js`):
   - Update work experience, education, and volunteer history

5. **Projects Section** (`src/components/Projects.js`):
   - Add your own projects with descriptions, technologies, and links

6. **Contact Section** (`src/components/Contact.js`):
   - Update contact information
   - Configure form submission (currently shows success message only)

### Color Scheme

The color scheme can be customized in `src/App.css` by modifying the CSS variables:

```css
:root {
  --primary-color: #00ff87;
  --secondary-color: #0066ff;
  --bg-dark: #0a0e27;
  --bg-darker: #050816;
  --text-light: #e8e8e8;
  --text-gray: #b0b0b0;
  --accent-blue: #00d4ff;
}
```

## Deployment

### Deploy to Netlify

1. Build your app:
```bash
npm run build
```

2. Deploy the `build` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio-website",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

Andrei Bogdan
- LinkedIn: [andreipbogdan](https://www.linkedin.com/in/andreipbogdan/)
- GitHub: [andreipbogdan](https://github.com/andreipbogdan)
- Location: Bucharest, Romania

---

Built with React and Framer Motion
