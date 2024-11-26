import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 700,
    
    
    centerMode: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                
            }
            
        },
        {
            breakpoint: 1200,
            settings:{
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                
            }
        },
        {
            breakpoint: 800,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                
            }
        },
        {
            breakpoint: 400,
            settings:{
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                
            }
        }

    ]

};



const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/71IiZfBppNL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/71-fLbOw9eL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/61xCG0L3cSL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/41lCW7YiQAL._SY445_SX342_QL70_FMwebp_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/51UhwaQXCpL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/61iSV4o+X-L._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/61xCG0L3cSL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/61HZLDc2ykL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 9,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/614gbl-O98L._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    }
]


export const Accesories = () => {
    return (
        <div className="slider-container bg-black md:pt-0 pt-4">
        
            <div className='md:pb-10 pb-5'>
                <h2 className="content-center text-center text-md md:text-3xl font-bold tracking-tight text-white ">Mobile Accessories</h2>
            </div>
            
            <Slider {...settings}>
                {products.map((item, index) => {
                    return <a to={'collections'}><div>
                       
                        <div className="bg-white border border-gray-200 rounded-md shadow h-90 md:w-80 w-24  gap-0  ">

                            <img className="rounded-t-lg object-cover object-center " src={item.imageSrc} alt="" />

                        </div>
                       
                    </div></a>
                })}
            </Slider>
            <br/>
            
            
        </div>
       
    )
    
}
