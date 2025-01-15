import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const ImagePopup = ({ isOpen, onClose, image, title, description }) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Small delay to trigger animation
      setTimeout(() => {
        setAnimationClass('translate-x-0 opacity-100');
      }, 50);
    } else {
      setAnimationClass('translate-x-full opacity-0');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed right-0 top-0 w-[40%] h-screen bg-white overflow-y-auto transition-all duration-500 ease-out transform ${animationClass}`}
      style={{ transformOrigin: 'right' }}
    >
      {/* Image Section */}
      <div className="relative h-[60vh] w-full">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:opacity-70 transition-opacity"
        >
          <FiX className="w-6 h-6" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h2 className="text-4xl font-normal mb-4">{title}</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Additional Content */}
      <div className="px-8 pb-8">
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Details</h3>
            <p className="text-gray-600">Additional information about the exhibition or film can go here.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Schedule</h3>
            <p className="text-gray-600">Screening times and dates can be listed here.</p>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 right-0 w-[40%] bg-white p-8 border-t">
        <button 
          className="w-full bg-[#E24D2C] text-white py-3 rounded hover:opacity-90 transition-opacity"
        >
          Buy Tickets
        </button>
      </div>
    </div>
  );
};

export default ImagePopup; 