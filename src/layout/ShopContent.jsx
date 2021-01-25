import React, { Fragment } from 'react'

const ShopContent = () => {
    return (
        <Fragment>
             <div class="flex-grow w-full xl:px-8 lg:flex">
                    {/* <!-- Left sidebar & main wrapper --> */}
                    <div class="flex-1 min-w-0 bg-white xl:flex">
                        <div class="border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white">
                            <div class="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                                {/* <!-- Start left column area --> */}
                                <div class="h-full relative" >
                                    <div class="absolute inset-0  rounded-lg"></div>
                                </div>
                                {/* <!-- End left column area --> */}
                            </div>
                        </div>

                        <div class="bg-white lg:min-w-0 lg:flex-1">
                            <div class="h-full py-6 px-4 sm:px-6 lg:px-8">
                                {/* <!-- Start main area--> */}
                                <div class="relative h-full" >
                                    <div class="absolute inset-0 border-4 border-gray-200 border-dashed rounded-lg"></div>
                                </div>
                                {/* <!-- End main area --> */}
                            </div>
                        </div>
                    </div>

                    <div class="bg-indigo-50  lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
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
