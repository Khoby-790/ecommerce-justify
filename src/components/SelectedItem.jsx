import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { BiCart } from 'react-icons/bi'

const SelectedItem = () => {
    const item = useSelector(state => state.selectedSneaker)
    return !item ? null : (
        <Fragment>
            <div class="bg-white dark:bg-gray-500  max-w-md w-full lg:flex-shrink-0 lg:border-l dark:border-white lg:border-gray-200 xl:pr-0">
                <div class="h-full px-6 py-6 lg:w-full">
                    {/* <!-- Start right column area --> */}
                    <div class="h-full relative overflow-scroll" >
                        <div class="absolute inset-0 rounded-lg">
                            <Fragment>
                                <div className="flex flex-col flex-1">
                                    <div className="h-auto">
                                        <img src={item.original_picture_url} className="h-full w-full" alt="" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h2 className="font-bold text-2xl text-center">{item.name}</h2>
                                        <h4 className="text-center dark:text-gray-300 text-gray-500">{item.designer}</h4>
                                    </div>
                                    <div className="mt-6">
                                        <h3 className="font-bold">Select Size</h3>
                                        <div className="flex overflow-scroll mt-2">
                                            {item.size_range?.map((size, sizeIndex) => (
                                                <div key={sizeIndex} className="h-11 w-11 px-4 dark:text-gray-100 flex dark:border-gray-300 items-center rounded-md justify-center border mr-4 border-gray-800">{size}</div>
                                            ))}
                                        </div>
                                    </div>

                                    {item.story_html && <div className="mt-2">
                                        <h3 className="font-bold">Description</h3>
                                        <div className="mt-1" dangerouslySetInnerHTML={{ __html: item?.story_html }}>
                                        </div>
                                    </div>}


                                    <div className="mt-6">
                                        <div className="flex w-full cursor-pointer items-center justify-between rounded-lg dark:bg-gray-100 dark:text-gray-900  text-white bg-gray-900 py-3">
                                            <div className="flex px-4 items-center justify-center">
                                                <BiCart className="text-white dark:text-gray-900" />
                                                <h2 className="ml-6">Add to cart</h2>
                                            </div>
                                            <div className="px-4">
                                                <h2 className="dark:text-gray-900 font-extrabold text-white">{item.retail_price_cents?.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        </div>
                    </div>
                    {/* <!-- End right column area --> */}
                </div>
            </div>
        </Fragment>
    )
}

export default SelectedItem
