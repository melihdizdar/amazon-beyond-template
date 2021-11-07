import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeCard(props) {
    const {homeCard} = props;
    return (
        <div className="HomeCard" key={homeCard._id}>
            <Link><img src={homeCard.homeImage} alt="homeCard" className="HomeCardImage"/></Link>
            <div className="HomeCardDivider"></div>
            <div className="HomeCardContent">
              <h1>{homeCard.homeHeader}</h1>
              <p>{homeCard.homeText}</p>
            </div>
        </div>
    )
}
