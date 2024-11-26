import React, { useContext, useEffect, useState } from 'react';
import { Store } from './StoreProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { navigate } = useContext(Store);
    const [currentState, setCurrentState] = useState('SIGN UP');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (currentState === 'SIGN UP') {
            localStorage.setItem('user', JSON.stringify(formData));
            toast.success('Registration successful, Please log in..');
            setCurrentState('LOG IN');
        }
        else if (currentState === 'LOG IN') {
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser) {
                if (formData.email === storedUser.email) {
                    if (formData.password === storedUser.password) {
                        toast.success('Login Successful..');
                        navigate('/');
                    } else {
                        toast.error('Incorrect Password');
                    }
                } else {
                    toast.error('Email does not exist');
                }
            } else {
                toast.error('No user found, please sign up..');
            }
        }
    };

    return (
        <>

            <ToastContainer />


            <div className='bg-black py-36  '>

                <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto gap-4 text-white bg-slate-800 rounded-md px-5 sm:px-14 pt-4 pb-10' onSubmit={onSubmitHandler}>
                    <div className='inline-flex items-center gap-2 mb-2 mt-5 md:mt-10'>
                        <hr className='border-none h-[1.5px] w-8 bg-white'></hr>
                        <p className='text-2xl sm:text-3xl'>{currentState}</p>
                        <hr className='border-none h-[1.5px] w-8 bg-white'></hr>
                    </div>

                    {currentState === 'SIGN UP' && (
                        <input
                            type='text'
                            name='name'
                            className='w-full px-3 py-2 border border-gray-600 bg-transparent text-white'
                            placeholder='Name'
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    )}
                    <input
                        type='email'
                        name='email'
                        className='w-full px-3 py-2 border border-gray-600 bg-transparent text-white'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type='password'
                        name='password'
                        className='w-full px-3 py-2 border border-gray-600 bg-transparent text-white'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />

                    <div className='w-full flex justify-end text-sm'>
                        {currentState === 'LOG IN' ? (
                            <p onClick={() => setCurrentState('SIGN UP')} className='cursor-pointer'>
                                Create Account
                            </p>
                        ) : (
                            <p onClick={() => setCurrentState('LOG IN')} className='cursor-pointer'>
                                Login Here
                            </p>
                        )}
                    </div>

                    <button type="submit" className='bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded'>
                        {currentState === 'LOG IN' ? 'LOG IN' : 'SIGN UP'}
                    </button>
                </form>
            </div>
        </>
    );
};
