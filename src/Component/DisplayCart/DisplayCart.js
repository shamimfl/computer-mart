import React from 'react';
import './DisplayCart.css'
const DisplayCart = (props) => {
    const {name, img} =props.product
    return (
        <div>
            <h4 className='cart-s'>
                 <img className='cart-img' width={50} src={img} alt="" />
                 {name}</h4>
        </div>
    );
};

export default DisplayCart;