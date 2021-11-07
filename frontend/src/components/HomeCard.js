import React from 'react'

export default function HomeCard(props) {
    const {homeCard} = props;
    return (
        <div className="HomeCard" key={homeCard._id}>
            <img src={homeCard.homeImage} alt="homeCard" className="HomeCardImage"/>
            <div className="HomeCardDivider"></div>
            <div className="HomeCardContent">
                <h1>{homeCard.homeHeader}</h1>
                <p>{homeCard.homeText}</p>
            </div>
        </div>
    )
}
