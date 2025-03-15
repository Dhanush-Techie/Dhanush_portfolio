import React, { useRef, useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";  // Added EmailJS
import "./style.scss";

const Contact = () => {
  const formRef = useRef(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",  // Replace with EmailJS Service ID
        "your_template_id", // Replace with EmailJS Template ID
        formRef.current,
        "your_public_key"   // Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setIsSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.log("Error sending email:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate play duration={1} start={{ transform: "translateX(-200px)" }} end={{ transform: "translateX(0px)" }}>
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate play duration={1} start={{ transform: "translateX(200px)" }} end={{ transform: "translateX(0px)" }}>
          <form ref={formRef} className="contact__content__form" onSubmit={sendEmail}>
            <div className="contact__content__form__controlswrapper">
              <div>
                <input required name="name" className="inputName" type="text" />
                <label className="nameLabel">Name</label>
              </div>
              <div>
                <input required name="email" className="inputEmail" type="email" />
                <label className="emailLabel">Email</label>
              </div>
              <div>
                <textarea required name="message" className="inputDescription" rows="5" />
                <label className="descriptionLabel">Message</label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>

          {isSent && <p className="success-message">Message sent successfully! ✅</p>}
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
