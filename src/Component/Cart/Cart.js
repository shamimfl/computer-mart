import React from 'react';
import DisplayCart from '../DisplayCart/DisplayCart';
import './Cart.css'

const Cart = (props) => {
    const {Cart,setCart} = props
        
    const randomItemHandlar=()=>{ 
        const randomNum = Math.floor(Math.random()*Cart.length)
        const remaning = Cart.filter(item=> Cart.indexOf(item) === randomNum)
        setCart([...remaning])
    }
    const clearItemHandlar =()=>{
        setCart([...''])
    }

    return (
        <div className='cart'>
            <h3 className='text-center'>Selected Items:{Cart.length}</h3>
            {
                Cart?.map(product => <DisplayCart key={product.id} product ={product}></DisplayCart>)
            }

          <button onClick={randomItemHandlar} className='btn btn-dark text-light p-2 m-2 w-100'>Choose one</button>
          <button  onClick={clearItemHandlar} className='btn btn-danger text-light p-2 m-2 w-100'>Clear</button>
        </div>
    );
};

export default Cart;