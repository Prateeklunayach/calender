import { useState, useEffect } from 'react';
import { FiX, FiSearch } from 'react-icons/fi';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Mock search results - replace with actual data
  const mockResults = [
    { type: 'EXHIBITION', title: 'Underground', date: '13 OCT 2024 — 5 JAN 2025' },
    { type: 'FILM', title: 'Where Dragons Live', date: '14 DEC 2024' },
    { type: 'TALK', title: 'American Avant-Garde Discussion', date: '20 DEC 2024' },
    { type: 'EVENT', title: 'Dahomey', date: '15 DEC 2024' }
  ];

  useEffect(() => {
    if (searchQuery) {
      const filtered = mockResults.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <div 
      className={`fixed inset-0 bg-white z-[70] transform transition-all duration-500 ${
        isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}
    >
      <div className="container mx-auto px-8 py-12">
        <div className="flex justify-between items-center border-b border-gray-200 pb-6">
          <div className="flex items-center gap-4 w-full">
            <FiSearch className="w-8 h-8 text-gray-400" />
            <input
              type="text"
              placeholder="Search exhibitions, events, films..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-4xl font-light w-full bg-transparent border-none outline-none placeholder:text-gray-300"
              autoFocus
            />
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <FiX className="w-8 h-8" />
          </button>
        </div>

        <div className="mt-12">
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 gap-8">
              {searchResults.map((result, index) => (
                <div 
                  key={index}
                  className="p-6 hover:bg-gray-50 cursor-pointer transition-colors rounded-lg"
                >
                  <p className="text-sm text-gray-500 mb-2">{result.type}</p>
                  <h3 className="text-2xl mb-2">{result.title}</h3>
                  <p className="text-sm text-gray-600">{result.date}</p>
                </div>
              ))}
            </div>
          ) : searchQuery && (
            <div className="text-center text-gray-500 mt-12">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;