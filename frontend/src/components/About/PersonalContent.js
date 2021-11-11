import React from 'react'
import '../About/styles.css'

export default function PersonalContent(props) {
    const {personalContent} = props;
    return (
        <div key={personalContent._id}>
            <div className="headerStage">
                <ul>
                    <li><h4>{personalContent.aboutHeader}</h4></li>
                    <li><h1>{personalContent.aboutHeader2}</h1></li>
                </ul>
            </div>
            <div className="centerText">
                <h1>{personalContent.aboutSlogan}</h1>
                <p>{personalContent.aboutSlogan2}</p>
            </div>
            <div className="imageText">
                <div className="left"></div>
                <div className="center">
                    <div className="left">
                        <ul>
                            <li>{personalContent.aboutTitle}</li>
                            <li>{personalContent.aboutNameSurname}</li>
                            <li>{personalContent.aboutBioContent}</li>
                            <li><small>{personalContent.aboutBioContent2}</small></li>
                        </ul>
                    </div>
                    <div className="right">
                        <img src={personalContent.aboutImage} alt="img"/>
                    </div>
                </div>
                <div className="right"></div>
            </div>
            <div className="textContent">
                <p>{personalContent.aboutBioQuotation}</p>
            </div>
        </div>
    )
}
