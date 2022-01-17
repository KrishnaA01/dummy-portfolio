import React,{ useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";

export default function Contact() {

    const [message, setMessage]= useState(false)


    const form = useRef();

    const handleSubmit = (e)=> {
        e.preventDefault()
        setMessage(true)
    

    emailjs.sendForm('service_m3ti1cr', 'template_9unabmt', form.current, 'user_h6aEE0fYeqZjGIbw6mnQi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };


    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/design.png" alt="" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="Email" name="user_email"/>
                    <textarea placeholder="Message" name="message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span> Thanks, I will get back to you ASAP &#128578; </span>}
                </form>
            </div>
        </div>
    )
}

