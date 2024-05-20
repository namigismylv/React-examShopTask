import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = ({dataSiteItem}) => {
  return (
    <div className="col-4">
        <Link to={`/details/${dataSiteItem._id}`}>
        <div className="card">
            <div className="card__top">
                <img src={dataSiteItem.image} alt="" />
            </div>
            <div className="card__body">
                <h3>
                <Link to="">{dataSiteItem.title}</Link>
                </h3>
                <p>{dataSiteItem.desc}</p>
                <p className='card__price'>${dataSiteItem.price}</p>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Card
