import React from 'react'
import "./checkout.css"
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout(){
 const [{basket,user},dispatch]=useStateValue();  
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img className="checkout_ad" src="https://d2407na1z3fc0t.cloudfront.net/Slider/banner_5fecb997f3c8a?format=webp" alt=""/>
                <div>
                    <h3>Hello,{user?.email}</h3>
                    <h2 className="checkout_title">
                        Your shopping Basket
                    </h2>
                    <div className='checkout_right'>
                <Subtotal/>
                <h2>The subtotal with go here</h2>
            </div>
                 {basket.map(item=>(
                     <CheckoutProduct
                     id={item.id}
                     tittle={item.tittle}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}/>

                 ))}

                </div>
            </div>
            <div className='checkout_rights'>
                <Subtotal/>
                <h2>The subtotal with go here</h2>
            </div>
        </div>
    )
}

export default Checkout;
