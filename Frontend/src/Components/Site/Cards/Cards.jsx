import React from "react";
import Card from "../Card/Card";
import './Cards.css'

const Cards = ({ data }) => {
  return (
    <>
      <div className="container">
        <div className="row" id="cardsRow">
            {
                data.map((dataSiteItem,index)=>{
                    return(
                        <Card dataSiteItem={dataSiteItem} key={index}/>
                    )
                })
            }
        </div>
      </div>
    </>
  );
};

export default Cards;
