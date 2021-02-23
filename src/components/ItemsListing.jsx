import React, { Fragment, useEffect, useState } from 'react'
import { SortDropDown } from '.';
import faker from 'faker';

import sneakers from '../assets/shops.json'



const sortList = ["Prize", "In Stock", "Size", "Color"];




const ItemsListing = () => {

    const [items] = useState(sneakers);




    return (
        <Fragment>
            <div class="bg-white lg:min-w-0 lg:flex-1">
                <div class="h-full py-6 px-2 sm:px-6 lg:px-2">
                    {/* <!-- Start main area--> */}
                    <div class="relative h-full" >
                        <div class="absolute inset-0 rounded-lg">
                            {/* Sort Layer */}
                            <div className="flex justify-between">
                                <h1 className="font-bold text-xl">New Arrivals</h1>
                                <SortDropDown title="Sort By" list={sortList} />
                            </div>

                            {/* Lisitng Layer */}

                            <div className="flex mx-auto flex-wrap mt-2">

                                {items.map((item, key) => <Item key={key} item={item} />)}

                            </div>

                        </div>
                    </div>
                    {/* <!-- End main area --> */}
                </div>
            </div>
        </Fragment>
    )
}

export default ItemsListing


const Item = ({ item }) => {

    return (
        <div className="h-auto cursor-pointer mr-3 ml-2 mb-2 w-72 border border-gray-300 rounded-lg overflow-hidden">
            <div className="absolute h-10 w-2 bg-gray-700 mt-4 -ml-2  "></div>
            <div className="p-3 ">
                <h4 className="font-light text-gray-400">{item.designer}</h4>
                <h1>{item.name}</h1>

                <div className="h-42 w-full ">
                    <img src={item.original_picture_url} className="h-full w-full" alt="" />
                </div>
                <div>
                    <h3 className="font-thin text-lg text-gray-400">Price</h3>
                    <h2>{item.retail_price_cents?.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h2>
                </div>
            </div>
        </div>
    )
}
