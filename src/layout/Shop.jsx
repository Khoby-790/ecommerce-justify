/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import ShopContent from './ShopContent'
import ShopNavbar from './ShopNavbar'

const Shop = () => {
    return (
        <Fragment>
            <div className="relative min-h-screen flex flex-col">
                <ShopNavbar />
                <ShopContent />
            </div>
        </Fragment>
    )
}

export default Shop
