import React, { useContext, useState } from "react";
import "./BasketTableItem.css";
import MainContext from "../../../Context/Context";
const BasketTableItem = ({ basketItem, index }) => {
  const { addToBasket,decreaseButton,removeFromBasket} = useContext(MainContext);
  
  return (
    <>
      <tr>
        <td className="basketTableItem__td">
          <img src={basketItem.item.image} width="70px" alt="" />
        </td>
        <td className="basketTableItem__td">{basketItem.item.title}</td>
        <td className="basketTableItem__td">${basketItem.item.price}</td>
        <td className="basketTableItem__td">
          <button onClick={()=>{decreaseButton(basketItem.item)}}>-</button>
          {basketItem.count}
          <button onClick={()=>{addToBasket(basketItem.item)}}>+</button>
        </td>
        <td className="basketTableItem__td">${basketItem.totalPrice}</td>
        <td className="basketTableItem__td">
          <button className="btn  btn-sm" onClick={()=>{removeFromBasket(basketItem)}}>X</button>
        </td>
      </tr>
    </>
  );
};

export default BasketTableItem;
