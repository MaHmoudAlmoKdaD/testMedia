import BodyContent from "../../components/checkout/BodyContent";
import Header from "../../components/header/Header";
import NavigationBar from "../../components/navigationBar/NavigationBar";

import React, { useContext } from 'react'

type Props = {}

const Checkout = (props: Props) => {
    


    return (
        <div className='w-full'>
            <Header />
            <NavigationBar />
            <BodyContent/>
        </div>
    )
}

export default Checkout