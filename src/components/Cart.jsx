import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import EmptyCartIcon from './EmptyCartIcon'

const Cart = () => {
    const { selectedSneaker: item, cart } = useSelector(state => state);
    return item ? null : (
        <Fragment>
            <div class="bg-white dark:bg-gray-500  max-w-md w-full lg:flex-shrink-0 lg:border-l dark:border-white lg:border-gray-200 xl:pr-0">
                <div class="h-full px-2 py-6 lg:w-full">
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
                            <div className="h-full flex justify-between flex-col">

                                <div className="flex-1">
                                    <h3 className="font-light text-2xl">Your cart</h3>
                                    <p className="dark:text-gray-300 text-gray-800">Proceed to checkout</p>
                                    {cart.map((cartItem, cartIndex) => (
                                        <CartItem key={cartIndex} index={cartIndex} cartItem={cartItem} />
                                    ))}
                                </div>

                                <div className="max-h-11">
                                        Hello
                                </div>

                            </div>

                        </div>
                    </div>
                    {/* <!-- End right column area --> */}
                </div>
            </div>
        </Fragment>
    )
}

export default Cart
