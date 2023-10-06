import React, { useState } from 'react'
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa'

import { FiSend } from 'react-icons/fi';
import './contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailJs from "emailjs-com";
import { motion } from 'framer-motion';

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
              <div className="info_item item_animation">
                <FaEnvelopeOpen className='info_icon' />

                <div>
                  <span className="info_title">Mail Me</span>
                  <h4 className="info_desc">Gautam.muni.13837@gmail.com</h4>
                </div>
              </div>

              <div className="info_item item_animation">
                <FaPhoneSquareAlt className='info_icon' />

                <div>
                  <span className="info_title">Call Me</span>
                  <h4 className="info_desc">+91 9619526992</h4>
                </div>
              </div>
            </div>

            <div className="contact_socials social_icons">
              <a href="https://github.com/GautamVmuni" className="contact_social-link" target='_blank' rel="noreferrer"><FaGithub /></a>

              <a href="https://www.instagram.com/gautam_v_muni/" className="contact_social-link" target='_blank' rel="noreferrer"><FaInstagram /></a>

              <a href="https://www.linkedin.com/in/gautammuni/" className="contact_social-link" target='_blank' rel="noreferrer"><FaLinkedin /></a>
            </div>
          </div>

          <form className="contact_form" onSubmit={handleSubmit} id='contact_form_id'>
            <div className="form_input-group">
              <motion.div className="form_input-div" initial={{ scale: 0 }} animate={{ scale: 1}} transition={{ duration: 0.3 }}>
                <input type="text" placeholder='Your Name' name='name' value={formData.name} className="form_control" onChange={handleChange} />
              </motion.div>

              <motion.div className="form_input-div" initial={{ scale: 0 }} animate={{ scale: 1}} transition={{ duration: 0.3 }}>
                <input type="email" placeholder='Your Mail' name='email' value={formData.email} className="form_control" onChange={handleChange} />
              </motion.div>

              <motion.div className="form_input-div" initial={{ scale: 0 }} animate={{ scale: 1}} transition={{ duration: 0.3 }}>
                <input type="text" placeholder='Your Subject' name='subject' value={formData.subject} className="form_control" onChange={handleChange} />
              </motion.div>
            </div>

            <motion.div className="form_input-div" initial={{ scale: 0 }} animate={{ scale: 1}} transition={{ duration: 0.3 }}>
              <textarea placeholder='Your Message' name='message' value={formData.message} className="form_control textarea" onChange={handleChange}></textarea>
            </motion.div>

            <motion.button className="button contact_button" type='submit' whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
              Send Message
              <span className="button_icon contact_button-icon">
                <FiSend />
              </span>
            </motion.button>
          </form>
        </div>

        <ToastContainer />
      </section>
  );
};

export default Contact