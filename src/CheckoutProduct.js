import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
    // Removed `basket` as it's not being used in this component
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    };

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='' />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span key={i} role="img" aria-label="star">⭐</span>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
