import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import EventDetailsPopup from './EventDetailsPopup';

// Sample events data
const eventsData = {
  'January 16': {
    type: 'National Startup Day',
    title: 'Speaker Session',
    time: '9:30-18:00',
  
    location: 'D8 CUBE',
    description: "Proposed Guests:- Inshorts, Firstcry, Razorpay, Rapido, Slice, ShareChat, Onecard, porter Event Participation: 500+ attendees Startup Representation: 8-10 unique startup stories Networking Efficiency: 3:1 student-to-founder interaction ratio Knowledge Transfer Index: 85% positive learning feedback Post-Event Innovation Potential: 25 actionable startups ",

    image: '4.webp'
  },
  'February 13': {
    type: 'TechInvent',
    title: '(Grand)Launch of CUBE ',
    time:'11:00-19:00',
    
   
    location: 'D8 CUBE',
    description: 'Proposed Guests:- OLA Electric, Lenskart, OYO ',
    image: 'c2.webp'
  },

  'February 14': {
    type: 'TechInvent',
    title: '(Grand)Launch of CUBE ',
    time:'10:00-19:00',
   
    location: 'D8 CUBE',
    description: 'Proposed Guests:- OLA Electric, Lenskart, OYO ',
     image: 'c2.webp'
  },
  'February 15': {
    type: 'TechInvent',
    title: '(Grand)Launch of CUBE ',
    time:'12:00-19:00',
   
    location: 'D8 CUBE',
    description: 'Proposed Guests:- OLA Electric, Lenskart, OYO ',
     image: 'c2.webp'
  },
  'March 8': {
    type: 'HERrise 2025',
    title: 'Promoting Women Entrepreneaurship ',
    time: '10:00 - 16:00',
    location: 'D8 CUBE',
    description: 'Womens Day & Startup Networking (Along with CAB), (Womens Day 2025) Promoting Women Entrepreneaurship (Speaker Session), Achieve 90% participant engagement, Create 75 direct mentor-mentee networking opportunities, Generate 25 potential collaborative business/startup ideas, Facilitate 15 potential funding/investment discussion channels, Inspire minimum 50 women to initiate entrepreneurial ventures '
  },
  'March 26': {
    type: 'TED Talk',
    title: 'TED x Chandigarhuniversity',
    time:'11:00-19:00',
    location: 'D8 CUBE',
    image:'date2.webp',
    description: 'Womens Day & Startup Networking (Along with CAB), (Womens Day 2025) Promoting Women Entrepreneaurship (Speaker Session)'
  },
  'April 5': {
    type: '(industrial) Bootcamp',
    title: 'Bootcamp Week 2025',
    time:'11:00-17:00',

    location: 'D8 CUBE',
    description: 'Total Participation: 250+ students,Innovation Prototype Generation: 20+ technological concepts , Networking Efficiency: 3:1 participant-to-expert interaction ratio'
  },
  'April 24': {
    type: 'Drone Race',
    title: 'Drone Race',
    time:'9:00-16:00',
    location: 'D8 CUBE',
    description: ''
  },


};

const CalendarPopup = ({ isOpen, onClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const closeThePopup = () =>{
    setSelectedEvent(null);
  }

  if (!isOpen) return null;

  const handleDateClick = (month, day) => {
    const dateString = `${month} ${day}`;
    setSelectedDate(dateString);
    
    if (eventsData[dateString]) {
      setSelectedEvent(eventsData[dateString]);
    }
  };

  const hasEvent = (month, day) => {
    return eventsData[`${month} ${day}`] !== undefined;
  };

  const handleClose = () => {
    setSelectedEvent(null);
    onClose();
  };

  return (
    <div className="h-full w-full">
        
        {selectedDate && <EventDetailsPopup 
          event={selectedEvent} 
          onClose={() => {
            closeThePopup();
          }} 
        />}
      
        <div className="h-full w-full bg-white py-8 px-7 pr-6 overflow-y-auto pb-12">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              {/* <select className="text-lg border rounded-lg px-4 py-2">
                <option>Fri 13 Dec | 12:30 - 14:40</option>
              </select> */}
              <p className="text-sm text-gray-600 mt-2"></p>
            </div>
            <button 
              onClick={handleClose}
              className="hover:opacity-70 transition-opacity"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid xl:grid-cols-3 grid-cols-2 gap-5 mb-20 w-full">
            {['January', 'February', 'March', 'April', 'May', 'June', 
              'July', 'August', 'September', 'October', 'November', 'December'].map((month,index) => {
                return <div key={month} style={{borderBottom:".5px solid grey"}} className="space-y-2 mb-2 pb-2">
                <h3 className="font-medium">{month}</h3>
                <div className="grid grid-cols-7 gap-1 text-sm">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
                    <div key={day} className="h-8 flex items-center justify-center text-gray-400">
                      {day}
                    </div>
                  ))}
                  {Array.from({ length: 31 }, (_, i) => {
                    const day = i + 1;
                    const hasEventOnDay = hasEvent(month, day);
                    
                    return (
                      <button
                        key={i}
                        onClick={() => handleDateClick(month, day)}
                        style={{fontSize:"12px"}}
                        className={`h-6 flex items-center justify-center rounded-full relative
                          hover:bg-gray-100 transition-colors
                          ${selectedDate === `${month} ${day}` ? 'bg-black text-white px-3' : ''}
                          ${hasEventOnDay ? 'font-medium' : 'font-medium'}
                        `}
                      >
                        {day}
                        {hasEventOnDay && (
                          <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#E24D2C] rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
                
              
            })}
          </div>

          {/* Bottom Action */}
          <div
            className="absolute bottom-0 right-0 bg-white p-8 border-t 
                w-full"
            >
            <button 
                className="w-full bg-[#E24D2C] text-white py-3 rounded hover:opacity-90 transition-opacity"
            >
                Buy Tickets
            </button>
            </div>

        </div>
      
    </div>
  );
};

export default CalendarPopup; 