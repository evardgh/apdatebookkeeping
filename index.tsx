import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import './firebase'; // Initialize Firebase

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </AuthProvider>
  </React.StrictMode>
);