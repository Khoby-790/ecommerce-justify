import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import EmptyCartIcon from './EmptyCartIcon'

const Cart = () => {
    const item = useSelector(state => state.selectedSneaker)
    return (
        <Fragment>
            <div class="bg-white dark:bg-gray-500  max-w-md w-full lg:flex-shrink-0 lg:border-l dark:border-white lg:border-gray-200 xl:pr-0">
                <div class="h-full pl-6 py-6 lg:w-72">
                    {/* <!-- Start right column area --> */}
                    <div class="h-full relative" >
                        <div class="absolute inset-0 rounded-lg">
                            {!item && <div className="h-60 w-60">
                                <EmptyCartIcon />
                            </div>}

                            {item &&
                                <Fragment>
                                    <div className="flex">
                                        <div className="h-42 w-full bg-red-400 items-center">
                                            <img src={item.original_picture_url} className="h-full w-full" alt="" />
                                        </div>
                                    </div>
                                </Fragment>
                            }
                        </div>
                    </div>
                    {/* <!-- End right column area --> */}
                </div>
            </div>
        </Fragment>
    )
}

export default Cart
