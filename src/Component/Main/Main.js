import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Main.css'
import Cart from './../Cart/Cart';
const Main = () => {
    const [product , setProduct] = useState([])

    const [cart, setCart] =useState([])

    useEffect(()=>{
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data=> setProduct(data))
    }, [])



    const handleAddToCart =(product)=>{
       const newCart =[...cart, product]
       setCart(newCart)
    }

  
    return (
        <div className='all-container'>

            <div className='product-container'>
            {
                product.map(product=> <Product setCart={setCart} handleAddToCart={handleAddToCart} key={product.id} product ={product}></Product>)
            }
            </div>


            <div className='summary-container'>
                <Cart Cart={cart} setCart={setCart}></Cart>
            </div>
            
        </div>
    );
};

export default Main;