import React from 'react';
import './Subtotal.css';
import { NumericFormat } from 'react-number-format'; // Use named import
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

function Subtotal() {
    const navigate = useNavigate(); // Replace useHistory with useNavigate
    const [{ basket }] = useStateValue();
    return (
        <div className='subtotal'>
            <NumericFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):<strong> {value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button> {/* Use navigate instead of history.push */}
        </div>
    );
}

export default Subtotal;
