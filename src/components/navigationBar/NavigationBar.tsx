import React from "react";
import { Link } from "react-router-dom";

type Props = {}

const NavigationBar = (props: Props) => {


    return (
        <div className='bg-stone-300'>
            <div className='container mx-auto px-4 '>
                <div className='h-20 flex items-center'>
                    <Link to={'#'} className="text-stone-600 hover:underline 2text-lg font-bold">Home</Link>
                    <Link to={'#'} className="text-stone-600 hover:underline 2text-lg font-bold">/ products</Link>

                </div>

            </div>
        </div>
    )
}

export default NavigationBar