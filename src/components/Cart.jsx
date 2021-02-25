import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import EmptyCartIcon from './EmptyCartIcon'
import { BiCart } from 'react-icons/bi';
import Lottie from 'react-lottie';
import * as successAnimationData from '../assets/645-success.json'


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: successAnimationData,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Cart = () => {
    const { selectedSneaker: item, cart } = useSelector(state => state);
    const [itemsOrdered, setItemsOrdered] = useState(true);
    const sumOfCart = cart.reduce((acc, curr) => acc + (curr.qty * curr.retail_price_cents), 0)
    return item ? null : (
        <Fragment>
            {itemsOrdered ?
                <div className="bg-white dark:bg-gray-800 sm:hidden lg:block   max-w-md w-full lg:flex-shrink-0 lg:border-l dark:border-gray-500 lg:border-gray-200 xl:pr-0">
                    <div className="h-full flex justify-center items-center">
                        <Lottie options={defaultOptions}
                            height={400}
                            width={400}
                            isPaused={false}
                            isStopped={false}
                        />
                    </div>
                </div>
                :
                <div class="bg-white sm:hidden lg:block dark:bg-gray-800  max-w-md w-full lg:flex-shrink-0 lg:border-l dark:border-gray-500 lg:border-gray-200 xl:pr-0">
                    <div class="h-full px-2 py-3 lg:w-full">
                        {/* <!-- Start right column area --> */}
                        <div class="h-full relative overflow-scroll" >
                            <div class="absolute inset-0 rounded-lg">
                                {cart.length < 1 && (
                                    <Fragment>
                                        <div className="h-full flex items-center justify-center w-auto">
                                            <EmptyCartIcon />
                                        </div>
                                    </Fragment>
                                )}
                                {cart.length && <div className="h-full flex justify-between flex-col">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="font-light dark:text-gray-100 dark:font-bold text-2xl">Your cart</h3>
                                            <p className="dark:text-gray-300 text-gray-800">Proceed to checkout</p>
                                        </div>
                                        <div className="flex justify-end">

                                        </div>
                                    </div>
                                    <div className="flex-1 pb-4 overflow-scroll">
                                        {cart.map((cartItem, cartIndex) => (
                                            <CartItem key={cartIndex} index={cartIndex} cartItem={cartItem} />
                                        ))}
                                    </div>

                                    <div className="h-13">
                                        <div onClick={() => { }} className="flex w-full cursor-pointer items-center justify-between rounded-lg dark:bg-gray-100 dark:text-gray-900  text-white bg-gray-900 py-3">
                                            <div className="flex px-4 items-center justify-center">
                                                <svg className="text-white h-6 dark:text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                </svg>
                                                <h2 className="ml-6">Checkout</h2>
                                            </div>
                                            <div className="px-4">
                                                <h2 className="dark:text-gray-900 font-extrabold text-white">{sumOfCart?.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h2>
                                            </div>
                                        </div>
                                    </div>

                                </div>}

                            </div>
                        </div>
                        {/* <!-- End right column area --> */}
                    </div>
                </div>
            }
        </Fragment >
    )
}

export default Cart
