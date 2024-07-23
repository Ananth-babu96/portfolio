import React, { useEffect, useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { FaRegCircleCheck } from "react-icons/fa6";
import Loading from "../../Components/Loading/Loading";

const ContactPage = () => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   const form = useRef();

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const [success, setSuccess] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   //success message popup----------------------------------------------
   useEffect(() => {
      if (success) {
         document.querySelector(".wrapper").style.overflowY = "hidden";
      } else {
         document.querySelector(".wrapper").style.overflowY = "scroll";
      }

      return () => {
         document.querySelector(".wrapper").style.overflowY = "scroll";
      };
   }, [success]);
   //-----------------------------------------------------------------
   // form submission------------------------------------------------
   const handleSubmit = (e) => {
      e.preventDefault();

      if (name && email && emailRegex.test(email) && message) {
         setIsLoading(true);

         emailjs
            .sendForm("service_krg885k", "template_kiu2kib", form.current, {
               publicKey: "kLT-SV_WOL0QSPbv8",
            })
            .then(
               () => {
                  console.log("SUCCESS!");
                  setSuccess(true);
                  setIsLoading(false);
                  setName("");
                  setEmail("");
                  setMessage("");
               },
               (error) => {
                  console.log("FAILED...", error.text);
               }
            );
      } else {
         return;
      }
   };
   //-----------------------------------------------------------------------
   return (
      <>
         <div className={`success-message ${success ? "show" : ""}`}>
            <div className="message-box">
               <div className="icon">
                  <FaRegCircleCheck />
               </div>
               <p>
                  Thank you for reaching out! I've received your message and
                  will respond as soon as possible. Have a great day!
               </p>
               <button onClick={() => setSuccess(false)}>close</button>
            </div>
         </div>
         <div className="container contact">
            <div className="text-zone">
               <p className="title">Contact</p>
            </div>
            <form ref={form} onSubmit={handleSubmit}>
               <p className="form-text">
                  Have a project for me? Any questions about something I've
                  built? I'd love to hear from you, give me a shout by using the
                  form below if you'd like to get in contact with me.
               </p>
               <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  autoComplete="off"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
               />
               <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
               />
               <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
               ></textarea>
               <button>{isLoading ? <Loading /> : "send"}</button>
            </form>
         </div>
      </>
   );
};

export default ContactPage;
