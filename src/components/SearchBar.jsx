import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from '../hooks/useDebounce'
import { useProducts } from '../hooks/useProducts'

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { products } = useProducts();
  const debouncedQuery = useDebounce(query, 300);
  const navigate = useNavigate();
  const suggestionsRef = useRef(null);

  // Update suggestions when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim().length > 1) {
      const filtered = products
        .filter(p => p.title.toLowerCase().includes(debouncedQuery.toLowerCase()))
        .slice(0, 10); // Limit to top 10 results
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [debouncedQuery, products]);

  // Handle clicking outside of suggestions to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      setShowSuggestions(false);
      navigate(`/products?search=${query}`);
    }
  };

  return (
    <form 
      onSubmit={handleSearch}
      className="flex h-10 w-full rounded-md focus-within:ring-2 focus-within:ring-[#f3a847] relative"
    >
      <div className="flex-1 relative h-full bg-white first:rounded-l-md">
        <input 
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setShowSuggestions(true)}
          className="w-full h-full px-4 text-black outline-none rounded-l-md sm:rounded-l-none" 
          placeholder="Search Amazon Forest" 
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul 
            ref={suggestionsRef}
            className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-md shadow-lg z-50 max-h-60 overflow-y-auto"
          >
            {suggestions.map((item) => (
              <li 
                key={item.id}
                onClick={() => {
                  setQuery(item.title);
                  setShowSuggestions(false);
                  navigate(`/products?search=${item.title}`);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black text-sm border-b border-gray-100 last:border-none"
              >
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button 
        type="submit"
        className="bg-[#febd69] hover:bg-[#f3a847] p-2 flex items-center justify-center cursor-pointer transition-all border-none outline-none rounded-r-md"
      >
        <AiOutlineSearch className="text-black text-2xl" />
      </button>
    </form>
  )
}

export default SearchBar