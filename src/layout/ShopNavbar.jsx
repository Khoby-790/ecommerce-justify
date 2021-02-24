/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Transition } from '../components';
import Cart from '../components/Cart';
import useDarkMode from '../hooks/useDarkMode';
import Profile from './Profile';

const ShopNavbar = () => {

    const cart = useSelector(state => state.cart)

    const [theme, setTheme] = useDarkMode();

    return (
        <Fragment>
            <nav class="flex-shrink-0 bg-white dark:bg-gray-800 dark:border-gray-500 border-b border-gray-300">
                <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div class="relative flex items-center justify-between h-16">

                        <div class="flex items-center px-2 lg:px-0 xl:w-64">
                            <div class="flex-shrink-0">
                                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow" />
                            </div>
                        </div>
                        <div class="flex-1 flex justify-center lg:justify-end">
                            <div class="w-full px-2 lg:px-6">
                                <label for="search" class="sr-only">Search projects</label>
                                <div class="relative text-gray-200 focus-within:text-gray-400">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input id="search" name="search" class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white bg-opacity-25 text-gray-100 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm" placeholder="Search projects" type="search" />
                                </div>
                            </div>
                        </div>
                        <div class="flex lg:hidden">
                            {/* <!-- Mobile menu button --> */}
                            <button class="bg-gray-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {/* <!-- Links section --> */}
                        <div class="hidden lg:block lg:w-80">
                            <div class="flex flex-row items-center justify-end">
                                <div class="flex">

                                </div>
                                {/* <!-- Profile dropdown --> */}
                                <Profile />
                                <div onClick={() => setTheme(theme)} className="relative h-13 w-13 cursor-pointer flex justify-center items-center ml-3 rounded-full">
                                    {theme === "dark" ?
                                        <svg className="h-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                        :
                                        <svg className="h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    }
                                </div>
                                <div className="h-13 w-13 cursor-pointer flex justify-center items-center ml-3 rounded-full">
                                    <svg className="h-6 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                                    </svg>
                                    <div className="bg-yellow-500 absolute bottom-3 rounded-full right-0 flex text-white items-center justify-center p-2 max-h-3 h-full w-3">{cart.length}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
    --> */}
                <div class="lg:hidden">
                    <div class="px-2 pt-2 pb-3">
                        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800">Dashboard</a>
                        <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Support</a>
                    </div>
                    <div class="pt-4 pb-3 border-t border-indigo-800">
                        <div class="px-2">
                            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Your Profile</a>
                            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Settings</a>
                            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Sign out</a>
                        </div>
                    </div>
                </div>
            </nav>

        </Fragment>
    )
}

export default ShopNavbar
