import "@styles/sections/Contact.scss";
import SectionTitle from "../components/Common/SectionTitle";
import { useRef } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import emailjs from "@emailjs/browser";
import Button from "../components/Common/Button";

const Contact = () => {
  const form = useRef();
  const { ref, inView } = useScrollAnimation(0.2);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )

      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },

        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        },
      );
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`contact ${inView ? "start-animation" : ""}`}
    >
      <SectionTitle
        title="Contact"
        highlight="Me"
        subtitle="Let’s connect and collaborate. Reach out for opportunities and ideas."
      />
      <div className="contact__container">
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="input-box">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
          </div>

          <div className="input-box">
            <input
              type="phone"
              name="phone"
              placeholder="Mobile Number"
              required
            ></input>
            <input
              type="text"
              name="subject"
              placeholder="Subject For"
              required
            ></input>
          </div>
          <div className="textarea-box">
            <textarea
              name="message"
              placeholder="Message"
              cols="30"
              rows="8"
              required
            ></textarea>
          </div>

          <div className="contact__buttons">
            <Button type="submit" className="contact__btn">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
