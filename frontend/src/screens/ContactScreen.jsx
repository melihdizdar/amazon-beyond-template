import React from 'react'
import emailjs from 'emailjs-com';
import "../screens/Styles/Contact/contact.css";

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
        <div className="contact">
            <div className="headerStage">
                <h4>Contact Us</h4>
                <h1>How can I reach you?</h1>
            </div>
            <div className="mainContent">
                <div className="text">
                    <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed modi earum deserunt repellat debitis, expedita esse? Totam magni nobis error.</small></p>
                </div>
                <div className="formStage">
                    <form onSubmit={sendEmail} id="contact-form">
                        <div className="nameContent">
                            <input type="text" placeholder="Your Name" name="name"></input>
                            <input type="email" placeholder="Email" name="email"></input>
                        </div>
                        <textarea name="message" form="contact-form" placeholder="Message" rows="5"></textarea>
                        <button type="submit">SEND</button>
                    </form>
                </div>
                <div className="splitContent">
                    <div className="left">
                        <ul>
                            <li><small>INSTAGRAM</small></li>
                            <li><h4 className="uk-text-muted uk-text-bold">Lorem ipsum dolor sit amet.</h4></li>
                            <li><small>Lorem ipsum dolor sit amet consectetur adipisicing.</small></li>
                            <li><a href="https://www.instagram.com/melihdizdarr/">@BRAND</a></li>
                        </ul>
                    </div>
                    <div className="right">
                        <img src="https://cdn.shopify.com/s/files/1/0573/5222/4919/files/Instagram-the-level-collective_800x_3854d945-b500-41b6-8db0-24a926e8e245_800x.jpg?v=1633538032" alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
