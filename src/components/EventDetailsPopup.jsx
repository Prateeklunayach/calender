import React from 'react';
import { FiX, FiClock, FiMapPin } from 'react-icons/fi';

const EventDetailsPopup = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed left-0 top-0 2xl:w-1/2 w-[59%] h-screen bg-black/50 flex items-center justify-center z-[60]">
      <div className="bg-white rounded-lg w-[500px] max-h-[80vh] overflow-y-auto mx-auto">
        <div className="p-6 border-b">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-500 mb-2">{event.type}</p>
              <h2 className="text-2xl font-medium">{event.title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:opacity-70 transition-opacity"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <FiClock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FiMapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="prose max-w-none">
            <p>{event.description}</p>
          </div>
          
          {event.image && (
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-48 object-cover rounded-lg mt-4"
            />
          )}
        </div>

        <div className="p-6 border-t">
          <button 
            className="w-full bg-[#E24D2C] text-white py-3 rounded hover:opacity-90 transition-opacity"
          >
            Book Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPopup; 