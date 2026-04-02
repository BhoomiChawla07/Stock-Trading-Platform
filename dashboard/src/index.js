import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';

import { AuthProvider, useAuth } from './components/AuthContext';
import { GeneralContextProvider } from './components/GeneralContext';
import Auth from './components/Auth';
import Home from './components/Home';

const App = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <GeneralContextProvider>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
        <Route path="/*" element={isAuthenticated ? <Home /> : <Auth />} />
      </Routes>
    </GeneralContextProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
