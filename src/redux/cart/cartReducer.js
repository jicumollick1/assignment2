
import { addProduct } from "./actions";
import { useSelector } from "react-redux/es/exports";
import { store } from "../store";


const initialProducts = {};


const cartReducer = (state = initialProducts, action) => {

    switch(action.type){
        case addProduct: 
            return [{
                ...state,
                value: state.value + 1,
            }];

        default: 
            return state;
    }
}

export default cartReducer;




