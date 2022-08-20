import {ADD_TO_CART,INCREMENT_CART,DECREMENT_CART} from "../actionTypes"

const initialState = {
    carts:[
       
    ]
};


const cartReducer = (state = initialState, action) => {
    const updatedState= {...state};

    switch(action.type){
        case ADD_TO_CART: 
        
        const itemExit= state.carts.find(item=> item.id == action.payload.id);

        if(!itemExit){
            updatedState.carts.push({
                id: action.payload.id,
                name: action.payload.name,
                price: action.payload.price,
                cartCount: 1
            })
        }else{
            updatedState.carts= updatedState.carts.map(item=>{
                if(item.id === action.payload.id){
                    item.cartCount +=1;
                }
                return item;
            }) 
        }
        return {...state,...updatedState}

        case INCREMENT_CART:
            
        updatedState.carts= updatedState.carts.map(item=>{
            if(item.id == action.payload){
                item.cartCount+=1;
            }
            return item;
        })
        return {...state,...updatedState}

        case DECREMENT_CART:
            updatedState.carts= updatedState.carts.map(item=>{
                if(item.id == action.payload){
                    item.cartCount -=1;
                }
                return item;
            })

        return {...state,...updatedState}
        default: 
            return state;
    }
}

export default cartReducer;




