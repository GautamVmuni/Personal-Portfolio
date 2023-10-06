/* eslint-disable react/prop-types */
import React from 'react'
import parse from 'html-react-parser';
import { motion } from 'framer-motion';

const resumeAnimationVeriants = {
  initial: {
      opacity: 0,
      y: 100,
  },
  animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
          delay: 0.2 * index
      }
  }),
};

const ResumeItem = ({ icon, year, title, desc }, index) => {
  return (
    <motion.div className="resume_item" key={index} variants={resumeAnimationVeriants} initial="initial" whileInView="animate" viewport={{once: true,}} custom={index}>
        <div className="resume_icon">{icon}</div>

        <span className="resume_date">{year}</span>
        <h3 className="resume_subtitle">{parse(title)}</h3>
        <p className="resume_description">{desc}</p>
    </motion.div>
  )
}

export default ResumeItem