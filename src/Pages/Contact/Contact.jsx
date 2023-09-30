import React, { useState } from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailJs from "emailjs-com";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      toast.error('All fields are required', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
      });
    }else{

      emailJs.sendForm(
        'service_g3tiixl',
        'template_0aj94oa', 
        e.target, 
        'GexA43jgY-ukg05AW'
        ).then(res => 
          {console.log(res);}
        ).catch(err => console.log(err));

      toast.success('Message Sent Successfully !', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }
  }
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

          <form className="contact_form" onSubmit={handleSubmit} id='contact_form_id'>
            <div className="form_input-group">
              <div className="form_input-div">
                <input type="text" placeholder='Your Name' name='name' value={formData.name} className="form_control" onChange={handleChange} />
              </div>

              <div className="form_input-div">
                <input type="email" placeholder='Your Mail' name='email' value={formData.email} className="form_control" onChange={handleChange} />
              </div>

              <div className="form_input-div">
                <input type="text" placeholder='Your Subject' name='subject' value={formData.subject} className="form_control" onChange={handleChange} />
              </div>
            </div>

            <div className="form_input-div">
              <textarea placeholder='Your Message' name='message' value={formData.message} className="form_control textarea" onChange={handleChange}></textarea>
            </div>

            <button className="button" type='submit'>
              Send Message
              <span className="button_icon contact_button-icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>

        <ToastContainer />
      </section>
  );
};

export default Contact