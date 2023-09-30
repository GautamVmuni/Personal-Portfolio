import React from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact_title">Don't be Shy !</h3>

          <p className="contact_description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className='info_icon' />

              <div>
                <span className="info_title">Mail Me</span>
                <h4 className="info_desc">Gautam.muni.13837@gmail.com</h4>
              </div>
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt className='info_icon' />

              <div>
                <span className="info_title">Call Me</span>
                <h4 className="info_desc">+91 9619526992</h4>
              </div>
            </div>
          </div>

          <div className="contact_socials">
            <a href="https://facebook.com" className="contact_social-link"><FaFacebookF /></a>

            <a href="https://instagram.com" className="contact_social-link"><FaInstagram /></a>

            <a href="https://linkedin.com" className="contact_social-link"><FaLinkedin /></a>
          </div>
        </div>

        <form className="contact_form">
          <div className="form_input-group">
            <div className="form_input-div">
              <input type="text" placeholder='Your Name' className="form_control" />
            </div>

            <div className="form_input-div">
              <input type="text" placeholder='Your Mail' className="form_control" />
            </div>

            <div className="form_input-div">
              <input type="text" placeholder='Your Subject' className="form_control" />
            </div>
          </div>

          <div className="form_input-div">
            <textarea placeholder='Your Message' className="form_control textarea"></textarea>
          </div>

          <button className="button">
            Send Message
            <span className="button_icon contact_button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact