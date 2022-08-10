
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Mailer() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  return(
    <div className="p-8 mx-auto w-full">      
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" className="border w-full"/>
          <br/>
          <label>Email</label>
          <input type="email" name="user_email" className="border w-full"/>
          <br/>
          <label>Message</label>
          <textarea name="message" rows="4" className="border w-full"/>
          <br/>
          <input type="submit" value="Send" className="bg-blue-400 p-2 px-4 rounded-lg text-white w-full mt-4"/>
        </form>
      </div>
    )
    }
}

