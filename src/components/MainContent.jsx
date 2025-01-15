// components/MainContent.jsx
import React, { useState, useEffect } from 'react';
import FilterDropdown from './FilterDropdown';
import { createRoot } from 'react-dom/client';
import CalendarPopup from './CalendarPopup';
import Event1 from './event1';
import Event2 from './event2';
import Event3 from './event3';
import Event4 from './event4';
import Event5 from './event5';
import Event6 from './event6';
import Event7 from './event7';
import Event8 from './event8';
import Event9 from './event9';
import Event10 from './event10';
import Event11 from './event11';


const events = [
  {
    time: '16 JAN 2025',
    title: 'SANDBOX 2025 ',
    description: '',
    image:"/111.png"
  
    
  },
  {
    time: '',
    title: 'Our Partners and Collaborators ',
   
    description: '',
    image: '/112.png'
  },
  {
    time: '',
    title: 'Venture 1O1',
    description: ' ',
    image: '113.png',
   
  },
  {
    time: '',
    title: 'PIVOTT: Bharat’s AI Ascent',
    description: ' ',
    image: '114.png'
  },
  {
    time: '',
    title: 'Business mantra',
    description: '',
    image: '115.png'
  },
  {
    time: '',
    title: 'Anupam Mittal ',
    description: ' Unfiltered with Anupam Mittal ',
    image: '116.png'
  },
  
  {
    time: '',
    title: 'M2M',
    description: "",
    image: 'i6.webp'
  },
  
  {
    time: '',
    title: 'Event Day',
    description: 'Startup mfra &support | ',
    image: 'i7.webp'
  },
  {
    time: '',
    title: 'Reach & Impact',
    description: '',
    image: 'i8.webp'
  },
  {
    time: '',
    title: 'Post Event Plan | Sandbox 2025',
    description: '',
    image: 'c1.webp'
  },
  
];

const MainContent = ({ }) => {
  const [activeImage, setActiveImage] = useState(events[0].image);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showTypeFilter, setShowTypeFilter] = useState(false);
  const [showTimeFilter, setShowTimeFilter] = useState(false);
  const [showLanguageFilter, setShowLanguageFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    type: 'Show everything',
    time: 'for anytime',
    language: 'in all languages'
  });

  const [openDropdown, setOpenDropdown] = useState(null);
  const [sortBy, setSortBy] = useState('date'); // 'date' or 'az'

  const handleDropdownClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const rightSection = document.querySelector('.right-image-section');
    if (rightSection) {
      rightSection.style.backgroundImage = `url(${activeImage})`;
    }
  }, [activeImage]);

  // Function to check if exhibition is current
  const isCurrentExhibition = (startDate, endDate) => {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return now >= start && now <= end;
  };

  const handleCalendar = () =>{
    const rightSection = document.getElementById('main-image-section');
    rightSection.innerHTML = '';
    rightSection.style.background="";


    if (rightSection) {
      const root = createRoot(rightSection);
      root.render(<div className="h-full w-full ">
            <CalendarPopup 
              isOpen={true} 
              onClose={() => {
                rightSection.innerHTML = "";
                rightSection.style.backgroundImage = `url(${currentExhibitionImage})`;
                rightSection.style.backgroundSize = 'cover'
                rightSection.style.backgroundPosition = 'center'
              }} 
            />
          </div>);

      rightSection.style.opacity = '0.8';
      setTimeout(() => {
        rightSection.style.opacity = '1';
      }, 50);
    }

    
  }

  const handleImageChange = (image) => {
    const rightSection = document.getElementById('main-image-section');
    rightSection.innerHTML = '';


    if (rightSection) {
      rightSection.innerHTML=""
      rightSection.style.backgroundImage = `url(${image})`;
      rightSection.style.backgroundSize = 'cover'
      rightSection.style.backgroundRepeat = "no-repeat"
      rightSection.style.backgroundColor = "white"
      rightSection.style.backgroundPosition = 'center'
      rightSection.style.opacity = '0.8';
      setTimeout(() => {
        rightSection.style.opacity = '1';
      }, 50);
    }
  };

  const myEvents = [Event1, Event2, Event3, Event4, Event5, Event6, Event7, Event8, Event9, Event10, Event11]

  const handleImageOnClick = (image,index) => {
    const rightSection = document.getElementById('main-image-section');
    if (rightSection) {
      // Create or select the overlay element
      let overlay = document.getElementById('black-overlay');
      if (!overlay) {
        rightSection.classList.remove('w-[41%]');
        // rightSection.classList.remove('2xl:w-1/2');

        overlay = document.createElement('div');
        overlay.id = 'black-overlay';
        overlay.className = 'fixed inset-0 bg-white bg-opacity-70 transition-opacity duration-500 ease-in-out opacity-0';
        document.body.appendChild(overlay);
  
        // Add click event to close on overlay click
        overlay.addEventListener('click', () => {
          // Shrink right section back
          rightSection.classList.remove('w-[80%]');
          rightSection.classList.add('w-[41%]');
          rightSection.classList.add('2xl:w-1/2');
          
          rightSection.style.opacity = '1';
          
  
          // Fade out overlay
          overlay.classList.add('opacity-0');
  
          // Wait for the transition to end before removing
          setTimeout(() => {
            
            overlay.remove();
            rightSection.innerHTML = "";
            rightSection.style.backgroundImage = `url(${currentExhibitionImage})`;
            rightSection.style.backgroundSize = 'cover'
            rightSection.style.backgroundPosition = 'center'
            rightSection.classList.add('w-[41%]');
          }, 500);
        });
      }
  
      // Show and animate overlay
      requestAnimationFrame(() => {
        overlay.classList.remove('opacity-0');
      });
  
      // Add Tailwind transitions for right section
      rightSection.classList.add('transition-all', 'duration-500', 'ease-in-out');
      rightSection.innerHTML = '';  // Clear the container first
      const root = createRoot(rightSection);
      root.render(React.createElement(myEvents[index]));
      rightSection.style.opacity = '0.8';
  
      // Start smaller
      rightSection.classList.remove('w-[80%]');
      rightSection.classList.remove('2xl:w-1/2'); // Removing 2xl:w-1/2 to prevent conflict
      rightSection.classList.add('w-[20%]');
  
      // Animate to larger width
      setTimeout(() => {
        rightSection.classList.remove('w-[20%]');
        rightSection.classList.add('w-[80%]');
        rightSection.style.opacity = '1';
      }, 50);
    }
  };   

  // Add the current exhibition image
  const currentExhibitionImage = '5.jpeg'; // This should be your current exhibition image

  // Filter Options
  const filterOptions = {
    type: [
      { label: 'Show everything', value: 'all' },
      { label: 'Exhibitions', value: 'exhibitions' },
      { label: 'Films', value: 'films' },
      { label: 'Talks', value: 'talks' },
      { label: 'Events', value: 'events' },
      { label: 'Education', value: 'education' }
    ],
    time: [
      { label: 'for anytime', value: 'all' },
      { label: 'Today', value: 'today' },
      { label: 'Tomorrow', value: 'tomorrow' },
      { label: 'This week', value: 'week' },
      { label: 'This weekend', value: 'weekend' },
      { label: 'Next week', value: 'next-week' },
      { label: 'This month', value: 'month' }
    ],
    language: [
      { label: 'in all languages', value: 'all' },
      { label: 'English', value: 'en' },
      { label: 'Dutch', value: 'nl' },
      { label: 'No dialogue', value: 'none' }
    ]
  };

  const handleFilterSelect = (type, option) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: option.label
    }));
    setOpenDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  return (
   
    <div className=" ">
       
      {/* Current Exhibition Section */}
      <section 
  className="mb-28 mt-16 pl-8"
  onMouseEnter={() => handleImageChange(currentExhibitionImage)}
>
  <p className="text-xs uppercase tracking-wide mb-4">CUBE 2024</p>
  <p className="text-sm text-gray-500 mb-3">1 JAN 2025 — 31 DEC 2025</p>
  <h1 
    onClick={() => handleCalendar()} 
    className="text-5xl mb-3 font-normal cursor-pointer  transition-opacity"
  >
    Event Calender
  </h1>
  <p className="text-l text-gray-600">Events for every startup</p>
</section>


      {/* Films & Events Section */}
      <section>
        <h2 className="text-xs uppercase tracking-wide pl-8 mb-4">Events,talks&bootcamps</h2>
        
        {/* Sticky Filter Bar */}
        <div className="sticky pl-8 top-0 z-100 bg-white py-4 -mx-8">
          <div className="flex items-center justify-between shadow-sm py-4 px-6 rounded-lg border border-gray-100 mx-8">
            <div className="flex items-center space-x-12">
              <FilterDropdown
                title={activeFilters.type}
                options={filterOptions.type}
                onSelect={(option) => handleFilterSelect('type', option)}
                isOpen={openDropdown === 'type'}
                onToggle={() => toggleDropdown('type')}
              />

              <FilterDropdown
                title={activeFilters.time}
                options={filterOptions.time}
                onSelect={(option) => handleFilterSelect('time', option)}
                isOpen={openDropdown === 'time'}
                onToggle={() => toggleDropdown('time')}
              />

              <FilterDropdown
                title={activeFilters.language}
                options={filterOptions.language}
                onSelect={(option) => handleFilterSelect('language', option)}
                isOpen={openDropdown === 'language'}
                onToggle={() => toggleDropdown('language')}
              />
            </div>
           

            <div className="flex items-center gap-6">
              <button 
                onClick={() => setSortBy('date')}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                  sortBy === 'date' ? 'bg-black text-white' : 'hover:bg-gray-100'
                }`}
              >
                Date
              </button>
             
            </div>
          </div>
        </div>

        {/* Close dropdown when clicking outside */}
        {openDropdown && (
          <div 
            className="fixed inset-0 z-20"
            onClick={() => setOpenDropdown(null)}
          />
        )}

        {/* Events List */}
        <div className="mt-4">
          <h3 className="text-4xl pl-8 mb-4">National Startup Day</h3>
          <div className="space-y-10">
            {events.map((event, index) => (
              <div
                key={index}
                style={{borderRadius:"4px"}}
                className="group cursor-pointer px-2 pl-8 py-3 hover:bg-gray-100"
                onClick={() => handleImageOnClick(event.image,index)}
                onMouseEnter={() => handleImageChange(event.image)}
              >
               <b> <p className=" text-lg mb-2">{event.time}</p></b>
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-2xl font-medium group-hover:opacity-70 transition-opacity">
                    {event.title}
                  </h4>
                  {event.tag && (
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">
                      {event.tag}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 whitespace-nowrap overflow-hidden text-ellipsis pr-8">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;