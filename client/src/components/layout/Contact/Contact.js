import React from 'react'
import TextField from './TextField'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-left-container'>
                <div className='contact-top-container'>
                    <span>Get in Touch</span>
                    <h1>Let's Chat, Reach Out to Us</h1>
                    <p>Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours</p>
                </div>
                <div className='contact-bottom-container'>
                    <div className='contact-names'>
                        <TextField label={"First Name"} />
                        <TextField label={"Last Name"} />
                    </div>
                    <div className='contact-email'>
                        <TextField label={"Email address"} />
                    </div>
                    <div className='contact-message'>
                        <div className='label-container'>
                            <label className='label-text'>
                                Message
                            </label>
                            <textarea type='text' placeholder={"Leave us a message"} rows={4} className='text-field-input' />
                        </div>
                    </div>
                    <button className='contact-send-button'>Send Message</button>
                </div>
            </div>
            <div className='contact-right-container'>
                <div className='contact-hero-image'>
                    <img src="https://cdn.dribbble.com/users/2317423/screenshots/14013635/media/60c5f38a3ba265a8112e236e43bc1e35.jpg?resize=400x0" alt="contact page hero image" />
                </div>
                <div className='contact-information-box'>
                    <div className='contact-mail'>
                        <span className='mail-icon'>
                            <img src="https://i.ibb.co/PtkvJYj/mail-icon.png" alt="mail-icon" />
                        </span>
                        <div>
                            <h1>Email</h1>
                            <p>techteam787@gmail.com</p>
                        </div>
                    </div>
                    <div className='contact-phone'>
                        <span className='phone-icon'>
                            <img src="https://i.ibb.co/0YGfhsh/contact-phone-icon.png" alt="phone-icon" />
                        </span>
                        <div>
                            <h1>Phone</h1>
                            <p>+91 1234567890</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact