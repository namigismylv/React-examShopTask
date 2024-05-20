import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import {Helmet} from "react-helmet";
import MainContext from "../../../Context/Context";
const Details = () => {
  const [item, setItem] = useState({});
  const {id}=useParams()
  useEffect(() => {
    axios.get(`http://localhost:5000/home/${id}`).then((res) => {
      setItem(res.data);
    });
  }, []);
  const {addToBasket}=useContext(MainContext)
  return( 
<>
    <Helmet>
    <title>{item.title}</title>
    </Helmet>
  <div className="detail">
    <div className="detail__img">
        <img src={item.image} alt="" />
    </div>
    <div className="detail__info">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <p>${item.price}</p>
        <button className="btn btn-primary" onClick={()=>addToBasket(item)} >Add To Basket</button>
    </div>
  </div>

</>
  )
};

export default Details;
