// Import React libraries
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Import global styles
import './index.css';

// Import the main App component
import App from './App.jsx';

// Create a root and render the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
