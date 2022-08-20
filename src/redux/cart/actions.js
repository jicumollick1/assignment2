
import {ADD_TO_CART,INCREMENT_CART,DECREMENT_CART} from "../actionTypes";



export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload : product
        
    }
 
};



export const incrementCart=(id)=>{
   
    return {
        type: INCREMENT_CART,
        payload : id
        
    }

}

export const decrementCart=(id)=>{
    return {
        type: DECREMENT_CART,
        payload : id
        
    }
}
