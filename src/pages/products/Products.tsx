import React from 'react'
import Header from '../../components/header/Header'
import NavigationBar from '../../components/navigationBar/NavigationBar'
import BodyContent from '../../components/products/BodyContent'

type Props = {}

const Products = () => {
  return (
    <div className='w-full'>
      <Header />
      <NavigationBar />
      <BodyContent />
    </div>
  )
}

export default Products