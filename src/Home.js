import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img 
                className='home__image'
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg "
                alt=""
            />
            <div className='home__row'>
                <Product 
                    id='12321341'
                    title='The Lean Startup: How Constant Innovation creates Radically Successful Businesses Paperback' 
                    price={29.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'    
                />
                <Product 
                    id='49538094'
                    title='Plilips Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater' 
                    price={239.0}
                    rating={4} 
                    image='https://m.media-amazon.com/images/I/71mL2bdyRdL._SX522_.jpg' 
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='4903850'
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/817CJPmX5wL._SX679_.jpg' 
                />
                <Product 
                    id='23445930'
                    title='Amazon Echo (3rd generation) | Smart Speaker with Alexa, Charcoal Fabric' 
                    price={98.99} 
                    rating={5}
                    image='https://www.mompshop.com/cdn/shop/products/61u48FEs0rL._AC_SL1000.jpg?v=1662025668' 
                />
                <Product 
                    id='3254354345'
                    title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' 
                    price={598.99} 
                    rating={4}
                    image='https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSZyWmcf5XjWjA5BuOQJlljaJkWgQB2CQs1l9utLH-KgTly66TNIraCWz4K8rusjAj-N4t4S0mUfqOUd40GOZu3ShxQw5rrKoLUGLS-2_D8znUWy8Bd4WsUUak1'     
                />
            </div>
            <div className='home__row'>
                <Product 
                    id='90829332'
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide"
                    price={1094.99} 
                    rating={4}
                    image='https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQgQaRPrsw4DpNQkr4k3pcpvDvCBP0Ot4u425jE6gbGcwbUxXbxJ2qH_xrPIqBLCKU3Pp6pOfw9zhK9fK6sXGbuXGJ7C2Vp-M5B3j3KVSdQZZv9zfMXh7q-xMAn'
                />
            </div>
        </div>
    </div>
  )
}

export default Home
