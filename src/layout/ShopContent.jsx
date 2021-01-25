import React, { Fragment } from 'react'
import FlitersPane from './FlitersPane'

const ShopContent = () => {
    return (
        <Fragment>
             <div class="flex-grow w-full lg:flex">
                    {/* <!-- Left sidebar & main wrapper --> */}
                    <div class="flex-1 min-w-0 bg-white xl:flex">
                        <FlitersPane />

                        <div class="bg-white lg:min-w-0 lg:flex-1">
                            <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
                                {/* <!-- Start main area--> */}
                                <div class="relative h-full" >
                                    <div class="absolute inset-0 rounded-lg"></div>
                                </div>
                                {/* <!-- End main area --> */}
                            </div>
                        </div>
                    </div>

                    <div class="bg-white  lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
                        <div class="h-full pl-6 py-6 lg:w-80">
                            {/* <!-- Start right column area --> */}
                            <div class="h-full relative" >
                                <div class="absolute inset-0  rounded-lg"></div>
                            </div>
                            {/* <!-- End right column area --> */}
                        </div>
                    </div>
                </div>
            
        </Fragment>
    )
}

export default ShopContent
