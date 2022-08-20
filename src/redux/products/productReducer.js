
import { addProduct, addItem } from "./actions";

const parentDiv = document.getElementById('parentDiv');

let html = ` `;



const initialProducts = {

    products: [
    {
        id: 1,
        name: 'Asus Vivobook X515MA',
        price: 35500,
        quantity: 0 ,
        stock: 20,
        inserted: false
    },
    {
        id: 2,
        name: 'Dell E1916HV 18.5 Inch',
        price: 9300,
        quantity: 0,
        stock: 35,
        inserted: false
    },
    {
        id: 3,
        name: 'Canon Eos 4000D 18MP',
        price: 36500,
        quantity: 0 ,
        stock: 72,
        inserted: false
    }]
};


const productReducer = (state = initialProducts, action) => {

    const updatedState = {...state};

    console.log(action.payload);

    if(action.type === 1){

        updatedState.products[0].stock -= 1;
        updatedState.products[0].quantity += 1;
        updatedState.products[0].inserted = true;
       

    }else if (action.type === 2){
        updatedState.products[1].stock -= 1;
        updatedState.products[1].quantity += 1;

        updatedState.products[1].inserted = true;



    }else if(action.type === 3) {

        updatedState.products[2].stock -= 1;
        updatedState.products[2].quantity += 1;

        updatedState.products[2].inserted = true;

    }

    // console.log(parentDiv.innerHTML);

    



return updatedState ;
  
}

export default productReducer;




