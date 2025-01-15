import React, { useState, useEffect } from 'react';
import { FiX, FiSearch, FiMenu } from 'react-icons/fi';

const RightImageSection = ({ currentTitle }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [expandedImage, setExpandedImage] = useState(false);
  const [currentImage, setCurrentImage] = useState({
    url: '4.JPG', 
    title: 'Where Dragons Live',
    description: 'An eccentric family have to overcome fears from their childhood when emptying their parental home...',
    time: '14:45',
    details: 'Additional information about the exhibition or film can go here.',
    schedule: 'Screening times and dates can be listed here.'
  });

  const handleImageClick = () => {
    setIsPopupOpen(true);
    // Delay the image expansion to create a sequence
    setTimeout(() => {
      setExpandedImage(true);
    }, 100);
  };

  const handleClose = () => {
    setExpandedImage(false);
    // Delay closing the popup to allow image to contract first
    setTimeout(() => {
      setIsPopupOpen(false);
    }, 500);
  };
  

  return (
    <>
      {/* Right Image Section with Hover Effect */}
      <div 
        onClick={handleImageClick}
        className={`fixed right-0 top-0 2xl:w-1/2 w-[40%] h-screen cursor-pointer transition-all duration-500 ease-out
          ${isPopupOpen ? 'w-[80vw] -right-[20vw]' : ''}`}
      >
        {/* Right Section */}
        {/* Top Navigation */}
        <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-30">
          <button className="text-white hover:opacity-70 transition-opacity underline text-sm tracking-wide">
            VIEW HIGHLIGHTS
          </button>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white">
              <button className="hover:opacity-70 transition-opacity text-sm">NL</button>
              <span>|</span>
              <button className="hover:opacity-70 transition-opacity text-sm">EN</button>
            </div>
            <button className="text-white hover:opacity-70 transition-opacity">
              <FiSearch className="w-5 h-5" />
            </button>
            <button className="text-white hover:opacity-70 transition-opacity">
              <FiMenu className="w-6 h-6" />
            </button>
          </div>
        </nav>

         

        <div 
          className={`w-full h-full bg-cover bg-center transition-all duration-500 ease-out
            ${expandedImage ? 'scale-110' : 'scale-100'}`}
          style={{ 
            backgroundImage: `url(${currentImage.url})`,
            transformOrigin: 'center center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        </div>

        {/* Expanded Content */}
        {isPopupOpen && (
          <div 
            className={`absolute inset-0 bg-white overflow-y-auto transition-all duration-500 ease-out
              ${expandedImage ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Header Image */}
            <div className="relative h-[60vh] w-full">
              <img 
                src={currentImage.url} 
                alt={currentImage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
              
              {/* Close Button */}
              <button 
                onClick={handleClose}
                className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity z-50"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-2">{currentImage.time}</p>
                <h2 className="text-4xl font-normal mb-4">{currentImage.title}</h2>
                <p className="text-gray-600 leading-relaxed">{currentImage.description}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Details</h3>
                  <p className="text-gray-600">{currentImage.details}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Schedule</h3>
                  <p className="text-gray-600">{currentImage.schedule}</p>
                </div>
              </div>
            </div>

            {/* Bottom Action */}
            <div className="fixed bottom-0 right-0  bg-white p-8 border-t">
              <button 
                className="w-full bg-[#E24D2C] text-white py-3 rounded hover:opacity-90 transition-opacity"
              >
                Buy Tickets
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for the rest of the screen */}
      {isPopupOpen && (
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-500 ease-out z-40
            ${expandedImage ? 'opacity-50' : 'opacity-0'}`}
          onClick={handleClose}
        />
      )}
    </>
  );
};

export default RightImageSection;
