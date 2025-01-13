# DevTools Component

A modern, reusable, and customizable developer tools component for React applications. This package provides a clean UI for inspecting routes, managing packages, and handling assets and components in your project.

---

## Features

- **Routes Inspection**: View available application routes.
- **Package Manager Integration**: Install and manage dependencies (supports npm, pnpm, yarn, and bun).
- **Assets Viewer**: Browse and preview static assets in your project.
- **Component Highlighter**: Highlight and inspect React components.
- **Dark Mode UI**: Sleek, developer-friendly interface.
- **Easy Integration**: Add to your application layout or document structure.

---

## Usage

To use `DevTools`, integrate it into your application's layout or document structure to ensure it's always available for development:

### Adding to Layout Component

```tsx
// src/components/Layout.tsx
import React from 'react';
import { DevTools } from '@/components';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <DevTools />
    </div>
  );
};

export default Layout;
```

### Wrapping the Document

```tsx
// src/pages/_app.tsx
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
```

---

## API

### `DevTools`

The main component that provides the developer tools interface.

#### Props

The `DevTools` component does not require any props. Simply include it in your React component tree.

---

## Project Structure

```
app/
├── src/
│   ├── index.ts         # Entry point
│   ├── DevTools.tsx     # Main DevTools component
│   ├── Tabs/            # Subcomponents for tabs
│   └── Components/      # Utility components
├── dist/                # Compiled files (after build)
├── package.json         # Package metadata
├── tsconfig.json        # TypeScript configuration
└── README.md            # Documentation
```

---

## Development

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Scripts

- **`npm run build`**: Compiles the source code to the `dist` directory.
- **`npm run clean`**: Removes the `dist` directory.
- **`npm publish`**: Publishes the package to npm.

---

## Supported Package Managers

This component detects and supports the following package managers:

- `npm`
- `yarn`
- `pnpm`
- `bun`

---

## Contributing

Contributions are welcome! If you'd like to improve this package, feel free to submit a pull request or open an issue.

1. Fork the repository.
2. Clone your fork.
3. Make changes and commit.
4. Submit a pull request.

---

## License

This project is licensed under the [MIT License](https://github.com/itsalimanuel/next-devtools?tab=MIT-1-ov-file).

---

## Author

Developed by Ali Khalouf


