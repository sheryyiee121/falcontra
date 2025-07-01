# OnWay Dispatch - Truck Dispatching Services Website

A modern, responsive website for OnWay Dispatch, a professional truck dispatching service for American truck drivers. Built with React, Vite, and Tailwind CSS.

## Features

- 🚛 **Modern Design**: Clean, professional orange and white theme
- 📱 **Fully Responsive**: Works perfectly on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal speed
- 🎨 **Beautiful UI**: Tailwind CSS for stunning visuals
- 🔗 **Smooth Navigation**: Animated scrolling between sections
- 📊 **Trust Indicators**: Company partnerships and statistics

## Sections

1. **Navbar**: Fixed navigation with smooth scrolling
2. **Hero Section**: Compelling landing page with truck imagery
3. **How It Works**: Step-by-step process explanation
4. **Footer**: Contact information and company details

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd onway-dispatch
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Landing page hero section
│   ├── HowItWorks.jsx  # How it works section
│   └── Footer.jsx      # Footer component
├── App.jsx             # Main app component
├── main.jsx           # Entry point
└── index.css          # Global styles and Tailwind imports
```

## Customization

### Colors
The primary orange color can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#ff6b35', // Main orange color
    // ... other shades
  }
}
```

### Content
Update the content in each component file to match your business needs.

## Features to Add

- Contact form functionality
- Blog section
- Driver testimonials
- Load board integration
- Real-time tracking
- Mobile app

## License

This project is licensed under the MIT License.

## Support

For support, email info@onwaydispatch.com or call (555) 123-4567. 