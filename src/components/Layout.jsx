import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {

  // Set default exhibition image
  useEffect(() => {
    const rightSection = document.getElementById('right-image-section');
    if (rightSection) {
      rightSection.style.backgroundImage = `url('/images/underground-exhibition.wepb')`; // Replace with your actual image path
      rightSection.style.opacity = '1';
    }
  }, []);

  return (
    <div className="flex min-h-screen relative">
      {/* Left Content Area */}
      <div className="2xl:w-1/2 w-[60%] min-h-screen relative">
        <header className="fixed top-0 left-0 2xl:w-1/2 w-[60%] flex justify-between items-center px-8 py-6 bg-white z-100">
          <div>
            <img style={{zIndex:"999"}} src="logo.webp" alt="Eye Logo" className="w-20 md:w-24 lg:w-28 ml-2 pt-2" />
          </div>
          <button className="hover:opacity-70 transition-opacity text-sm tracking-wide pt-1">
           <b>
            <u>Visit @ D8-TBI</u>
            </b>
             </button>

        </header>

        <main className="pt-24 px-10 pl-2 w-full">
          {React.cloneElement(children)}
        </main>
      </div>

      {/* Right Section */}
      <div id="main-image-section" style={{zIndex:"999", backgroundImage:"url('5.jpeg')", backgroundPosition:"center",backgroundSize:"cover"}} className="fixed right-0 top-0 2xl:w-1/2 w-[41%] h-screen">
       
    
      </div>
    </div>
  );
};

export default Layout;