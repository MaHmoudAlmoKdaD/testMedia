import React, { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CardContext';
import { useNavigate } from 'react-router-dom';

type Props = {
}

const BodyContent = (props: Props) => {
    const [quantity, setQuantity] = useState(1)
    const { cart, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(CartContext)!;
    const navigate = useNavigate();

    const removeAll = () => {
        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            removeFromCart(element.id)

        }
    }

    return (
        <div className='container mx-auto px-4'>
            <div className='mt-7'>
                <div className='my-2'>
                    <ul className='grid grid-cols-4 items-center'>
                        <li>item</li>
                        <li>Price</li>
                        <li>quantity</li>
                        <li>Action</li>
                    </ul>
                </div>
                <div className='w-full h-[1px]  bg-slate-200' />
                <div className='my-3'>
                    {
                        cart && cart.length > 0 && cart.map((c: any) => {
                            return <ul className='mt-5 grid grid-cols-4 items-center'>
                                <li className='block sm:flex items-center'>
                                    <img
                                        className='w-16 h-16'
                                        src={c.images[0].url} alt="image" />
                                    <div className='mx-2'>
                                        <p>{c.name}</p>
                                        <div className='block sm:flex items-center'>
                                            <p className='text-gray-500'>color:</p>
                                            <div className={` mx-2 w-4 h-4 rounded-full bg-[${c?.colors[0]}]`}></div>
                                        </div>
                                    </div>
                                </li>

                                <li>
                                    <p className='text-stone-400'>${c.price}</p>
                                </li>

                                <li>
                                    <div className='flex w-1/3 justify-between items-center  mt-5'>
                                        <FontAwesomeIcon
                                            className='cursor-pointer'
                                            icon={faMinus}
                                            onClick={() => decreaseQuantity(c.id)}
                                        />
                                        <p className='text-xl font-bold'>{c?.quantity}</p>
                                        <FontAwesomeIcon
                                            className='cursor-pointer'
                                            onClick={() => increaseQuantity(c.id)}
                                            icon={faPlus}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        onClick={() => removeFromCart(c?.id)}
                                        className='cursor-pointer text-red-400'
                                        icon={faTrash}
                                    />

                                </li>
                            </ul>
                        })
                    }
                </div>

                <div className='w-full h-[1px]  bg-slate-200' />

                <div className='flex justify-between items-center'>
                    <button
                        onClick={() => navigate("/products")}
                        className='rounded-lg bg-stone-500 mt-5 mb-20 p-2 px-4 text-white'
                    >Continue Shopping</button>
                    <button
                        onClick={() => removeAll()}
                        className='rounded-lg bg-black mt-5 mb-20 p-2 px-4 text-white'
                    >Clear Shopping Cart</button>
                </div>
            </div>
        </div >
    )
}

export default BodyContent