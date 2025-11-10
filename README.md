# Modern Documentation Template

A modern, responsive documentation template built with React, Vite, and TailwindCSS. Perfect for technical documentation like "Google Merchant Center Compliance Documentation".

## 🚀 Features

- **Modern Stack**: React 18 + Vite for fast development and builds
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Dark Mode**: Full dark mode support with system preference detection
- **Responsive Design**: Mobile-first, fully responsive layout
- **Search Functionality**: Dynamic search across all documentation pages
- **Smooth Navigation**: Sticky sidebar with collapsible sections
- **Code Blocks**: Syntax-highlighted code blocks with copy functionality
- **Breadcrumbs**: Clear navigation hierarchy
- **Next/Previous Navigation**: Easy navigation between pages
- **Accessibility**: Keyboard navigation and focus management

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx       # Top navigation bar with search and dark mode
│   ├── Sidebar.jsx      # Sticky sidebar with collapsible sections
│   ├── Footer.jsx       # Site footer
│   ├── CodeBlock.jsx    # Code snippet component with copy button
│   ├── DocCard.jsx      # Documentation card component
│   ├── SearchBar.jsx    # Search modal component
│   └── Layout.jsx       # Main layout wrapper
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   └── DocPage.jsx      # Dynamic documentation page
├── data/                # Documentation content
│   └── docs.json        # JSON structure for all docs
├── hooks/               # Custom React hooks
│   └── useDarkMode.js   # Dark mode state management
├── App.jsx              # Main app component with routing
├── main.jsx             # React entry point
└── index.css            # Global styles
```

## 🛠️ Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Adding Documentation

Documentation content is stored in `src/data/docs.json`. The structure follows this format:

```json
{
  "sections": [
    {
      "id": "section-id",
      "title": "Section Title",
      "pages": [
        {
          "id": "page-id",
          "title": "Page Title",
          "path": "/docs/page-path",
          "content": {
            "sections": [
              {
                "heading": "Section Heading",
                "content": "Text content...",
                "list": ["Item 1", "Item 2"],
                "code": "Code snippet here"
              }
            ]
          }
        }
      ]
    }
  ]
}
```

### Content Types

Each section in a page can include:
- **heading**: Section title
- **content**: Main text content
- **list**: Array of list items (rendered as bullet list)
- **code**: Code snippet (rendered in CodeBlock component)

## 🎨 Customization

### Colors

The theme uses TailwindCSS default colors. To customize, edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

### Styling

All components use TailwindCSS utility classes. Modify component files to change styling.

### Dark Mode

Dark mode is handled automatically via the `useDarkMode` hook. It:
- Detects system preference on first load
- Saves user preference to localStorage
- Applies `dark` class to document root

## 🔍 Search Functionality

The search bar searches through:
- Page titles
- Page content (all text in content sections)

To improve search, you can:
- Add keywords to page metadata
- Implement fuzzy search
- Add search result highlighting

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (sidebar hidden, mobile menu)
- **Tablet**: 768px - 1024px (sidebar hidden)
- **Desktop**: > 1024px (full sidebar visible)

## 🧩 Components

### Navbar
- Logo and site title
- Documentation link
- Search button
- Dark mode toggle
- Mobile menu

### Sidebar
- Collapsible sections
- Active page highlighting
- Smooth scroll on navigation
- Sticky positioning

### CodeBlock
- Syntax highlighting ready
- Copy to clipboard button
- Dark theme optimized

### DocPage
- Dynamic content rendering
- Breadcrumb navigation
- Next/Previous navigation
- Meta title updates

## 🚀 Deployment

### Vercel
```bash
npm run build
# Deploy dist/ folder
```

### Netlify
```bash
npm run build
# Deploy dist/ folder
```

### GitHub Pages
Update `vite.config.js`:
```js
export default defineConfig({
  base: '/your-repo-name/',
  // ...
})
```

## 📚 Technologies

- **React 18**: UI library
- **Vite**: Build tool
- **React Router DOM**: Client-side routing
- **TailwindCSS**: Styling
- **Lucide React**: Icons

## 🎯 Best Practices

1. **Content Structure**: Keep documentation organized in logical sections
2. **Code Examples**: Use CodeBlock component for all code snippets
3. **Navigation**: Ensure clear navigation paths between related pages
4. **Accessibility**: Maintain keyboard navigation and focus states
5. **Performance**: Optimize images and lazy load when possible

## 📄 License

MIT

## 🤝 Contributing

Feel free to submit issues and enhancement requests!
