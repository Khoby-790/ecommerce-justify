import React, { Fragment, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const CartItem = ({ cartItem }) => {
    const [qty, setQty] = useState(0);
    return (
        <Fragment>
            <div className="flex mt-2 justify-between">
                <div className="w-1/3">
                    <img src={cartItem?.original_picture_url} alt="" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold">{cartItem.name}</h3>
                    <p className="dark:text-gray-400">{cartItem?.designer}</p>
                    <div className="flex mt-4 pr-4 justify-between">
                        <div className="flex">
                            <div className="border cursor-pointer flex items-center justify-center border-gray-800 dark:border-white rounded-l-lg max-h-6 w-11 h-full px-2">
                                <FaPlus className="dark:text-white" />
                            </div>
                            <div className="border flex items-center justify-center border-gray-800 dark:border-white max-h-6 w-6 h-full px-2">
                                {qty}
                            </div>
                            <div className="border cursor-pointer flex items-center justify-center border-gray-800 dark:border-white rounded-r-lg max-h-6 w-11 h-full px-2">
                                <FaMinus className="dark:text-white" />
                            </div>
                        </div>
                        <div className="flex">
                            <p className="mt-3 font-semibold text-green-600 dark:text-yellow-300">{cartItem.retail_price_cents?.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CartItem
