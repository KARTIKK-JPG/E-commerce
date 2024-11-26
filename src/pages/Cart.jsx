import React, { useContext, useEffect, useState } from 'react';
import { Store } from './StoreProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Cardtotal } from '../components/Cardtotal';
import { Cardandcoupen } from '../components/Cardandcoupen';

export const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      navigate('/address');
    } else {
      navigate('/login', { state: { from: location } });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { products, cartItem, updateQuantity } = useContext(Store);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = Object.entries(cartItem)
      .filter(([id, quantity]) => quantity > 0)
      .map(([id, quantity]) => ({
        id: Number(id),
        quantity,
      }));
    setCartData(tempData);
  }, [cartItem]);

  return cartData.length > 0 ? (
    <>
      <hr className='border-slate-400 md:mt-12 mt-0' />
      <div className='bg-black pb-20 py-16'>
        <div className='mx-3 md:mx-80 pb-10 hidden md:block'>
          <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden font-bold text-2xl">
                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Cart
              </span>
            </li>
            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                Checkout
              </span>
            </li>
            <li className="flex shrink-0 items-center">
              <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              Order Placed
            </li>
          </ol>
        </div>

        <div className="max-w-5xl mx-auto p-5 md:p-10  bg-gray-300 rounded">
          {cartData.map((item) => {
            const productData = products.find((product) => product.id === item.id);
            return (
              <div key={item.id} className="border-b border-black pb-6 mb-4">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <img src={productData.imageSrc} alt={productData.name} className="w-16 h-16 rounded-md mr-4" />
                    <div>
                      <h2 className="md:text-lg text-md font-medium">{productData.name}</h2>
                      <p className="text-gray-600">₹ {productData.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={item.quantity}
                      className="w-16 border rounded-md text-center mx-auto"
                      min={1}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                    <button className="ml-4 text-red-500 hover:text-red-700" onClick={() => updateQuantity(item.id, 0)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <Cardandcoupen />
          <div className="flex justify-center mt-2">
            <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200 mt-5" onClick={handleNavigation}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="text-center my-64">
      <h2 className="text-xl font-semibold">Your cart is currently empty.</h2>
      <p className="text-gray-500">Start adding products to see them here!</p>
    </div>
  );
};
