import React from 'react';

export const Navbarrr = () => {
    return (
        <div className='pt-4 md:pt-0 hidden md:block'> 
            <nav className=' md:flex p-3 bg-slate-900 text-white items-center h-10'> 
                <div className='nav-menu flex flex-wrap justify-center gap-4 md:gap-16 mx-auto'>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Godrej</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Samsung</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>L.G</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Vivo</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Panasonic</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Voltas</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Whirlpool</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Boat</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Xiaomi</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Apple</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Oneplus</a>
                    <a className='text-xs md:text-sm font-semibold hover:text-sky-500'>Bluestar</a>
                </div>
            </nav>
        </div>
    );
}
