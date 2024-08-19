import React from 'react';
import './Filters.css';

function Filters({ selectedCategory, onSelectCategory }) {
  const categories = [
    'All',
    'Men',
    'Women',
    'Kids',
    'Books',
    'Jewellery',
    'Footwear',
    'Home Appliances',
    'Electronics',
    'Grocery',
    'Home Decor'
  ];

  return (
    <div className="filters">
      {categories.map(category => (
        <button
          key={category}
          className={`filters__button ${selectedCategory === category ? 'filters__button--active' : ''}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Filters;
