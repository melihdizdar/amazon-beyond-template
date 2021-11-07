import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeCard(props) {
    const {homeCard} = props;
    return (
        <div className="card" key={homeCard._id}>
            <Link><img src={homeCard.homeImage} className="card__img" alt="homeCard"/></Link>
            <div className="card__body">
                <h2 className="card__title">{homeCard.homeHeader}</h2>
                <p className="card__description">{homeCard.homeText}</p>
            </div>
        </div>
    )
}
