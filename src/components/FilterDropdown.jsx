import { useState } from 'react';

const FilterDropdown = ({ title, options, onSelect, isOpen, onToggle }) => {
  return (
    <div className="relative">
      <button 
        onClick={onToggle}
        className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
      >
        {title}
        <svg 
          className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5" stroke="currentColor" fill="none"/>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[200px] z-50">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelect(option)}
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;