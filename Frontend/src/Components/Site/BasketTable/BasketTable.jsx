import React from 'react'
import BasketTableItem from '../BasketTableItem/BasketTableItem'
import './BasketTable.css'
const BasketTable = ({basketItems}) => {
  return (
    <>
     <table class="table table-bordered mt-5 mb-5">
        <thead>
          <tr>
            <th className='basketTable__th' scope="col">Image</th>
            <th className='basketTable__th' scope="col">Product</th>
            <th className='basketTable__th' scope="col">Price</th>
            <th className='basketTable__th' scope="col">Quantity</th>
            <th className='basketTable__th' scope="col">Total</th>
            <th className='basketTable__th' scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            basketItems.map((basketItem,index)=>{
                return(

                    <BasketTableItem basketItem={basketItem} key={index} index={index}/> 
                )
            })
          }
        </tbody>
      </table> 
    </>
  )
}

export default BasketTable
