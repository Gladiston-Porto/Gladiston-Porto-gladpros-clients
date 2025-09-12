# Contributing to @gladpros/ui

Thank you for your interest in contributing to the @gladpros/ui component library! We welcome contributions from the community.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/gladpros-ui.git
   cd gladpros-ui
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 🏗️ Development Workflow

### 1. Make Your Changes

- Follow the existing code style and patterns
- Add TypeScript types for all new code
- Update documentation as needed
- Write tests for new functionality

### 2. Testing

Run the test suite to ensure your changes don't break existing functionality:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### 3. Linting

Ensure your code follows our linting rules:

```bash
# Check for linting issues
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

### 4. Type Checking

Verify TypeScript types are correct:

```bash
npm run type-check
```

### 5. Build

Test that the library builds correctly:

```bash
npm run build
```

## 📝 Component Guidelines

When creating new components, follow these guidelines:

### File Structure
```
src/components/
├── YourComponent.tsx
├── YourComponent.test.tsx
└── index.ts
```

### Component API
- Use TypeScript interfaces for props
- Provide default values where appropriate
- Support `className` and `...props` for customization
- Use `forwardRef` when the component needs to expose a ref

### Example Component Structure
```tsx
import React, { forwardRef } from 'react'
import { cn } from '../utils/cn'

export interface YourComponentProps {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

const YourComponent = forwardRef<HTMLDivElement, YourComponentProps>(
  ({ variant = 'default', size = 'md', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'your-component-base-classes',
          {
            'variant-classes': variant === 'primary',
            'size-classes': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

YourComponent.displayName = 'YourComponent'

export { YourComponent }
```

## 🎨 Styling Guidelines

- Use Tailwind CSS utility classes
- Follow the established design tokens
- Support both light and dark themes
- Ensure responsive design
- Test components across different screen sizes

## 📚 Documentation

- Update the README.md for new components
- Add JSDoc comments for complex logic
- Provide usage examples
- Document any breaking changes

## 🔄 Pull Request Process

1. Ensure all tests pass
2. Update documentation if needed
3. Write a clear PR description including:
   - What changes were made
   - Why the changes were needed
   - Any breaking changes
   - Screenshots for UI changes

4. Wait for review and address any feedback

## 📋 Commit Guidelines

Use conventional commit format:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `test:` - Test additions/changes
- `chore:` - Maintenance tasks

Example:
```
feat: add new Button component with loading state
fix: resolve Input focus issue on mobile devices
docs: update installation instructions
```

## 🤝 Code of Conduct

Please be respectful and inclusive in all interactions. We follow a code of conduct to ensure a positive community experience.

## 📞 Support

If you need help or have questions:

- Open an issue on GitHub
- Join our discussions
- Check the documentation

Thank you for contributing to @gladpros/ui! 🎉