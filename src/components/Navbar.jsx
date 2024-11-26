import React, { useContext } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { FaRegUser } from 'react-icons/fa6';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { Store } from '../pages/StoreProvider';
import { toast } from 'react-toastify';

export default function Navbar() {
  const { getTotalCount, navigate } = useContext(Store);
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const userName = storedUser ? storedUser.name : 'Hey Guest !!';

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    toast.success('Logout Successfully !!');
  };

  return (
    <Disclosure as="nav" className="bg-black fixed top-0 w-full z-10">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-between sm:items-stretch">
                <div className="flex flex-shrink-0 items-center justify-center w-full sm:w-auto">
                  <img src="../assets/logo2.png" alt="Your Company" className="h-8 w-auto" />
                </div>
                <div className="hidden sm:flex sm:justify-center flex-grow">
                  <div className="flex space-x-8">
                    {/* Navigation Links */}
                    <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={close}>Home</Link>
                    <Link to="products" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={close}>Products</Link>
                    <Link to="help" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={close}>Help</Link>
                    <Link to="login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={close}>Get Started</Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <FaRegUser className="text-white" />
                    </Menu.Button>
                  </div>
                  <Menu.Items
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'} hover:bg-gray-100`}
                        >
                          {userName}
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={'final'}
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'} hover:bg-gray-100`}
                          onClick={close}
                        >
                          My Orders
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <p
                          className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : 'text-gray-700'} hover:bg-gray-100 cursor-pointer`}
                          onClick={handleLogout}
                        >
                          Logout
                        </p>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
                <Link to={'cart'}>
                  <p className="text-white mx-3 flex items-center">
                    <AiOutlineShoppingCart />
                    {getTotalCount()}
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-2 px-2 pt-2 pb-3">
              <Link to="/" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={close}>Home</Link>
              <Link to="products" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={close}>Products</Link>
              <Link to="help" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={close}>Help</Link>
              <Link to="login" className="block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" onClick={close}>Get Started</Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
