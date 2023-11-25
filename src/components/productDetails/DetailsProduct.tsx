import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { CartContext } from '../../context/CardContext'
import { useNavigate } from 'react-router-dom';

type Props = {
    data: any
}

const DetailsProduct = ({ data }: Props) => {

    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState('')
    const { addToCart } = useContext(CartContext)!;

    const navigate = useNavigate();

    const rating = (rate: number) => {
        if (rate <= 1)
            return <div>
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
            </div>
        else if (rate <= 2)
            return <div>
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
            </div>
        else if (rate <= 3)
            return <div>
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
            </div>
        else if (rate <= 4)
            return <div>
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
            </div>
        else if (rate <= 5)
            return <div>
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
                <FontAwesomeIcon className="text-yellow-400" icon={faStar} />
            </div>
    }

    const addItem = () => {
        setQuantity(prev => {
            if (prev > data?.stock) return prev
            return prev + 1
        })
    }

    const subtractItem = () => {
        setQuantity(prev => {
            if (prev == 1) return prev
            return prev - 1
        })

    }

    return (
        <div className='w-full lg:w-1/2 mt-28 lg:mt-0'>
            <h1 className='text-4xl'>{data?.name}</h1>
            <div className='flex mt-3'>
                {rating(data?.stars)}
                <p className='mx-2'>({data?.reviews}) Customer Reviews</p>
            </div>
            <p className='mt-3 text-stone-400'>${data?.price}</p>
            <p className='mt-3'>{data?.description}</p>

            <div className='grid grid-cols-2 mt-3'>
                <p className='mt-3 font-bold'>Available:</p>
                <p className='mt-3 mx-3'>{data?.stock > 0 ? "In Stock" : "Not Available"}</p>
                <p className='mt-3 font-bold'>SKU:</p>
                <p className='mt-3 mx-3'>recNZ0koOqEmilmoz</p>
                <p className='mt-3 font-bold'>Brand:</p>
                <p className='mt-3 mx-3'>{data?.company}</p>
            </div>

            <div className='w-2/3 my-7 h-[1.5px]  bg-slate-300' />

            <div className='grid grid-cols-2 mt-3 items-center'>
                <p className='mt-3 font-bold'>Colors:</p>
                <ul className='flex'>
                    {
                        data && data?.colors?.map((c: string) => {
                            return <li
                                onClick={() => setColor(c)}
                                style={{ backgroundColor: c }}
                                className={`cursor-pointer w-6 h-6 rounded-full mx-1`}></li>
                        })
                    }
                </ul>
            </div>

            <div className='flex w-1/3 justify-between items-center  mt-5'>
                <FontAwesomeIcon
                    onClick={subtractItem}
                    className='cursor-pointer'
                    icon={faMinus}
                />
                <p className='text-xl font-bold'>{quantity}</p>
                <FontAwesomeIcon
                    onClick={addItem}
                    className='cursor-pointer'
                    icon={faPlus}
                />
            </div>

            <button
                onClick={() => {
                    addToCart({ ...data, quantity, color })
                    navigate("/products")
                }}
                className='rounded-lg bg-stone-500 mt-5 mb-20 p-2 px-4 text-white'
            >Add to Card</button>
        </div>
    )
}

export default DetailsProduct