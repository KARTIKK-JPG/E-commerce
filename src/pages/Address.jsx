import React, { useContext, useEffect } from 'react';
import { Store } from './StoreProvider';
import { toast } from 'react-toastify';
import { Cardtotal } from '../components/Cardtotal';

export const Address = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { cartItem, products, navigate, setConfirmedOrders, clearCart, setFormData, errors, validateForm } = useContext(Store);

    const {
        formData = {
            name: '',
            lastName: '',
            email: '',
            street: '',
            city: '',
            state: '',
            zipCode: '',
            country: '',
            phone: '',
        },
    } = useContext(Store);

    const handlePlaceOrder = () => {
        if (!validateForm()) {
            toast.error('Please fill in all the required fields.');
            return;
        }

        const newConfirmedOrders = Object.entries(cartItem)
            .filter(([id, quantity]) => quantity > 0)
            .map(([id, quantity]) => {
                const productOder = products.find((product) => product.id === Number(id));
                return {
                    ...productOder,
                    quantity,
                    status: 'CONFIRMED',
                };
            });


        setConfirmedOrders(newConfirmedOrders);

        clearCart();
        navigate('/final');



    };

    const renderError = (field) => (
        errors[field] && <p className='text-white bg-red-500 text-sm p-2'>{errors[field]}</p>
    );

    return (
        <>



            <section className="bg-white py-12 antialiased dark:bg-black md:py-16">
                <div className='mx-3 md:mx-80 pb-2 md:pt-12 pt-0 hidden md:block'>
                    <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
                        <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden ">
                                <svg className="me-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                Cart
                            </span>
                        </li>
                        <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
                            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden font-bold text-2xl">
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
                <form action="#" className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                    <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">

                        <div className="min-w-0 flex-1 space-y-8">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white  ">
                                Delivery Details
                            </h2>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex flex-col gap-4">
                                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        First Name
                                    </label>
                                    <input
                                        id="first-name"
                                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                                        type='text'
                                        placeholder='Enter First Name'
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        aria-label='First Name'
                                    />
                                    {renderError('name')}
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                                        type='email'
                                        placeholder='Enter Email Address'
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        aria-label='Email Address'
                                    />
                                    {renderError('email')}

                                </div>

                                <div className="flex flex-col gap-4">
                                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Last Name
                                    </label>
                                    <input
                                        id="last-name"
                                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                                        type='text'
                                        placeholder='Enter Last Name'
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                        aria-label='Last Name'
                                    />
                                    {renderError('lastName')}

                                    <label htmlFor="street" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Address
                                    </label>
                                    <input
                                        id="street"
                                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                                        type='text'
                                        placeholder='Enter flat/area/street'
                                        value={formData.street}
                                        onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                                        aria-label='Street'
                                    />
                                    {renderError('street')}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <label htmlFor="city" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        City
                                    </label>
                                    <input
                                        id="city"
                                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                                        type='text'
                                        placeholder='Enter City'
                                        value={formData.city}
                                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        aria-label='City'
                                    />
                                    {renderError('city')}

                                    <label htmlFor="state" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        State
                                    </label>
                                    <input
                                        id="state"
                                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                                        type='text'
                                        placeholder='Enter State'
                                        value={formData.state}
                                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                        aria-label='State'
                                    />
                                    {renderError('state')}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <label htmlFor="zip-code" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Zip Code
                                    </label>
                                    <input
                                        id="zip-code"
                                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                                        type='text'
                                        placeholder='Enter Zip Code'
                                        value={formData.zipCode}
                                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                                        aria-label='Zip Code'
                                    />
                                    {renderError('zipCode')}

                                    <label htmlFor="country" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Country
                                    </label>
                                    <input
                                        id="country"
                                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                                        type='text'
                                        placeholder='Enter Country'
                                        value={formData.country}
                                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                        aria-label='Country'
                                    />
                                    {renderError('country')}
                                </div>

                                <div className="flex flex-col gap-4">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        className='border border-gray-300 rounded py-1.5 px-3.5 w-full'
                                        type='tel'
                                        placeholder='Enter Phone'
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        aria-label='Phone'
                                    />
                                    {renderError('phone')}
                                </div>
                            </div>
                            <div className="md:pt-6 pt-2 w-full space-y-6 sm:mt-8 lg:mt-0 pt-14">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                    Payment Method
                                </h3>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div className="flex items-start">
                                            <input
                                                id="credit-card"
                                                type="radio"
                                                name="payment-method"
                                                className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700"
                                                defaultChecked
                                            />
                                            <div className="ms-4 text-sm">
                                                <label htmlFor="credit-card" className="font-medium leading-none text-gray-900 dark:text-white">
                                                    UPI Payment
                                                </label>
                                                <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    Pay with your UPI methods
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div className="flex items-start">
                                            <input
                                                id="pay-on-delivery"
                                                type="radio"
                                                name="payment-method"
                                                className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700"
                                            />
                                            <div className="ms-4 text-sm">
                                                <label htmlFor="pay-on-delivery" className="font-medium leading-none text-gray-900 dark:text-white">
                                                    Payment on Delivery
                                                </label>
                                                <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    Pay at your doorstep
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                                        <div className="flex items-start">
                                            <input
                                                id="credit-card-2"
                                                type="radio"
                                                name="payment-method"
                                                className="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700"
                                            />
                                            <div className="ms-4 text-sm">
                                                <label htmlFor="credit-card-2" className="font-medium leading-none text-gray-900 dark:text-white">
                                                    Credit Card
                                                </label>
                                                <p className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400">
                                                    Pay with your Credit Card
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="space-y-4 lg:w-1/3 lg:ml-8 pt-20">
                            <Cardtotal />
                            <br />
                            <div className="space-y-3">
                                <button
                                    type="button"
                                    onClick={handlePlaceOrder}
                                    className="flex w-full h-12 items-center justify-center rounded-lg bg-green-700  text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Proceed to Payment
                                </button>
                                <div>
                                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400 pt-9 px-12">
                                        © 2023 Gadgets plus™. All Rights Reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>




                </form>
            </section>
        </>
    );
};