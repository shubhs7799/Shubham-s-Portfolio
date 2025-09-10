# Shubham Raut - Portfolio Website

A modern, responsive, and dark-themed developer portfolio website built with React.js and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional dark theme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth animations using Framer Motion
- **Particle Background**: Dynamic particle animation background
- **Typing Animation**: Dynamic typing effect for skills showcase
- **Smooth Scrolling**: Smooth scroll navigation between sections
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **PWA Ready**: Progressive Web App capabilities

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Typing Effect**: React Type Animation
- **Build Tool**: Create React App

## 📱 Sections

1. **Home**: Hero section with greeting, typing animation, and developer illustration
2. **About**: Personal info, education, skills, and tools
3. **Projects**: Showcase of recent projects with live demos and GitHub links
4. **Resume**: Professional resume with download option
5. **Contact**: Contact form and social media links

## 🎨 Design Features

- **Color Palette**: Dark theme with purple accents (#a855f7)
- **Glass Morphism**: Modern glass effect on cards
- **Hover Effects**: Interactive hover animations
- **Gradient Text**: Beautiful gradient text effects
- **Custom Scrollbar**: Styled scrollbar matching the theme

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shubhamraut/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. Deploy:
```bash
npm run deploy
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

- `src/components/Home.js` - Name, title, and social links
- `src/components/About.js` - Personal info, education, skills
- `src/components/Projects.js` - Your projects
- `src/components/Resume.js` - Professional experience
- `src/components/Contact.js` - Contact information

### Styling

- Colors: Update `tailwind.config.js` for custom color palette
- Fonts: Modify `src/index.css` for different fonts
- Animations: Customize animations in component files

### Content

- Replace placeholder images in the projects section
- Update social media links
- Add your actual resume PDF
- Modify project descriptions and links

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/shubhamraut/portfolio/issues).

## 📞 Contact

Shubham Raut - [shubham@example.com](mailto:shubham@example.com)

Project Link: [https://github.com/shubhamraut/portfolio](https://github.com/shubhamraut/portfolio)

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Type Animation](https://www.npmjs.com/package/react-type-animation)
