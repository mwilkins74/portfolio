import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0zwjpy5",
        "template_auoqsvj",
        form.current,
        "N6F4wFJmBFT4n4W8w"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>markwilkins86@gmail.com</h5>
            <a
              href="mailto:markwilkins86@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Mark Wilkins Profile</h5>
            <a
              href="https://www.linkedin.com/in/mark-wilkins-84565666/"
              target="_blank"
              rel="noreferrer"
            >
              Check it out
            </a>
          </article>
          {/* <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>markwilkins86@gmail.com</h5>
            <a href="mailto:markwilkins86@gmail.com">Send a message</a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name: "
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email: "
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message: "
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
