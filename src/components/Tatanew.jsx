import React from 'react'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713377573/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Testing/Hybrid%20Homepage/HP_Neubanner_18April24.png_h4axzq.png?tr=w-1024',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  }
]

export const Tatanew = () => {
  return (
    <div className='   bg-black'>
      <h2 className="content-center text-center text-md md:text-3xl font-bold tracking-tight text-white md:pb-7 pb-4">Experience Gadgets Plus On Tata Neu!</h2>

      {products.map((item, index) =>
        <>
          <div className=''>
            <img src={item.imageSrc} alt="" className=' w-100 h-100 shadow-md-lg mx-auto  bg-black  ' />
          </div>
          <br />
          <br />


        </>
      )}

    </div>
  )
}