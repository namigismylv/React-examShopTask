import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ROUTES from './Routes/Routes'
import MainContext from './Context/Context'
import { useEffect, useState } from 'react'
import axios from 'axios';
function App() {
  const [data,setData]=useState([])
  const [basketItems,setBasketItems]=useState(localStorage.getItem("basketItems")? JSON.parse(localStorage.getItem("basketItems")):[])
  const routes=createBrowserRouter(ROUTES)
  useEffect(()=>{
    axios.get("http://localhost:5000/home").then((res)=>{
      setData(res.data)
      console.log(res);
    })  
  },[])
  useEffect(()=>{
    localStorage.setItem("basketItems",JSON.stringify(basketItems))
  },[basketItems])
  function addToBasket(item){
    const target = basketItems.find(x=>x.item._id == item._id )
    if(target){
      target.count+=1
      target.totalPrice+=item.price
      setBasketItems([...basketItems])
    }
    else{
      let newBasketItem={
        item:item,
        count:1,
        totalPrice:item.price
      }
      setBasketItems([...basketItems,newBasketItem])
    }

  }
  function decreaseButton(item){
    const target=basketItems.find(x=>x.item._id==item._id)
    if(target>=0){
      target.count-=1
      target.totalPrice-=item.price
      setBasketItems([...basketItems])
    } 
  }
  function removeFromBasket(item){
    setBasketItems([...basketItems.filter(x=>x.item._id !== item._id)])
  }
  const contextData={
    data,setData,basketItems,setBasketItems,addToBasket,decreaseButton,removeFromBasket
  }
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={routes}/>
    </MainContext.Provider>
  )
}

export default App
