import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './product.css'
const Product = (props) => {
    const {name, img, price} =props.product
    const {handleAddToCart} =props;
    return (
        <div className='all-product'>
            <img className='mx-auto photo'  src={img} alt="" />
            <h4>Name:{name}</h4>
            <h4>Price:${price}</h4>
            <button onClick={()=>handleAddToCart(props.product)}  className='btn w-100 color-btn'>Add To Cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;