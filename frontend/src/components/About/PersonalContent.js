import React from 'react'

export default function PersonalContent(props) {
    const {personalContent} = props;
    return (
        <div key={personalContent._id}>
            <section className="uk-section uk-background-primary">
                <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                    <h4 className="uk-margin-remove">{personalContent.aboutHeader}</h4>
                    <h1 className="uk-margin-remove">{personalContent.aboutHeader2}</h1>
                </div>
            </section>
            <section className="uk-section">
                <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                    <h1 className="uk-text-muted uk-text-bold">{personalContent.aboutSlogan}</h1>
                    <p>{personalContent.aboutSlogan2}</p>
                </div>
            </section>
            <section className="uk-section uk-background-primary">
                <div className="uk-container uk-container-xlarge">
                    <div className="uk-child-width-1-2@m" uk-grid="true" uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 300; repeat:true;">
                        <div className="uk-light uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-flex-last uk-flex-first@m">
                            <ul>
                                <li>{personalContent.aboutTitle}</li>
                                <li>{personalContent.aboutNameSurname}</li>
                                <li>{personalContent.aboutBioContent}</li>
                                <li><small>{personalContent.aboutBioContent2}</small></li>
                            </ul>
                        </div>
                        <div className="uk-flex uk-flex-first uk-flex-last@m">
                            <img src={personalContent.aboutImage} alt="img" className="uk-width-1-1 uk-border-rounded" uk-img="true"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="uk-section">
                <div className="uk-container" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                    <p>{personalContent.aboutBioQuotation}</p>
                </div>
            </section>
        </div>
    )
}
