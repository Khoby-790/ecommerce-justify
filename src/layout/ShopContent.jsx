import React, { Fragment } from 'react'
import EmptyCartIcon from '../components/EmptyCartIcon'
import ItemsListing from '../components/ItemsListing'
import FlitersPane from './FlitersPane'

const ShopContent = () => {
    return (
        <Fragment>
             <div class="flex-grow w-full lg:flex">
                    {/* <!-- Left sidebar & main wrapper --> */}
                    <div class="flex-1 min-w-0 bg-white xl:flex">
                        <FlitersPane />
                        <ItemsListing />
                    </div>
                    <div class="bg-white  max-w-md w-full lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
                        <div class="h-full pl-6 py-6 lg:w-72">
                            {/* <!-- Start right column area --> */}
                            <div class="h-full relative" >
                                <div class="absolute inset-0 rounded-lg">
                                    <EmptyCartIcon />
                                </div>
                            </div>
                            {/* <!-- End right column area --> */}
                        </div>
                    </div>
                </div>
            
        </Fragment>
    )
}

export default ShopContent
