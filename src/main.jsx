import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

// ScrollToTop component - handles all scroll logic
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also schedule it for after a small delay to catch any timing issues
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}

// Main App wrapper with Router
function RootApp() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}

createRoot(document.getElementById('root')).render(
    <RootApp />
);