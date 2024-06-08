import React, { useState } from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Initialize EmailJS with your public key
  emailjs.init("UBESli--STIfarrmQ");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_mv3feyj";
    const templateId = "template_7ku4t9o";
    const publicKey="UBESli--STIfarrmQ"

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Saad Hashmi",
      message: msg,
    };

    console.log(templateParams); // Log the parameters for debugging

    emailjs.send(serviceId, templateId, templateParams,publicKey)
      .then((response) => {
        console.log("Email sent successfully", response);
        alert('Message sent successfully!');
        setName("");
        setEmail("");
        setMsg("");
      })
      .catch((error) => {
        console.log("Email not sent", error);
        alert('Failed to send the message, please try again later.');
      });
  };

  return (
    <div
     id="contact"
      data-aos="fade-left"
      className="flex flex-col lg:flex-row lg:items-center mb-20 lg:mb-36 mt-20"
    >
      <span className="uppercase text-3xl lg:text-2xl font-bold gradient-text mb-8 lg:mb-0 rotate-0 lg:-rotate-90">
        Get Started!
      </span>
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl gradient-text mb-5 lg:mb-10">
            Contact me
          </h1>
          <div className="flex flex-col gap-2">
            <h1
              
              className="text-gray-500 font-mono  text-lg lg:text-2xl"
            >
              saadhashmi372@gmail.com
            </h1>
            <h1
            
              className="text-gray-500 font-mono  text-lg lg:text-2xl"
            >
              +91 7388847071
            </h1>
          </div>
          <div className="flex gap-2 mt-2">
            <a href="https://github.com/saadhashmi03">

            <AiFillGithub className="text-white text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/saadhash1/">
            <AiFillLinkedin className="text-white text-2xl" />

            </a>
          
          </div>
          <h2 className="text-2xl font-bold font-mono text-white text-center">
            OR
          </h2>
        </div>
        <div>
          <form className="flex flex-col p-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Enter your name"
              className="bg-transparent p-3 outline-none border focus:border-gray-500 focus:pl-8 transition-all duration-100 rounded-lg border-gray font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent p-3 outline-none border focus:border-gray-500 focus:pl-8 transition-all duration-100 rounded-lg border-gray font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              className="bg-transparent input-field p-3 outline-none border focus:border-gray-500 focus:pl-8 transition-all duration-100 rounded-lg border-white gradient-text font-mono text-lg lg:text-2xl mb-5 lg:mb-10 w-full lg:w-[30vw]"
              placeholder="Enter your message"
              onChange={(e) => setMsg(e.target.value)}
              value={msg}
            />
            <button
              type="submit"
              className="submit-button px-3 py-2 text-lg lg:text-2xl font-bold rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
