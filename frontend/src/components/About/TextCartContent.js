import React from 'react'

export default function TextCartContent(props) {
    const {textCard} = props;
    return (
        <div key={textCard._id}>
            <h1 className="uk-text-muted uk-text-bold">{textCard.aboutContentHeader}</h1>
            <p>{textCard.aboutContentText}</p>
        </div>
    )
}
