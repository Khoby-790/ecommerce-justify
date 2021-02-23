import React, { Fragment } from 'react'
import Cart from '../components/Cart'
import EmptyCartIcon from '../components/EmptyCartIcon'
import ItemsListing from '../components/ItemsListing'
import FlitersPane from './FlitersPane'

const ShopContent = () => {
    return (
        <Fragment>
            <div class="flex-grow w-full lg:flex">
                {/* <!-- Left sidebar & main wrapper --> */}
                <div class="flex-1 min-w-0 bg-white dark:bg-gray-800 xl:flex">
                    <FlitersPane />
                    <ItemsListing />
                </div>
                <Cart />
            </div>

        </Fragment>
    )
}

export default ShopContent
