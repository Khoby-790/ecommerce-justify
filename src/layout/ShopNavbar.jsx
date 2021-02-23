/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, useRef, useState } from 'react';
import { Transition } from '../components';
import { useOutsideClick } from '../hooks';
import useDarkMode from '../hooks/useDarkMode';

const ShopNavbar = () => {
    const profileMenuRef = useRef(null);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    useOutsideClick(profileMenuRef, () => {
        setShowProfileMenu(false)
    })

    const [theme, setTheme] = useDarkMode();

    return (
        <Fragment>
            <nav class="flex-shrink-0 bg-white dark:bg-gray-800 dark:border-white border-b border-gray-300">
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
                                <div class="ml-4 relative flex-shrink-0">
                                    <div onClick={() => setShowProfileMenu(c => !c)}>
                                        <button class="bg-yellow-600 dark:bg-green-400 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-400 focus:ring-white" id="user-menu" aria-haspopup="true">
                                            <span class="sr-only">Open user menu</span>
                                            <div className=" h-10 w-10 flex items-center justify-center rounded-full">
                                                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />
                                            </div>
                                        </button>
                                    </div>


                                    <Transition
                                        show={showProfileMenu}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-95"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-95"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <div ref={profileMenuRef} class="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">View Profile</a>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
                                        </div>
                                    </Transition>


                                </div>
                                <div onClick={() => setTheme(theme)} className="relative h-13 w-13 cursor-pointer flex justify-center items-center ml-3 rounded-full">
                                    {theme === "dark" ?
                                        <svg className="h-11 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                        :
                                        <svg className="h-11 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    }
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
