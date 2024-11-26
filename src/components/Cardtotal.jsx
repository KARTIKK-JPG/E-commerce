import React, { useContext } from 'react';
import { Store } from '../pages/StoreProvider';
import { Coupen } from './Coupen';

export const Cardtotal = () => {
  const { discount, ToastContainer, subTotal, shippingFee, coupenDiscount, total } = useContext(Store);

  return (
    <div className='max-w-3xl mx-auto p-5 sm:p-10 bg-gray-300 rounded-lg md:pb-12 pb-16'>
      <div className="w-full">
        <div className="text-xl sm:text-2xl font-bold">
          <h2>CART TOTAL</h2>
        </div>

        <div className="flex flex-col gap-2 mt-5 text-sm sm:text-md">
          <div className="flex justify-between">
            <p className="font-semibold">SubTotal</p>
            <p className="font-semibold text-gray-500">₹ {subTotal}.00</p>
          </div>
          {discount > 0 && (
            <>
              <hr className='border-b border-black' />
              <div className="flex justify-between">
                <p className="font-semibold">Coupon Discount ({discount}%)</p>
                <p className="font-semibold text-gray-500">₹ {coupenDiscount.toFixed(2)}</p>
              </div>
            </>
          )}
          <hr className='border-b border-black' />
          <div className="flex justify-between">
            <p className="font-semibold">Shipping Fee</p>
            <p className="font-semibold text-green-700">₹ {shippingFee}.00</p>
          </div>
          <hr className='border-b border-black' />
          <div className="flex justify-between mt-2">
            <p className="font-semibold">Total</p>
            <p className="text-red-700 font-semibold">₹ {total.toFixed(2)}.00</p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
