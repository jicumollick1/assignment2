import {ADD_TO_CART,INCREMENT_STOCK,DECREMENT_STOCK} from "../actionTypes"

export const incrementStock = (id) => {
    return {
        type: INCREMENT_STOCK,
        payload : id
        
    }
 
};

export const decrementStock = (id) => {
    return {
        type: DECREMENT_STOCK,
        payload : id
        
    }
 
};
