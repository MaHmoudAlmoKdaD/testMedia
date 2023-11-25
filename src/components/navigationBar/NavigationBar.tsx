import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    titleProduct?: string;
    checkout?: boolean;
}

type LinkType = {
    text: string;
    link: string
}



const NavigationBar = ({ titleProduct, checkout }: Props) => {

    const [links, setLinks] = useState<LinkType[]>([])

    useEffect(() => {
        if (titleProduct) {
            setLinks([
                {
                    text: 'home',
                    link: '#'
                },
                {
                    text: 'Products',
                    link: '/products'
                },
             

            ])
        } else if (checkout) {
            setLinks([
                {
                    text: 'home',
                    link: '#'
                },
                {
                    text: 'Products',
                    link: '/products'
                },
                {
                    text: 'Checkout',
                    link: '#'
                },

            ])
        }

        else {
            setLinks([
                {
                    text: 'home',
                    link: '#'
                },
                {
                    text: 'Products',
                    link: '/products'
                },
            ]
            )
        }


    }, [])



    return (
        <div className='bg-stone-400'>
            <div className='container mx-auto px-4 '>

                <ul className="h-20 flex items-center overflow-hidden">
                    {links?.map((link: LinkType, index: number) => {
                        return (
                            <li
                                key={link?.link + index}
                                className={`flex items-center  ${index > 0 && "ml-8"} ${index === links.length - 1 ? "text-white" : "text-yellow-400"}`}
                            >
                                {index > 0 &&
                                    <span className='mr-1'>/</span>
                                }
                                <Link
                                    to={link?.link}
                                    className={`text-stone-500 hover:underline 2text-lg font-bold`}
                                >
                                    {link?.text}
                                </Link>
                            </li>
                        )
                    })}

                </ul>

            </div>
        </div>
    )
}

export default NavigationBar