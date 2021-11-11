import React from 'react'
import '../About/styles.css';

export default function TextCartContent(props) {
    const {textCard} = props;
    return (
        <div className="textCart" key={textCard._id}>
            <h1>{textCard.aboutContentHeader}</h1>
            <p>{textCard.aboutContentText}</p>
        </div>
    )
}
