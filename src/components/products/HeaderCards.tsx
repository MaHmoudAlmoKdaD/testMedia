import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

type Props = {}

const HeaderCards = (props: Props) => {
    return (
        <div className='flex w-full items-center justify-between'>
            <div className='flex w-3/12'>
                <FontAwesomeIcon className='cursor-pointer text-xl mx-1' icon={faSort} />
                <FontAwesomeIcon className='cursor-pointer text-xl mx-1' icon={faArrowDownShortWide} />
                <p>22 products founded</p>
            </div>
            <div className='w-6/12 h-[1px]  bg-slate-200' />
            <div className='flex items-center justify-end lg:w-3/12 '>
                <p className='font-bold'>Sort By</p>
                <div className='ml-3'>
                    <select
                        name="company"
                        id="company"
                        className='mt-2 border-none outline-none bg-slate-200 rounded-sm p-2'
                    >
                        <option value="lowest">Price (Lowest)</option>
                        <option value="highest">Price (Highest)</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default HeaderCards