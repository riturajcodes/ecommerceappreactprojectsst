import React from 'react'

const Filters = ({ categories, selectedCategory, onSelectCategory, priceRange, onPriceChange }) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-bold text-sm mb-2">Category</h3>
        <ul className="text-sm space-y-1">
          <li 
            className={`cursor-pointer hover:text-orange-600 ${!selectedCategory ? 'font-bold' : ''}`}
            onClick={() => onSelectCategory(null)}
          >
            All
          </li>
          {categories.map((cat) => (
            <li 
              key={cat}
              className={`cursor-pointer hover:text-orange-600 capitalize ${selectedCategory === cat ? 'font-bold' : ''}`}
              onClick={() => onSelectCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-sm mb-2">Price</h3>
        <select 
          value={priceRange}
          onChange={(e) => onPriceChange(e.target.value)}
          className="w-full text-sm border rounded p-1 outline-none"
        >
          <option value="all">Any Price</option>
          <option value="0-50">$0 to $50</option>
          <option value="50-100">$50 to $100</option>
          <option value="100-500">$100 to $500</option>
          <option value="500">Over $500</option>
        </select>
      </div>
    </div>
  )
}

export default Filters