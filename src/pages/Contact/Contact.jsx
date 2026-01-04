import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaSquareXTwitter,
  FaDev,
  FaArrowRight,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey })
      .then(() => {
        setStatus("success");
        form.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const socials = [
    { icon: <FaGithub />, link: "https://github.com/matin676" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/matin-imam/" },
    { icon: <FaDev />, link: "https://dev.to/matin676" },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="contact-wrapper">
          {/* Contact Info */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Let's Talk</h3>
            <p>
              Have a project in mind or want to collaborate? I'm always open to
              discussing new ideas and opportunities.
            </p>

            <div className="info-item">
              <span>Email</span>
              <a href="mailto:matinimam77@gmail.com">matinimam77@gmail.com</a>
            </div>

            <div className="info-item">
              <span>Location</span>
              <p>Gujarat, India</p>
            </div>

            <div className="social-links">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="user_msg"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn-primary submit-btn ${status}`}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                {status === "idle" && <FaArrowRight />}
              </button>

              {status === "success" && (
                <p className="success-msg">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="error-msg">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        <footer className="footer-copyright">
          <p>© {new Date().getFullYear()} Matin Imam. All Rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
}
