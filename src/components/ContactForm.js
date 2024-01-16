import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me! You can contact me through the following channels:
      </p>
      <ul>
        <li>Email: <a href="mailto:gurami.khvichia.1@btu.edu.ge">gurami.khvichia.1@btu.edu.ge</a></li>
        <li>Phone: <a href="tel:+995555243614">+995 555 24 36 14</a></li>
        <li>GitHub: <a href="https://github.com/GugaKhvichia1" target="_blank">github.com/GugaKhvichia1</a></li>
      </ul>
    </div>
  );
};

export default Contact;