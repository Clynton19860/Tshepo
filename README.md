# Tshepo Portfolio

A stunning, futuristic portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Futuristic Design**: Glassmorphism effects, gradient animations, and neon glows
- ✨ **Smooth Animations**: Powered by Framer Motion for fluid interactions
- 🎯 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Performance**: Built with Next.js 14+ for optimal speed
- 🎭 **Interactive Elements**: Particle effects, 3D transforms, and hover animations
- 📱 **Modern UI**: shadcn/ui components with custom styling

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Particles**: @tsparticles/react
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd TshepoPort
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Portfolio sections
│   ├── animations/         # Animation components
│   ├── effects/            # Visual effects
│   └── Navigation.tsx      # Navigation component
├── lib/
│   ├── utils.ts            # Utility functions
│   └── animations.ts      # Animation variants
└── public/
    ├── images/             # Project images
    └── documents/          # Resume, certificates, etc.
```

## Customization

### Update Your Information

1. **Hero Section**: Edit `components/sections/Hero.tsx` to update your name and roles
2. **About Section**: Modify `components/sections/About.tsx` with your story
3. **Skills**: Update skills in `components/sections/Skills.tsx`
4. **Projects**: Add your projects in `components/sections/Projects.tsx`
5. **Experience**: Update work experience in `components/sections/Experience.tsx`
6. **Contact**: Update contact information in `components/sections/Contact.tsx`

### Colors & Theme

Edit `tailwind.config.ts` to customize the color palette and design tokens.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

The site will be live at `https://your-project.vercel.app`

## Build

```bash
npm run build
```

## License

MIT

## Author

Tshepo

