import React from "react";
import Card from "../card/Card"
import HeaderCards from "./HeaderCards"

type Props = {
    data: any;
    sortByF: any;
}

const Cards = ({ data,sortByF }: Props) => {
    return (
        <div className="w-10/12 mt-4 lg:mt-0">
            <HeaderCards sortByF={sortByF}/>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    data.map((cardData: any) => {
                        return <Card
                        
                            id={cardData.id}
                            image={cardData.image}
                            price={cardData.price}
                            name={cardData.name}
                        />
                    })
                }
                
            </div>
        </div>
    )
}

export default Cards