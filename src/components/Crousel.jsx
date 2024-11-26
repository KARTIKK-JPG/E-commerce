import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 800,
    cssEase: "linear",
    className: "center",
    centerMode: true,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 3,
                infinite: true,
                
            }
            
        },
        {
            breakpoint: 1200,
            settings:{
                slidesToShow: 6,
                slidesToScroll: 3,
                infinite: true,
                
            }
        },
        {
            breakpoint: 800,
            settings:{
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                
            }
        },
        {
            breakpoint: 600,
            settings:{
                slidesToShow: 3,
                slidesToScroll: 2,
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
        imageSrc: 'https://m.media-amazon.com/images/I/611BCw7ulaL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/7163G-X21WL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/51vLVJBQV7L._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/815LfTuu+vL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 5,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/61aE+-zFTcL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/71r4P+34FuL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/51Cfm2z7bDL._SL1000_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/61lLjrvDEkL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 9,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/91z5KuonXrL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 10,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/714L9-X8dPL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 11,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/81Y0L0r8IJL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 12,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/71QUv8DcRBL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 13,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/81dT7CUY6GL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 14,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/61Yu-OA7u2L._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 15,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/71r4P+34FuL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 16,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://m.media-amazon.com/images/I/815QEibJCwL._SL1500_.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    }


]

export const Crousel = () => {
    return (
        <div className="slider-container bg-slate-900 pb-23  ">
            <Slider {...settings}>
                {products.map((item, index) => {
                    return <a to={'collections'}><div>
                        <div className="bg-white border border-gray-200  shadow h-41 w-30">

                            <img className="rounded-t-lg object-cover object-center" src={item.imageSrc} alt="" />

                        </div>
                    </div></a>
                })}
            </Slider>
        </div>
    )
}
