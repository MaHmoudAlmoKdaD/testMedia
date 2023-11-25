import React, { useState } from 'react'

type Props = {
    categories: any;
    companies: any;
    colors: any;
    setSearchCategory: React.Dispatch<React.SetStateAction<any>>;
    setSearchPrice: React.Dispatch<React.SetStateAction<any>>;
    setSearchColor: React.Dispatch<React.SetStateAction<any>>;
    setSearchCompany: React.Dispatch<React.SetStateAction<any>>;
    setSearchName: React.Dispatch<React.SetStateAction<any>>;
    setFreeShopping: React.Dispatch<React.SetStateAction<any>>;
}



const Filter = ({ categories, companies, colors, setSearchCategory,
    setSearchPrice, setSearchColor, setSearchCompany, setSearchName, setFreeShopping
}: Props) => {
    const [price, setPrice] = useState<number>(200000)

    const setCategory = (cat: string) => {
        setSearchCategory(cat)
    }

    const setCompany = (value: string) => {
        setSearchCompany(value)
    }

    const setColor = (value: string) => {
        setSearchColor(value)
    }

    const setPriceF = (value: string) => {
        setSearchPrice(parseFloat(value))
        setPrice(parseFloat(value))
    }

    const setShopping = (value: boolean) => {
        setFreeShopping(value)
    }

    const clearFillter = () => {
        setSearchCategory("")
        setSearchPrice(200000)
        setSearchColor('')
        setSearchCompany('')
        setSearchName('')
        setFreeShopping(false)
    }

    return (
        <div className='w-full lg:w-2/12'>
            <div className=''>
                <input
                    type="text"
                    className='w-full border-none outline-none bg-slate-200 rounded-sm p-2'
                    placeholder='Search'
                    onChange={(e) => setSearchName(e.target.value)}
                />
            </div>

            {/* Category */}
            <div className='mt-3 grid grid-cols-2  md:grid-cols-3 lg:block'>

                <div>
                    <p className='text-stone-400'>Category</p>
                    <ul>
                        <li
                            onClick={() => setCategory("All")}
                            className='cursor-pointer hover:underline my-1'>All</li>
                        {
                            categories.map((cat: any, index: any) => {
                                return <li
                                    key={index}
                                    className='cursor-pointer hover:underline my-1'
                                    onClick={() => setCategory(cat)}
                                >{cat}</li>
                            })
                        }
                    </ul>
                </div>

                {/* companies  */}
                <div className='mt-3'>
                    <p className='text-stone-400'>Companies</p>
                    <select
                        name="company"
                        id="company"
                        className='mt-2 border-none outline-none bg-slate-200 rounded-sm p-2'
                        onChange={(e) => setCompany(e.target.value)}
                    >
                        <option
                            value={"All"}

                        >All Companies</option>
                        {
                            companies.map((com: any, index: any) => {
                                return <option
                                    key={index}
                                    value={com}

                                >{com}</option>
                            })
                        }
                    </select>
                </div>

                {/* colors  */}
                <div className='mt-3'>
                    <p className='text-stone-400'>Colors</p>
                    <ul className='flex items-center'>
                        <li
                            onClick={() => setColor("All")}
                            className='cursor-pointer hover:underline my-1'>All</li>
                        {
                            colors.map((c: any, index: any) => {
                                if (c) return <li
                                    onClick={() => setColor(c)}
                                    key={index}
                                    style={{ backgroundColor: c }}
                                    className={`cursor-pointer w-6 h-6 rounded-full mx-1 `}></li>
                            })
                        }
                    </ul>
                </div>

                {/* price  */}
                <div className='mt-3'>
                    <p className='mt-2 text-stone-400'>Price</p>
                    <p className='mt-2 '>${price}</p>
                    <input
                        onChange={(e) => setPriceF(e.target.value)}
                        type="range"
                        name=""
                        id=""
                        className='mt-2 '
                        min={200}
                        max={200000}
                        step={50}
                    />
                </div>

                {/* Free Shopping  */}
                <div className='mt-3'>
                    <div className='flex items-center'>
                        <p className=' text-stone-400'>Free Shopping</p>
                        <input type="checkbox" onChange={(e) => setShopping(e.target.checked)} name="" id="" className='mx-10' />
                    </div>
                </div>

                {/* clear Filter  */}
                <div className='mt-3'>
                    <button
                        onClick={() => clearFillter()}
                        className='btn bg-red-600 text-white p-2 rounded-sm'>Clear Filter </button>
                </div>
            </div>

        </div>
    )
}

export default Filter