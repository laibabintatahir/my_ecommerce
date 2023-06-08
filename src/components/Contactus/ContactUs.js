import React from "react";
import "./style.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Share Your Query/Critics/Suggestions with Malbus Team.</p>
      <div className="contact-details">
        <p>
          📱 WhatsApp: <a href="tel:+923081245023">+92 308 1245023</a>
        </p>
        <p>
          📧 Email: <a href="mailto:info@malbus.com.pk">info@malbus.com.pk</a>
        </p>
        <p>
          <span style={{ color: "Black", fontWeight: "bold" }}>Address:</span>
          <br />
          Head Office: Plot #2, Industrial Triangle, Humak, Model Town, Islamabad
          <br />
          Outlet: Shop # 254, 2nd Floor, The Centaurus Mall, Islamabad
        </p>
        <p>
        <span style={{ color: "Black", fontWeight: "bold" }}>Opening Hours:</span>


          <br />
          Monday - Thursday, 11:00 AM (PST) - 11:00 PM (PST)
          <br />
          Friday - Sunday, 11:00 AM (PST) - 12:00 AM (PST)
        </p>
        <p>
          You can also use live chat to chat with an operator online by talking with us on{" "}
          <a href="https://www.messenger.com/">Facebook Messenger</a>.
        </p>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <div className="form-group">
          <div className="recaptcha">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
