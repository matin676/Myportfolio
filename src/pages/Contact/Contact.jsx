import React, { useRef, useState } from "react";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa6";
import moment from "moment";
import emailjs from "@emailjs/browser";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

import "./Contact.css";

const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

export default function Contact() {
  const year = moment().format("YYYY");
  const form = useRef();
  const [confirmMsg, setConfirmMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("Success");
          setConfirmMsg("Message sent 🤗");
          form.current.reset();
        },
        (error) => {
          alert("OOPS! SOMETHING HAS FAILED...", error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact_content">
        <div className="left-contact">
          <AnimatedOnScroll animationIn="fadeIn" animationInDuration={600}>
            <p className="big-heading">
              Let's make something amazing together.
            </p>
            <p className="smaller-text">
              Start by <a href="#contact">saying hi</a>
            </p>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="zoomIn" animationInDuration={600}>
            <form ref={form} onSubmit={sendEmail}>
              <div className="form_content">
                <label>Name: </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required
                />
              </div>
              <div className="form_content">
                <label>Email: </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
                />
              </div>
              <div className="form_content form_content-area">
                <label>Message here: </label>
                <textarea
                  name="user_msg"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <p className="confirm_msg">{confirmMsg}</p>
              <button type="submit" value="Send">
                Send
                <FaArrowRight className="icon" />
              </button>
            </form>
          </AnimatedOnScroll>
        </div>
        <AnimatedOnScroll animationIn="slideInUp" animationInDuration={600}>
          <div className="right-contact">
            <span>Information</span>
            <p className="address">
              Opposite sabjail, hmt., Gujarat, India - 383001
            </p>
            <p className="email">matinimam77@gmail.com</p>
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#projects">works</a>
              </li>
              <li>
                <a href="#about">skills</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </AnimatedOnScroll>
      </div>
      <footer className="footer">
        <div className="copyright">
          <a href="/">
            Matin <span>Imam</span>
          </a>
          <div>&copy; {year}. All Rights Reserved</div>
        </div>
        <div className="socials">
          <div className="social-icon">
            <a
              href="https://github.com/matin676"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/matinimam/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.facebook.com/matin.imam"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
