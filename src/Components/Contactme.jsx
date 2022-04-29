import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contactme = () => {
  const form = useRef();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4gyu37q",
        "template_vfx05gc",
        form.current,
        "MPvLunc68V3fjxHSt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setEnteredEmail("");
    setEnteredMessage("");
    setEnteredName("");
  };
  return (
    <section className="section aboutme" id="contact" style={{ paddingTop: 0 }}>
      <h3 className="h3">Contact Me</h3>
      <p className="subtitle-1 subtitle">
        😊 Please Drop a message, let's connect, will reach out as soon as
        possible.
      </p>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="form-input">
          <input
            type="text"
            name="from_name"
            value={enteredName}
            placeholder="First Name"
            onChange={(e) => setEnteredName(e.target.value)}
            required
          />
          <input
            type="email"
            name="from_email"
            value={enteredEmail}
            placeholder="Email"
            onChange={(e) => setEnteredEmail(e.target.value)}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          value={enteredMessage}
          rows="10"
          onChange={(e) => setEnteredMessage(e.target.value)}
        />
        <input type="submit" className="btn button" value="Send/>" />
      </form>
    </section>
  );
};

export default Contactme;
