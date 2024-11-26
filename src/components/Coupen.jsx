import React, { useContext, useState } from 'react';
import { Store } from '../pages/StoreProvider';

export const Coupen = () => {

    const {handleApply,handleChange,couponCode} = useContext(Store)
  return (
   <>
    <div className=' md:p-2 p-1 flex justify-end border border-black'>
            <div className='mx-auto'>
              <h2 className='pt-2 pb-2 font-semibold px-5'>Applied here if you have any coupon code</h2>
              <input type="text" value={couponCode} onChange={handleChange} placeholder='Enter Coupon Code' className='border md:mx-0 mx-4 py-2 mb-3 md:w-60 w-44 rounded ' />
              <button className='bg-green-800 text-white rounded md:p-2 px-1 py-2' onClick={handleApply}>Apply Coupon</button>
            </div>
          </div>
   </>
  )
}
