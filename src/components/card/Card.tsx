import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { Link } from "react-router-dom";

type Props = {
    id: string;
    image: string;
    price: number;
    name: string;
}

const Card = ({ id, image, price, name }: Props) => {
    return (
        <Link to={`/products/product-details/${id}`} className="relative cursor-pointer group" key={id}>
            <div className="relative">
                <img
                    className="rounded-lg w-full h-[200px]"
                    src={image}
                    alt="imageProduct"
                />
                <div className="bg-stone-400 absolute top-20 left-32 rounded-lg w-10 h-10 justify-center items-center group-hover:flex hidden">
                    <FontAwesomeIcon className="text-white" icon={faMagnifyingGlass} />
                </div>
                <div className="rounded-lg w-full h-full absolute bottom-0 left-0 transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-screen z-10 bg-[#00000066]"></div>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <p>{name}</p>
                <p className="text-stone-500 font-bold">${price}</p>
            </div>
        </Link>

    )
}

export default Card