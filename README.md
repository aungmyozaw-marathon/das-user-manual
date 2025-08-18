# DAS User Manual

A comprehensive web-based user manual and documentation system built with React TypeScript, inspired by Zoho Books help documentation.

## Features

- **Modern UI/UX**: Clean, responsive design with Tailwind CSS
- **Comprehensive Navigation**: Hierarchical sidebar menu with collapsible sections
- **Search Functionality**: Full-text search across documentation
- **Breadcrumb Navigation**: Easy navigation with breadcrumb trails
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **TypeScript**: Full type safety and better development experience
- **Component-Based Architecture**: Modular and maintainable code structure

## Tech Stack

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript development
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Top navigation header
│   ├── Sidebar.tsx     # Left sidebar navigation
│   └── Breadcrumb.tsx  # Breadcrumb navigation
├── pages/              # Page components
│   ├── HomePage.tsx    # Dashboard/home page
│   ├── DocumentationPage.tsx # Dynamic documentation pages
│   └── SearchPage.tsx  # Search functionality
├── data/               # Static data and configuration
│   └── menuData.ts     # Navigation menu structure
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── utils/              # Utility functions
│   └── contentUtils.ts # Content management utilities
├── App.tsx             # Main application component
└── index.tsx           # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd das-user-manual
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start the development server
- `npm run build` - Build the application for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## Documentation Structure

The application includes comprehensive documentation sections:

### Main Categories
- **Getting Started**: Welcome guide and basic setup
- **My Plan**: Account management and billing
- **Personalize**: Account customization and branding
- **Home**: Dashboard and overview features
- **Settings**: System configuration and preferences
- **Documents**: Document management
- **Locations**: Multi-location business support
- **Customers & Vendors**: Contact management
- **Items**: Product and service catalog
- **Banking**: Financial account management
- **Quotes**: Estimate and proposal management
- **Invoices**: Billing and invoicing
- **Payments**: Payment processing and tracking
- **Expenses**: Expense management
- **Reports**: Financial reporting and analytics
- **Integrations**: Third-party service connections

### Navigation Features

- **Collapsible Sidebar**: Expand/collapse menu sections
- **Active State Highlighting**: Current page and section highlighting
- **Breadcrumb Navigation**: Clear navigation path
- **Search Functionality**: Find content quickly
- **Responsive Design**: Mobile-friendly navigation

## Customization

### Adding New Content

1. **Update Menu Structure**: Add new menu items in `src/data/menuData.ts`
2. **Create Content**: Add content logic in `src/utils/contentUtils.ts`
3. **Add Routes**: Update routing in `src/App.tsx` if needed

### Styling

The application uses Tailwind CSS for styling. Custom styles can be added in:
- `src/index.css` - Global styles and custom utilities
- `tailwind.config.js` - Tailwind configuration

### Theming

The color scheme can be customized by modifying the primary colors in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deployment Options

- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository for automatic deployments
- **AWS S3**: Upload build files to S3 bucket
- **GitHub Pages**: Deploy using GitHub Actions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by [Zoho Books Help Documentation](https://www.zoho.com/us/books/help/home/)
- Built with modern web technologies and best practices
- Designed for optimal user experience and accessibility

## Support

For support and questions:
- Create an issue in the repository
- Check the documentation for common solutions
- Review the code examples in the source files
