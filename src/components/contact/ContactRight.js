import React, { useState, useRef } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import emailjs from '@emailjs/browser';

const ContactRight = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  

  const form = useRef();

  const sendEmail = (e) => {

    
    emailjs.init('ydFRIfutd8kB302x4')
    emailjs
      .sendForm('service_k9sh96i', 'template_u0xc4fe', form.current)
      .then(
        () => {
          console.log('Email send successfully');
        },
        (error) => {
          console.log('Failed to send email...', error.text);
        },
      );
  }

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      sendEmail();
      setSuccessMsg(
        `Thank you dear ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <form id='form' ref={form} onSubmit={sendEmail} className="w-[95%] flex flex-col gap-4 lgl:gap-3 py-1 lgl:py-3">
      <input id="fixedInput" type="text" value="Abhi" readOnly style={{display:'none',}} name='to_name'/>

      <div className='flex w-full flex-col lgl:flex-row gap-1 justify-between'>
        <div className="w-full lgl:w-1/2 flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            Your Name
          </label>
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className={`${errMsg === "Username is required!" &&
              "outline-designColor"
              } contactInput`}
            type="text"
            name="from_name"
            id="from_name"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            Your Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={`${errMsg === "Please give your Email!" &&
              "outline-designColor"
              } contactInput`}
            type="email"
            name="from_email"
            id="from_email"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-sm text-gray-400 uppercase tracking-wide">
            Your Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${errMsg === "Message is required!" && "outline-designColor"
              } contactTextArea`}
            cols="15"
            rows="8"
            name="message"
            id="message"
          ></textarea>
        </div>
        <div className="w-full">
          <button
            type='Submit'
            onClick={handleSend}
            className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
          >
            Send Message
          </button>
        </div>
        {errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
            {errMsg}
          </p>
        )}
        {successMsg && !errMsg && (
          <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
            {successMsg}
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactRight;