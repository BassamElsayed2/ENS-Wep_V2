# CSS Structure Documentation

This directory contains the organized CSS files for the ENS theme. The large `main.css` file has been split into multiple organized files for better maintainability and development experience.

## Directory Structure

```
css/
├── main.css                 # Main CSS file that imports all other files
├── base/                    # Base styles
│   ├── variables.css        # CSS custom properties (variables)
│   ├── typography.css       # Typography styles
│   ├── buttons.css         # Button components
│   └── forms.css           # Form styles
├── layout/                  # Layout styles
│   ├── gutter.css          # Grid gutter styles
│   ├── container.css       # Container styles
│   └── header.css          # Header styles
├── components/              # Component styles
│   ├── hero.css            # Hero banner styles
│   ├── about.css          # About section styles
│   ├── services.css        # Services section styles
│   ├── features.css       # Features section styles
│   ├── testimonials.css    # Testimonials section styles
│   ├── blog.css           # Blog section styles
│   └── contact.css        # Contact section styles
└── utilities/              # Utility styles
    ├── animations.css      # Animation keyframes and classes
    └── helpers.css         # Helper utility classes
```

## Usage

The main CSS file (`src/app/assets/main.css`) now imports the organized structure through `css/main.css`. This approach provides:

1. **Better Organization**: Each file has a specific purpose
2. **Easier Maintenance**: Developers can quickly find and edit specific styles
3. **Modular Development**: Components can be developed independently
4. **Better Performance**: Unused styles can be easily removed
5. **Team Collaboration**: Multiple developers can work on different CSS files without conflicts

## File Descriptions

### Base Styles (`base/`)

- **variables.css**: Contains all CSS custom properties (CSS variables) used throughout the theme
- **typography.css**: Base typography styles for headings, paragraphs, links, etc.
- **buttons.css**: All button component styles and variations
- **forms.css**: Form input, checkbox, radio button, and form control styles

### Layout Styles (`layout/`)

- **gutter.css**: Grid system gutter spacing utilities
- **container.css**: Container max-width and responsive breakpoints
- **header.css**: Header navigation, sticky header, and offcanvas styles

### Component Styles (`components/`)

- **hero.css**: Hero banner and landing page hero sections
- **about.css**: About section and company information styles
- **services.css**: Services section and service card styles
- **features.css**: Feature sections and feature card styles
- **testimonials.css**: Testimonial sections and testimonial card styles
- **blog.css**: Blog listing and blog post styles
- **contact.css**: Contact form and contact information styles

### Utility Styles (`utilities/`)

- **animations.css**: Keyframe animations and animation utility classes
- **helpers.css**: Common utility classes for spacing, display, positioning, etc.

## Development Guidelines

1. **File Naming**: Use kebab-case for file names
2. **Comments**: Add section comments at the top of each file
3. **Organization**: Keep related styles together within each file
4. **Responsive**: Include responsive styles within the same file
5. **Variables**: Use CSS custom properties from `variables.css` for consistency

## Adding New Styles

When adding new styles:

1. **Identify the category**: Determine if it's base, layout, component, or utility
2. **Choose the appropriate file**: Add to the most relevant existing file or create a new one
3. **Follow the structure**: Maintain the organized approach
4. **Update imports**: If creating new files, add imports to `main.css`

## Migration Notes

The original `main.css` file has been preserved and now imports the new organized structure. This ensures backward compatibility while providing the new organized approach for development.
