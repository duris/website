import Header from "../components/Header"
import Footer from "../components/Footer"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import Mailer from "../components/mailer"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.YOUR_SERVICE_ID, process.env.YOUR_TEMPLATE_ID, form.current, process.env.YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          if(result.text === "OK") {
            console.log("Do something")
          }
      }, (error) => {
          console.log(error.text);
      });
  };

 return(
  <>
  <Head>
  <title>Contact | duris.io</title>
  <meta name="contact form for duris.io" content="Generated by create-t3-app" />
</Head>  
 <Header/>
 <main>
 <div className="text-4xl text-center text-gray-500 border-b mx-auto">
  <h1 className="py-10 pb-4">Contact</h1>
  <h2 className=" text-lg py-4 pb-10 font-thin">Located near Columbus, OH</h2>
  
  </div>
<div className="grid grid-cols-1 sm:grid-cols-2 mx-auto float-none">
  <div className=" float-right m-10">
  <Image 
      src="https://ik.imagekit.io/zhmk2wx4u/Screen_Shot_2022-08-09_at_4.53.43_PM_WT1r4A7ov.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660078449773" 
      width={630} height={280} 
      alt="showcase website" 
      objectFit="cover"
      className="bg-gray-100 rounded-[40px] shadow-sm float-right inline-block" 
      />      
  </div>
  <div>

  <div className="p-8 mx-auto w-full">      
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" className="border w-full"/>
          <br/>
          <label>Email</label>
          <input type="email" name="user_email" className="border w-full"/>
          <br/>
          <label>Message</label>
          <textarea name="message" rows="4" className="border w-full"/>
          <br/>
          <input type="submit" value="Send" className="bg-blue-400 p-2 px-4 rounded-lg text-white w-full mt-4 cursor-pointer"/>
        </form>
      </div>

  </div>

  </div>
 </main>
 <Footer />
 </>
 )
}

