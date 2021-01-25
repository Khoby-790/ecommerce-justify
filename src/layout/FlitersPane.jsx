import React, { Fragment } from 'react'
import FliterItemDropDown from '../components/FliterItemDropDown';

const shippedFromList = [
    {
        label: "Abroad",
        value: "abroad"
    },
    {
        label: "Ghana",
        value: "Ghana"
    }
]

const categoriesListing = [
    {
        label: "Flip Flops",
        value: "flipflops"
    },
    {
        label: "Sneaker",
        value: "sneaker"
    },
    {
        label: "Lace-up Shoes",
        value: "laceupshoes"
    },
    {
        label: "Shoe Accessories",
        value: "shoeaccessories"
    }
]

const FlitersPane = () => {
    return (
        <Fragment>
            <div class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-72 xl:border-r xl:border-gray-200 bg-white">
                <div class="h-full py-2 sm:pl-6 lg:pl-8 xl:pl-0">
                    <div class="h-full relative" >
                        <div class="absolute inset-0">
                            <FliterItemDropDown name="Shipped From" list={shippedFromList} />
                            <FliterItemDropDown name="Categories" list={categoriesListing} />

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FlitersPane
