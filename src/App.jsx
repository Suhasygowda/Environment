import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TreeDetailPage from './pages/TreeDetailPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5FBF2' }}>
      <Preloader />
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tree/:id" element={<TreeDetailPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}