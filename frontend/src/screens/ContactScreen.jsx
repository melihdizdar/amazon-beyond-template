import React from 'react'
import emailjs from 'emailjs-com';

export default function ContactScreen() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_pcn9u54', 'template_jz0a62a', e.target, 'user_Rks5kb5pOEODsYxIyO3Og')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <>
            <section className="uk-section uk-background-primary">
                <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                    <h4 className="uk-margin-remove">Contact Us</h4>
                    <h1 className="uk-margin-remove">How can I reach you?</h1>
                </div>
            </section>
            <section className="uk-section">
                <div className="uk-container uk-text-center" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi earum deserunt repellat debitis, expedita esse? Totam magni nobis error.</small></p>
                </div>
            </section>
            <section className="uk-section">
                <div className="uk-container">
                    <form className="uk-grid-small uk-width-1-2@m uk-flex-center uk-margin-auto" uk-grid="true" onSubmit={sendEmail} id="contact-form" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                        <div className="uk-width-1-2@m">
                            <div className="uk-inline uk-width-1-1@m">
                                <div className="uk-form-icon" href="#" uk-icon="icon: user"></div>
                                <input className="uk-input" type="text" placeholder="Full Name" name="name"/>
                            </div>
                        </div>
                        <div className="uk-width-1-2@m">
                            <div className="uk-inline uk-width-1-1@m">
                                <div className="uk-form-icon" href="#" uk-icon="icon: mail"></div>
                                <input className="uk-input" type="email" placeholder="E-Mail" name="email"/>
                            </div>
                        </div>
                        <div className="uk-width-1-1@m">
                            <textarea className="uk-textarea resize" rows="5" placeholder="Message" name="message"></textarea>
                        </div>
                        <div className="uk-width-1-1@m uk-flex-center uk-flex">
                            <button className="uk-button uk-button-default" type="submit">SEND</button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="uk-section">
                <div className="uk-child-width-1-2@m" uk-grid="true" uk-scrollspy="cls: uk-animation-fade; delay: 300; repeat:true;">
                    <div className="uk-flex uk-flex-column uk-flex-center uk-flex-middle uk-flex-last uk-flex-first@m">
                        <ul>
                            <li><small>INSTAGRAM</small></li>
                            <li><h4 className="uk-text-muted uk-text-bold">Lorem ipsum dolor sit amet.</h4></li>
                            <li><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></li>
                            <li><a href="https://www.instagram.com/">@BRAND</a></li>
                        </ul>
                    </div>
                    <div className="uk-flex uk-flex-first uk-flex-last@m">
                        <img src="https://cdn.shopify.com/s/files/1/0573/5222/4919/files/Instagram-the-level-collective_800x_3854d945-b500-41b6-8db0-24a926e8e245_800x.jpg?v=1633538032" alt="img" className="uk-width-1-1" uk-img="true"/>
                    </div>
                </div>
            </section>
        </>
    )
}
