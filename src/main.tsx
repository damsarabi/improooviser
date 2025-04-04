// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppThemeProvider } from './contexts/themeContext'; // Import the provider

// Get the root element, assert it's not null for TypeScript
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppThemeProvider> {/* Wrap App with the theme provider */}
      <App />
    </AppThemeProvider>
  </React.StrictMode>,
);