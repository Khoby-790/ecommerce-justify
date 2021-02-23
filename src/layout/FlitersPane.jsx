import React, { Fragment, useState, useEffect } from 'react'
import FliterItemDropDown from '../components/FliterItemDropDown';
import sneakers from '../assets/shops.json'
import { useSelector } from 'react-redux';


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

const allCategories = sneakers.map(el => el.category);

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

    const categories = useSelector(state => state.categories)

    const onCategoryClicked = value => {
        alert(value)
    }

    return (
        <Fragment>
            <div class="border-b border-gray-200 dark:border-white xl:border-b-0 xl:flex-shrink-0 dark:bg-gray-800 xl:w-72 xl:border-r xl:border-gray-200 bg-white">
                <div class="h-full py-2 sm:pl-6 lg:pl-8 xl:pl-0">
                    <div class="h-full relative" >
                        <div class="absolute inset-0">
                            <FliterItemDropDown name="Shipped From" list={shippedFromList} />
                            <FliterItemDropDown onItemClicked={onCategoryClicked} name="Categories" list={categories} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FlitersPane
