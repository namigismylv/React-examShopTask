import React, { useContext } from 'react'
import MainContext from '../../../Context/Context'
import Table from '../../../Components/Admin/Table/Table'
import { Helmet } from 'react-helmet'

const Products = () => {
    const {data}=useContext(MainContext)
  return (
    <>
      <Helmet>
        Products
      </Helmet>
      <Table data={data}/>
    </>
  )
}

export default Products
