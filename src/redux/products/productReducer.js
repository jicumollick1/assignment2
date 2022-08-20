
import {INCREMENT_STOCK,DECREMENT_STOCK} from "../actionTypes"

const initialProducts = {

    products: [
    {
        id: 1,
        name: 'Asus Vivobook X515MA',
        price: 35500,
        quantity: 0 ,
        stock: 20
    },
    {
        id: 2,
        name: 'Dell E1916HV 18.5 Inch',
        price: 9300,
        quantity: 0,
        stock: 35    
    },
    {
        id: 3,
        name: 'Canon Eos 4000D 18MP',
        price: 36500,
        quantity: 0 ,
        stock: 72
    }]
};


const productReducer = (state = initialProducts, action) => {

    const updatedState= {...state};

    switch(action.type){
        case INCREMENT_STOCK:
        updatedState.products= updatedState.products.map(item=>{
            if(item.id == action.payload){
                item.stock+=1;
            }
            return item;
        })
        return {...state,...updatedState}

        case DECREMENT_STOCK:
            updatedState.products= updatedState.products.map(item=>{
                if(item.id == action.payload){
                    item.stock -= 1;
                }
                return item;
            })

        return {...state,...updatedState}
        default: 
            return state;
    }
    
}

export default productReducer;

