import React, { Fragment, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { Transition } from '.';

const FliterItemDropDown = ({ name, list = [] }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <Fragment>
            <div className="bg-white dark:bg-gray-800 border-b border-gray-300 flex p-4 justify-between">
                <h3 className="text-gray-700 dark:text-white font-medium">{name}</h3>

                <Fragment>
                    {!showDetails ?
                        <FiChevronDown onClick={() => setShowDetails(c => !c)} className="cursor-pointer text-white" size={20} />
                        :
                        <FiChevronUp onClick={() => setShowDetails(c => !c)} color="#000" className="cursor-pointer" size={20} />
                    }
                </Fragment>

            </div>
            <Transition
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 d-none scale-95"
                show={showDetails}
            >
                <ul class="relative bg-white rounded-md -space-y-px">
                    {list.map(({ label, value }, key) => (
                        <li key={key}>
                            {/* <!-- On: "bg-indigo-50 border-indigo-200 z-10", Off: "border-gray-200" --> */}
                            <div class="relative border rounded-tl-md rounded-tr-md py-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-1">
                                <label class="flex items-center text-sm cursor-pointer">
                                    <input value={value} name="pricing_plan" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-gray-600 cursor-pointer bg-gray-600 border-gray-300" aria-describedby="plan-option-pricing-0 plan-option-limit-0" />
                                    <span class="ml-3 font-light text-gray-900">{label}</span>
                                </label>
                            </div>
                        </li>
                    ))}
                </ul>
            </Transition>
        </Fragment>
    )
}

export default FliterItemDropDown
