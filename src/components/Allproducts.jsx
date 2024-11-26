import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../pages/StoreProvider';
import { Link } from 'react-router-dom';

export const Allproducts = () => {
    const { products } = useContext(Store);

    const [filterProduct, setFilterProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');
    const [searchQuery, setSearchQuery] = useState('');

    const filterCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value));
        } else {
            setCategory(prev => [...prev, e.target.value]);
        }
    };

    const applyFilter = () => {
        let productCopy = products.slice();

        if (category.length > 0) {
            productCopy = productCopy.filter(item => category.includes(item.category));
        }

        if (searchQuery) {
            productCopy = productCopy.filter(item => 
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilterProduct(productCopy);
    };

    const sortProduct = () => {
        let fcopy = filterProduct.slice();

        switch (sortType) {
            case 'low-high':
                setFilterProduct(fcopy.sort((a, b) => a.price - b.price));
                break;
            case 'high-low':
                setFilterProduct(fcopy.sort((a, b) => b.price - a.price));
                break;
            default:
                applyFilter();
                break;
        }
    };

    useEffect(() => {
        setFilterProduct(products);
    }, [products]);

    useEffect(() => {
        applyFilter();
    }, [category, searchQuery]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <>
            <hr className='border-slate-400' />
            <div className="grid grid-cols-1 md:grid-cols-5 w-full bg-black pb-20">
                <div className='text-white mx-4 md:mx-10 hidden md:block'>
                    <p className='font-bold text-2xl mb-10 mt-14'>FILTER</p>
                    <div className='flex flex-col border border-slate-400 p-6'>
                        <p className='mb-5'>Categories</p>
                        {['Godrej', 'Samsung', 'L.G', 'Vivo', 'Panasonic', 'Voltas', 'Whirpool', 'Boat', 'Xiaomi', 'Apple', 'Oneplus', 'Bluestar'].map(brand => (
                            <label key={brand} className="text-sm md:text-base">
                                <input type="checkbox" name="brand" value={brand} onChange={filterCategory} /> {brand}
                            </label>
                        ))}
                    </div>
                </div>

                <section className='product-view-sort col-span-1 md:col-span-4 mx-4 md:mx-20'>
                    <div className='flex flex-col md:flex-row justify-between items-center mb-5 mt-10'>
                        <input 
                            type="text" 
                            placeholder="Search all the products here..." 
                            className="border-2 border-gray-900 p-2 rounded-md w-full mb-4 md:mb-0"
                            onChange={(e) => setSearchQuery(e.target.value)} 
                        />
                        <select className='ml-0 md:ml-4 border-2 border-gray-900 text-sm p-2 rounded-md w-full md:w-auto'
                            onChange={(e) => {
                                setSortType(e.target.value);
                            }}>
                            <option value="relevant">Sort by: Relevant</option>
                            <option value="low-high">Sort by: Low to High</option>
                            <option value="high-low">Sort by: High to Low</option>
                        </select>
                    </div>
                    {/* Mobile view filter menu */}
                <div className='text-white mx-4 md:hidden mt-4'>
                    <p className='font-bold md:text-2xl text-md mb-5'>FILTER</p>
                    <div className='flex flex-col border border-slate-400 p-6'>
                        <p className='mb-5'>Categories</p>
                        {['Godrej', 'Samsung', 'L.G', 'Vivo', 'Panasonic', 'Voltas', 'Whirpool', 'Boat', 'Xiaomi', 'Apple', 'Oneplus', 'Bluestar'].map(brand => (
                            <label key={brand} className="text-sm">
                                <input type="checkbox" name="brand" value={brand} onChange={filterCategory} /> {brand}
                            </label>
                        ))}
                    </div>
                </div>

                    <div className='flex justify-center text-base sm:text-2xl mb-5'>
                        <h2 className='font-bold md:text-2xl text-sm text-white md:pt-0 pt-8'>All Products</h2>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        {(filterProduct.length > 0 ? filterProduct : products).map((data) => (
                            <Link to={`/product/${data.id}`} key={data.id}>
                                <div className="w-full max-w-sm border border-gray-500 rounded-lg shadow dark:bg-slate-800 dark:border-gray-500 cursor-pointer">
                                    <div className="flex-shrink-0">
                                        <img src={data.imageSrc} alt={data.name} className='w-full object-cover h-54 mb-4' />
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div>
                                            <h3 className='font-bold md:text-sm text-xs text-center text-white'>{data.name}</h3>
                                        </div>
                                        <div className="text-center mt-4">
                                            <p className='font-semibold md:text-sm text-xs text-white'>₹ {data.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                
            </div>
        </>
    );
};
