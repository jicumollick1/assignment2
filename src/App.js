import logo from './logo.svg';
import './App.css';

import Cart from './components/cart/Cart';
import Products from './components/products/products';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div class="bg-gray-50 h-full md:h-screen">
      <div class="grid place-items-center">
                <h1
                    class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4"
                >
                    Shopping Cart
                </h1>
            </div>

            <div class="grid grid-cols-12 gap-6">
                <Products></Products>
                <Cart></Cart>
               
            </div>


    </div>
    </Provider>
  );
}

export default App;
