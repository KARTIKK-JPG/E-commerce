import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
    

}

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727609082/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Sep/30092024/Desktop/HP_Rotating_Oneplus_30Sep2024_hbscsr.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727673726/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Sept/30092024/HP_Rotating_TV_30Sep2024_oi5yiv.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727609081/Croma%20Assets/CMS/Homepage%20Banners/HP%20Rotating/2024/Sep/30092024/Desktop/HP_Rotating_Printers_30Sep2024_zut1ee.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727673724/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Sept/30092024/HP_Rotating_SonyHP_30Sep2024_j2ahzc.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1727673714/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/Sept/30092024/HP_Rotating_WM_30Sep2024_nhf5ao.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    }

]
    

export const Crouselll = () => {
  return (
    <>
        <div className='w-100 h-100  bg-black '>
             <Slider {...settings}>
                  {products.map((item,index)=>
                  <>
                    <div className=''>
                         <img src={item.imageSrc} alt="" className='w-100 h-100 rounded-md shadow-md-lg md:pb-20 pb-8' />
                    </div>
                  </>
                  )}
             </Slider>
        </div>
    </>
  )
}
