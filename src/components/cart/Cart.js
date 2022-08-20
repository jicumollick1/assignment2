import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import CartItem from './CartItem';
const Cart = () => {

    const state = useSelector((state)=> state);

    // console.log(state.product.products);


    return (
        <div
        class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
    >
        <div
            class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4" id='parentDiv'
        >

            {
                state.product.products.map((item)=> {

                    console.log(item);

                    if(item.inserted === true){
                        return <>
                        <CartItem name={item.name} quantity={item.quantity}></CartItem>
                        </>
                    }

                })
            }
           
        </div>
        <div
            class="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
        >
             <div
                class="flex justify-center items-center text-center"
            >
                <div class="text-xl font-semibold">
                    <p>Total Item</p>
                    <p class="text-5xl">0</p>
                </div>
            </div>
            <div
                class="flex justify-center items-center text-center"
            >
                <div class="text-xl font-semibold">
                    <p>Total Price</p>
                    <p class="text-5xl">0</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cart;