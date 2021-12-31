import { FC } from "react";

const Contact: FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form action="https://formspree.io/xwkrzaro" method="POST">
        <div className="name-email">
          <input placeholder="Name" id="name" type="text" name="name" />
          <input placeholder="Email" id="email" type="email" name="_replyto" />
        </div>
        <textarea
          placeholder="Message"
          id="message"
          name="message"
          className="wide"
        />

        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
