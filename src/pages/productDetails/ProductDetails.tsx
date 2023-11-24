import React, { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import NavigationBar from "../../components/navigationBar/NavigationBar"
import BodyContent from "../../components/productDetails/BodyContent"

type Props = {}

const ProjectDetails = () => {



  return (
    <div className='w-full'>
      <Header />
      <NavigationBar />
      <BodyContent />
    </div>
  )
}

export default ProjectDetails