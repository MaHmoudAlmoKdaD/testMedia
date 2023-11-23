import React from "react";
import { Link } from "react-router-dom";

type Props = {
    id:string;
    image:string;
    price:number;
    name:string;
}

const Card = ({id,image,price,name}: Props) => {
    return (
        <Link to={`/products/product-details/${id}`} className="relative cursor-pointer" key={id}>
            <img
                className="rounded-lg w-full h-[200px]"
                src={image}
                alt="imageProduct" />
            <div className="mt-4 flex justify-between items-center">
                <p>{name}</p>
                <p className="text-stone-500 font-bold">${price}</p>
            </div>

        </Link>
    )
}

export default Card