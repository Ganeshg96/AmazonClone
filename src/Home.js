import {React, useState} from 'react';
import './Home.css';
import Product from './Product';
import Filters from './Filters';

// Sample products array
const products = [
  {
    id: '12321341',
    title: 'The Lean Startup: How Constant Innovation creates Radically Successful Businesses Paperback',
    price: 29.99,
    rating: 5,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg',
    category: 'Books'
  },
  {
    id: '49538094',
    title: 'Philips Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater',
    price: 239.0,
    rating: 4,
    image: 'https://m.media-amazon.com/images/I/71mL2bdyRdL._SX522_.jpg',
    category: 'Home Appliances'
  },
  {
    id: '96345217',
    title: 'Daily Grocery Essentials - Pack of 5',
    price: 29.99,
    rating: 4,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS0QHWWvH1d2_dXAjYMpuBeTRWY5sNx8berHG2r_QCnfr8h07eBk-uFqwYQvTtxDcS_tdeqGT6ED-0BNhYkT1XrHoY8r4RDL6tNTag80R10sQQ07N5CgvNtfA&usqp=CAE',
    category: 'Grocery'
  },
  {
    id: '23445930',
    title: 'Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric',
    price: 98.99,
    rating: 5,
    image: 'https://www.mompshop.com/cdn/shop/products/61u48FEs0rL._AC_SL1000.jpg?v=1662025668',
    category: 'Home Appliances'
  },
  {
    id: '3254354345',
    title: 'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
    price: 598.99,
    rating: 4,
    image: 'https://m.media-amazon.com/images/I/81oFAZ9N6bL._AC_UF1000,1000_QL80_.jpg',
    category: 'Electronics'
  },
  {
    id: '56784321',
    title: 'Men’s Casual Slim Fit Shirt',
    price: 45.0,
    rating: 4,
    image: 'https://m.media-amazon.com/images/I/614rBcnt8yL._AC_UY1100_.jpg',
    category: 'Men'
  },
  {
    id: '78945213',
    title: 'iPhone 14 Pro Max (128GB) - Space Black',
    price: 1199.99,
    rating: 5,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPqUISl2rctaMK3WSpaJmf_WUpqxmmIAasMT932gS-1WeAT8SgwpVExx3zos-a3EQiDlfj4oIh7M6KvUkKeCkkSLE9FUDJkYvss3_xLpqsU4YDu5mbybx0MEo&usqp=CAE',
    category: 'Electronics'
  },
  {
    id: '34782342',
    title: 'Modern Home Decor - Set of 3',
    price: 75.5,
    rating: 4,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRNOh7_8lRDJIEG0AasHbHT9drdmz8gr3AodzpFol-Z9d1v1h4mqQuDdhbn1U_W8U2thx96N_rHJtoil9ctAI3w5p5U7fN9tGzHa87iFiAj04HBPmWSRJyz2Q&usqp=CAE',
    category: 'Home Decor'
  },
  {
    id: '90827345',
    title: 'Samsung Galaxy S23 Ultra (256GB) - Phantom Black',
    price: 1299.99,
    rating: 5,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSSdPEi02AumLU3g4iTdwM7EJgDhByosoBBcpuormlzNCsUyXwad_7lJ9Q2oPWOm0aCvANYAcTZGIthgm4QvNvnG0kmIo9dPC_-e7gI4GE6DipjZVdu6CK_&usqp=CAE',
    category: 'Electronics'
  },
  {
    id: '12845321',
    title: 'Footwear - Running Shoes for Men',
    price: 85.0,
    rating: 4,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQeYKLtZSOL2VzW1XsQ_X-r47aZaq-bqudAcOEomSt5CyszmB_9c05xTw3BKDBFS7QRebRuBtS0ZBkWkBRVGbdpvjY6LYV0eVnM-tqvyPOMu2RdfVNzECCZbw&usqp=CAE',
    category: 'Footwear'
  },
  {
    id: '4903850',
    title: "Noise ColorFit Pulse Grand Smart Watch with 1.69'(4.29cm) HD Display, 60 Sports Modes, 150 Watch Faces, Heart Rate Monitoring & IP68 Waterproof (Electric Blue)",
    price: 199.99,
    rating: 3,
    image: 'https://m.media-amazon.com/images/I/61C8hl-ZMfL._SX679_.jpg',
    category: 'Electronics'
  },
  {
    id: '67845123',
    title: 'Women’s Makeup Kit - Full Set',
    price: 120.0,
    rating: 5,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR6nWiN5Aw39Iy4gBZPTo7tCVqabaFNf-G_Ze8vkmlyMxgBJobaXSFzgCK7bi48drxkmVHQfh0Ahsfh5L-D7wWKbT9vHMX37cOazS5HycVt_Qo4xKGNxuFDdQ&usqp=CAE',
    category: 'Women'
  },
  {
    id: '90829332',
    title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide",
    price: 1094.99,
    rating: 4,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQlnbXQguPT7scnnOTl0ZBKcO1vnPsx1PccBoqgP_pBmcBKFnaLFWs2j4qLlIE37IPK0nzqROfaTwPPeu-pP9qkfKY_tOiu293l5F9K7U6W1mkVTFn3RQxQHA&usqp=CAE',
    category: 'Electronics'
  }
];

function Home({ searchTerm }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || product.category === selectedCategory)
  );

  // Helper function to chunk products into rows
  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  // Chunk the filtered products into rows with 4 products each
  const rows = chunkArray(filteredProducts, 4);

  return (
    <div className='home'>
      {/* Filters Component */}
      <Filters selectedCategory={selectedCategory} onSelectCategory={handleSelectCategory} />
      
      <div className='home__container'>
        <a href="https://www.amazon.com/amazonprime" target="_blank" rel="noopener noreferrer">
          <img 
            className='home__image'
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="Amazon Prime"
          />
        </a>
        {filteredProducts.length > 0 ? (
          rows.map((row, rowIndex) => (
            <div key={rowIndex} className='home__row'>
              {row.map(product => (
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                />
              ))}
            </div>
          ))
        ) : (
          <div className="home__noProducts">Sorry, the product is not available at the moment.</div>
        )}
      </div>
    </div>
  );
}

export default Home;
