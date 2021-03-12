import React from 'react';
import {useCart, useDispatchCart} from '../Cart'

const CartItem = (product, index) => {
    console.log(product.product.name, index.index);
    return (
        <article className="my-4">
            <div className="">
                <div className="dtc w3">
                <img src={product.product.image} style={{width:"50%"}} className="img-thumbnail" alt="preview"/>
                </div>
                <div className="dtc v-top pl2">
                <h3 className="">{product.product.name}</h3>
                <h5 className="">{product.product.brand}</h5>
                <dl className="d-flex mx-2">
                    <dt className="">Price:</dt>
                    <dd className="ml-2">
                    {product.product.price.toLocaleString("en", {
                        style: "currency",
                        currency: "USD"
                    })} 
                    </dd>
                </dl>
                <button>Remove from cart</button>
                </div>
            </div>
    </article>
     );
}

export default function Store(){
    const items = useCart();
    const dispatch = useDispatchCart();
    const totalPrice = items.reduce((total, b) => total + b.price, 0);

    const remove = (index) => {
        dispatch({ type: "REMOVE", index });
      };

    if(items.length === 0){
        return(
            <main className="container text-center mt-4">
                <h1 className="Empty-msg">Cart is empty</h1>
            </main>
        );
    }
    return (
        <main className="container">
            <h3 className="my-3">
                Total price: {""}
                {totalPrice.toLocaleString("en", {
                    style: "currency",
                    currency: "USD"
                })}
            </h3>
            <div className="d-flex">
            {items.map((item,index) => (
                <CartItem
                    remove={remove}
                    key={index}
                    product={item}
                    index={index}
                />
            ))}
            </div>
            
        </main>
    );
}
 