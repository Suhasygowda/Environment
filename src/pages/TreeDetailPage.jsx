import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, BookOpen, MapPin, QrCode, ExternalLink, Leaf } from 'lucide-react';
import { treeDatabase } from '../data/treeDatabase';

const generateQRImage = (text) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}&color=000000&bgcolor=ffffff`;
};

// CSS Utility Classes for consistent styling
const styles = {
  sectionContainer: 'mb-8 sm:mb-10 md:mb-12 lg:mb-14',
  sectionHeader: 'flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8',
  sectionHeaderIcon: 'w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 flex-shrink-0',
  infoCard: 'p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border-2 shadow-md hover:shadow-lg transition',
  cardIcon: 'w-5 sm:w-6 md:w-7 h-5 sm:w-6 md:h-7 flex-shrink-0',
  contentBody: 'text-sm sm:text-base leading-relaxed tracking-wide',
  contentHeading: 'leading-tight tracking-tight',
  buttonBase: 'flex items-center justify-center gap-2 py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl font-semibold transition-all duration-200 focus:outline-2 focus:outline-offset-2',
  buttonPrimary: 'text-white w-full',
};

export default function TreeDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const selectedTree = useMemo(
    () => treeDatabase.find(tree => tree.id === parseInt(id)),
    [id]
  );

  // Memoized QR codes to prevent regeneration on every render
  const treeInfoQR = useMemo(
    () => generateQRImage(`Tree: ${selectedTree?.nameEnglish} | Scientific: ${selectedTree?.scientificName} | Family: ${selectedTree?.family}`),
    [selectedTree?.id]
  );

  const wikipediaQR = useMemo(
    () => generateQRImage(selectedTree?.wikipediaLink || ''),
    [selectedTree?.id]
  );

  if (!selectedTree) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">Tree Not Found</h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8">The tree you're looking for doesn't exist. Please browse our collection.</p>
        <button
          onClick={() => navigate('/')}
          className={`${styles.buttonBase} ${styles.buttonPrimary} bg-green-500 hover:bg-black`}
          style={{ backgroundColor: '#86CA6B' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
          aria-label="Navigate back to tree listing"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const relatedTrees = useMemo(
    () => treeDatabase
      .filter(tree => tree.family === selectedTree.family && tree.id !== selectedTree.id)
      .slice(0, 3),
    [selectedTree.id, selectedTree.family]
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-12 sm:pb-16 pt-10">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-6 sm:pt-8 md:pt-10">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 sm:gap-3 font-semibold transition-all duration-300 hover:gap-4 mb-6 sm:mb-8 group text-sm sm:text-base focus:outline-2 focus:outline-offset-2 rounded px-2 py-1 cursor-pointer"
          style={{ color: '#86CA6B' }}
          aria-label="Navigate back to tree listing"
        >
          <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
          Back to Trees
        </button>
      </div>

      {/* Hero Section with Image - Responsive sizing */}
      <div className={`max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 ${styles.sectionContainer}`}>
        {/* Title Card - Above Photo */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="bg-black/50 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-white/20">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-1 sm:mb-2 md:mb-3 drop-shadow-lg ${styles.contentHeading}`}>
              {selectedTree.nameEnglish}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white/95 drop-shadow-lg">
              {selectedTree.nameKannada}
            </p>
          </div>
        </div>

        <div 
          className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl md:shadow-2xl border-2 sm:border-3 md:border-4 group"
          style={{ borderColor: '#86CA6B' }}
        >
          <div className="h-56 sm:h-64 md:h-80 lg:h-96 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
            <img
              src={selectedTree.image}
              alt={selectedTree.nameEnglish}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        
        {/* Info Cards Grid - Responsive: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 ${styles.sectionContainer}`}>
          {/* Scientific Name Card */}
          <div 
            className={`${styles.infoCard}`}
            style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <BookOpen className={`${styles.cardIcon}`} style={{ color: '#86CA6B' }} aria-hidden="true" />
              <h3 className="text-base sm:text-lg font-bold">Scientific Name</h3>
            </div>
            <p className={`text-gray-700 italic font-semibold ${styles.contentBody}`}>
              {selectedTree.scientificName}
            </p>
          </div>

          {/* Family Card */}
          <div 
            className={`${styles.infoCard}`}
            style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <MapPin className={`${styles.cardIcon}`} style={{ color: '#86CA6B' }} aria-hidden="true" />
              <h3 className="text-base sm:text-lg font-bold">Family</h3>
            </div>
            <p className={`text-gray-700 font-semibold ${styles.contentBody}`}>
              {selectedTree.family}
            </p>
          </div>

          {/* Uses Count Card */}
          <div 
            className={`${styles.infoCard}`}
            style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <Leaf className={`${styles.cardIcon}`} style={{ color: '#86CA6B' }} aria-hidden="true" />
              <h3 className="text-base sm:text-lg font-bold">Uses</h3>
            </div>
            <p className={`text-gray-700 font-semibold ${styles.contentBody}`}>
              {selectedTree.uses.length} Benefits
            </p>
          </div>
        </div>

        {/* Uses & Benefits Section */}
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <Leaf className={styles.sectionHeaderIcon} style={{ color: '#86CA6B' }} aria-hidden="true" />
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${styles.contentHeading}`}>
              Uses & Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {selectedTree.uses.map((use, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border-l-4 shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105`}
                style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 sm:w-3 h-2 sm:h-3 rounded-full flex-shrink-0" style={{ backgroundColor: '#86CA6B' }} />
                  <p className={`text-gray-800 font-semibold ${styles.contentBody}`}>
                    {use}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* QR Codes Section */}
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <QrCode className={styles.sectionHeaderIcon} style={{ color: '#86CA6B' }} aria-hidden="true" />
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${styles.contentHeading}`}>
              Quick Links
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Tree Info QR */}
            <div 
              className={`${styles.infoCard}`}
              style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">
                Tree Information
              </h3>
              <div 
                className="bg-white rounded-lg sm:rounded-xl shadow-md border-2 flex justify-center mb-6 w-fit mx-auto"
                style={{ borderColor: '#86CA6B', padding: '0px' }}
              >
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(`${selectedTree.nameEnglish}`)}&color=000000&bgcolor=ffffff`}
                  alt={`QR code containing information about ${selectedTree.nameEnglish}`}
                  className="w-40 sm:w-48 md:w-56"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm sm:text-base font-semibold" style={{ color: '#86CA6B' }}>
                Scan to view detailed information
              </p>
            </div>

            {/* Wikipedia QR */}
            <div 
              className={`${styles.infoCard}`}
              style={{ backgroundColor: '#F5FBF2', borderColor: '#86CA6B' }}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 text-center">
                Wikipedia Link
              </h3>
              <div 
                className="bg-white rounded-lg sm:rounded-xl shadow-md border-2 flex justify-center mb-6 w-fit mx-auto"
                style={{ borderColor: '#86CA6B', padding: '0px' }}
              >
                <img
                  src={wikipediaQR}
                  alt={`QR code linking to Wikipedia page for ${selectedTree.nameEnglish}`}
                  className="w-40 sm:w-48 md:w-56"
                  loading="lazy"
                />
              </div>
              <p className="text-center text-sm sm:text-base font-semibold" style={{ color: '#86CA6B' }}>
                Scan to visit Wikipedia
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons - Responsive sizing */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 cursor-pointer ${styles.sectionContainer}`}>
          <a
            href={selectedTree.wikipediaLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.buttonBase} ${styles.buttonPrimary} flex-1 text-sm sm:text-base md:text-lg`}
            style={{ backgroundColor: '#86CA6B' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
          >
            Visit Wikipedia
            <ExternalLink className="w-4 sm:w-5 h-4 sm:h-5" aria-hidden="true" />
          </a>
          <button
            onClick={() => navigate('/')}
            className={`${styles.buttonBase} ${styles.buttonPrimary} flex-1 text-sm sm:text-base md:text-lg cursor-pointer`}
            style={{ backgroundColor: '#86CA6B' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
          >
            Explore More Trees
          </button>
        </div>

        {/* Related Trees Section */}
        {relatedTrees.length > 0 && (
          <div className={styles.sectionContainer}>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10 ${styles.contentHeading}`}>
              Related Trees in {selectedTree.family} Family
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {relatedTrees.map((tree) => (
                <div
                  key={tree.id}
                  onClick={() => navigate(`/tree/${tree.id}`)}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer overflow-hidden border-2 focus-within:outline-2 focus-within:outline-offset-2 group"
                  style={{ borderColor: '#86CA6B' }}
                  role="link"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/tree/${tree.id}`)}
                  aria-label={`View details for ${tree.nameEnglish}`}
                >
                  <div className="h-40 sm:h-48 relative overflow-hidden" style={{ backgroundColor: '#86CA6B' }}>
                    <img
                      src={tree.image}
                      alt={tree.nameEnglish}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-1">
                      {tree.nameEnglish}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold mb-2" style={{ color: '#86CA6B' }}>
                      {tree.nameKannada}
                    </p>
                    <p className="text-xs text-gray-600 italic mb-4">
                      {tree.scientificName}
                    </p>
                    <button 
                      className={`w-full py-2 sm:py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 cursor-pointer`}
                      style={{ backgroundColor: '#86CA6B' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#000'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = '#86CA6B'}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/tree/${tree.id}`);
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}