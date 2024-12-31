# The Rapier Company LLC Website

A modern, responsive website for The Rapier Company LLC, built with Next.js 14, Tailwind CSS, and shadcn/ui components. This website showcases our enterprise technology consulting services, specializing in banking, technology, and enterprise sectors.

![TRC Website](public/og.png)

## 🚀 Features

- **Modern Stack**: Built with Next.js 14, React, and Tailwind CSS
- **Component Library**: Utilizes shadcn/ui for consistent, beautiful UI components
- **Dark Mode**: Full dark mode support across all pages
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: Built with performance best practices

## 🛠 Tech Stack

- [Next.js 14](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 🏗 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rapier-consulting.git
cd rapier-consulting
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy this website is to use [Vercel](https://vercel.com).

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

For production deployment:
```bash
vercel --prod
```

## 📁 Project Structure

```
rapier-consulting/
├── src/
│   ├── app/              # App router pages
│   ├── components/       # React components
│   └── lib/             # Utility functions
├── public/              # Static assets
└── ...config files
```

## 🎨 Customization

### Adding New Components

To add new shadcn/ui components:

```bash
npx shadcn-ui@latest add [component-name]
```

### Styling

- Tailwind CSS classes are used for styling
- Global styles are in `src/app/globals.css`
- Theme configuration in `tailwind.config.js`

## 📝 License

Copyright © 2024 The Rapier Company LLC. All rights reserved.

## 🤝 Contact

For inquiries about our consulting services, please visit our [contact page](https://rapier-consulting.vercel.app/contact) or email us at [contact@rapiercompany.com](mailto:contact@rapiercompany.com).
