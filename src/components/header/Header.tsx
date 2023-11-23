import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import React from 'react'

type Props = {}

const Header = () => {
    return (
        <>
            <div className='container mx-auto px-4 '>
                <div className='w-full flex justify-between items-center h-[70px]'>
                    <div className='w-1/3 cursor-pointer'>
                        logo
                    </div>

                    {/* big screen  */}
                    <div className='w-1/3 hidden sm:block'>
                        <ul className='w-full flex justify-around items-center'>
                            <Link to={'#'} className='hover:underline cursor-pointer'>Home</Link>
                            <Link to={'#'} className='hover:underline cursor-pointer'>About</Link>
                            <Link to={'/products'} className='hover:underline cursor-pointer'>Products</Link>
                        </ul>
                    </div>


                    <div className='w-1/3'>
                        <div className=' flex justify-end items-center'>
                            <div className='relative flex items-center cursor-pointer'>
                                <p>Cart</p>
                                <FontAwesomeIcon className="mx-1" icon={faCartShopping} />
                                <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-3 h-3 flex items-center justify-center">
                                    <span className="text-xs font-semibold">0</span>
                                </div>
                            </div>
                            <div className='ml-2 flex  items-center cursor-pointer'>
                                <p>Login</p>
                                <FontAwesomeIcon className="mx-1" icon={faUser} />

                            </div>
                        </div>
                    </div>

                </div>


            </div>
            {/* mobile view  */}
            <div className='w-full block sm:hidden'>
                <ul className='py-3 px-4 bg-stone-300 flex justify-between items-center'>
                    <li className='hover:underline cursor-pointer'>Home</li>
                    <li className='hover:underline cursor-pointer'>About</li>
                    <li className='hover:underline cursor-pointer'>Products</li>
                </ul>
            </div>
        </>
    )
}

export default Header