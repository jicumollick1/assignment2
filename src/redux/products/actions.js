
// action type 
export const addItem = 'products/addProduct';

export const asus = 'products/asus';
export const dell = 'products/dell';
export const canon = 'products/canon';


// action creator 

export const addProduct = (value) => {

    if(value === 1){

        return {
            type: value,
            payload : {
                id: 1,
                name: 'Asus Vivobook X515MA',
                price: 35500,
                quantity: 0 ,
                stock: 20,
                
            
    
            }
            
        }

    }else if(value === 2){
        return {
            type: value,
            payload : {
                id: 2,
                name: 'Dell E1916HV 18.5 Inch',
                price: 9300,
                quantity: 0,
                stock: 35,
                
            
    
            }
            
        }

    }else {

        return {
            type: value,
            payload : {
                id: 3,
                name: 'Canon Eos 4000D 18MP',
                price: 36500,
                quantity: 0 ,
                stock: 72,
                
            
    
            }
            
        }

    }

 
};



