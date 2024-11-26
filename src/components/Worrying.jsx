import React from 'react';

const products = [
    {
        id: 1,
        imageSrc: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727701399/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Zipcare/30092024/HP_SP_ZipCare_30Sep2024_x0qif0.jpg?tr=w-1024',
        imageAlt: "Front of men's Basic Tee in black.",
    }
];

export const Worrying = () => {
  return (
    <div className='bg-black md:p-4 p-1'>
      <h2 className="text-center text-md md:text-3xl font-bold tracking-tight text-white pb-4 md:pb-7">
        No More Worrying About Your Appliances
      </h2>
      {products.map((item) => (
        <div className='mb-4'>
          <img 
            src={item.imageSrc} 
            alt={item.imageAlt} 
            className='w-100 h-auto shadow-md-lg mx-auto' 
          />
        </div>
      ))}
    </div>
  );
};
