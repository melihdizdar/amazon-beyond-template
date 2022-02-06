import React from 'react'

export default function HomeCard(props) {
    const {homeCard} = props;
    return (
        <div className="uk-card uk-width-large" key={homeCard._id}>
            <div className="uk-card-media-top uk-height-medium uk-width-1-1">
                <img src={homeCard.homeImage} alt="homeCard" className="uk-width-1-1 uk-height-1-1" uk-img="true"/>
            </div>
            <h3 className="uk-card-header uk-text-center uk-padding-remove-horizontal uk-text-muted uk-text-bold uk-margin-remove">{homeCard.homeHeader}</h3>
            <div className="uk-text-center">
                <p>{homeCard.homeText}</p>
            </div>
        </div>
    )
}
