
import cartReducer from "./cart/cartReducer";
import productReducer from "./products/productReducer";
import { combineReducers } from "redux";





const rootReducer = combineReducers({
    product : productReducer ,
    cart : cartReducer,
});

export default rootReducer;