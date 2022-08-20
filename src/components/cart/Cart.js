import React from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import CartItem from './CartItem';
import {incrementCart,decrementCart} from "../../redux/cart/actions";
import {incrementStock, decrementStock} from "../../redux/products/actions";


const Cart = () => {
    const state = useSelector((state)=> state.cart);
    const dispatch = useDispatch();

    const totalItem= state.carts.reduce((prev,curr)=> prev+curr.cartCount,0);

    const totalPrice=  state.carts.reduce((prev,curr)=> prev+curr.cartCount * curr.price,0);

    const updateCart=(type,id)=>{
    if(type == "increment"){
        dispatch(incrementCart(id));
        dispatch(decrementStock(id));
    }else{
        dispatch(decrementCart(id));
        dispatch(incrementStock(id));
    }
    }

    return (
        <div
        className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"
    >
        <div
            className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4" id='parentDiv'
        >

            {
                state && state.carts.length>0 ? state.carts.map((item)=> (
                   <div key={item.id}>
                        <CartItem id={item.id} name={item.name} quantity={item.cartCount} updateCart={updateCart}></CartItem>
                       </div>
                )): "Cart is Empty, Add Something"
            }
           
        </div>
        <div
            className="bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4"
        >
             <div
                className="flex justify-center items-center text-center"
            >
                <div className="text-xl font-semibold">
                    <p>Total Item</p>
                    <p className="text-5xl">{totalItem}</p>
                </div>
            </div>
            <div
                className="flex justify-center items-center text-center"
            >
                <div className="text-xl font-semibold">
                    <p>Total Price</p>
                    <p className="text-5xl">{totalPrice}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Cart;