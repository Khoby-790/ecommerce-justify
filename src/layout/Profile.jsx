import React, { Fragment, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import { Transition } from '../components'
import Modal from '../components/Modal';
import { useOutsideClick } from '../hooks';

const Profile = () => {
    const profileMenuRef = useRef(null);
    useOutsideClick(profileMenuRef, () => {
        setShowProfileMenu(false)
    })
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [rememberme, setRememberme] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const auth = useSelector(state => state.auth)
    return (
        <Fragment>
            <div class="ml-4 relative flex-shrink-0">
                {auth && <div onClick={() => setShowProfileMenu(c => !c)}>
                    <button class="bg-yellow-600 dark:bg-green-400 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-400 focus:ring-white" id="user-menu" aria-haspopup="true">
                        <span class="sr-only">Open user menu</span>
                        <div className=" h-10 w-10 flex items-center justify-center rounded-full">
                            <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80" alt="" />
                        </div>
                    </button>
                </div>}
                {!auth && (
                    <div className="dark:text-white font-bold">
                        <span onClick={() => setShowLogin(true)} className="mr-2 cursor-pointer">Login</span>
                        <span onClick={() => setShowRegister(true)} className="cursor-pointer">Register</span>
                    </div>
                )}

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


            <Modal show={showLogin} setShow={setShowLogin}>
                <div className="py-4 px-5 bg-white">
                    <div className="flex flex-col">
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder="email or phone" className="outline-none h-12 px-2 focus:outline-none border border-gray-300" />
                    </div>
                    <div className="flex mb-2 flex-col">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="*****" className="outline-none h-12 px-2 focus:outline-none border border-gray-300" />
                    </div>
                    <div class="flex mb-3 items-center">
                        <button onClick={() => setRememberme(prev => !prev)} type="button" class={`${rememberme ? "bg-green-700" : "bg-gray-200"} relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`} aria-pressed="false" aria-labelledby="annual-billing-label">
                            <span class="sr-only">Use setting</span>
                            <span aria-hidden="true" class={`${rememberme ? "translate-x-5" : "translate-x-0"} pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}></span>
                        </button>
                        <span class="ml-3" id="annual-billing-label">
                            <span class="text-sm text-gray-500">Remember me</span>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-green-700 rounded-md text-white py-3">Sign in</button>
                    </div>
                </div>
            </Modal>

            <Modal show={showRegister} setShow={setShowRegister}>
                <div className="py-4 px-5 bg-white">
                    <div className="flex flex-col">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="eg. Jone Doe" className="outline-none h-12 px-2 focus:outline-none border border-gray-300" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="eg. johdoe@mail.com" className="outline-none h-12 px-2 focus:outline-none border border-gray-300" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Phone</label>
                        <input type="text" placeholder="eg. 02744855686" className="outline-none h-12 px-2 focus:outline-none border border-gray-300" />
                    </div>
                    <div className="flex mb-2 flex-col">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder="*****" className="outline-none h-12 px-2 focus:outline-none border border-gray-300" />
                    </div>
                    <div className="flex mb-2 flex-col">
                        <label htmlFor="">Confirm Password</label>
                        <input type="password" placeholder="*****" className="outline-none h-12 px-2 focus:outline-none border border-gray-300" />
                    </div>
                    <div className="flex flex-col">
                        <button className="bg-green-700 rounded-md text-white py-3">Sign in</button>
                    </div>
                </div>
            </Modal>


        </Fragment>
    )
}

export default Profile
