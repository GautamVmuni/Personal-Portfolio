import React from 'react'
import Info from '../../Components/Info'
import { FaDownload} from 'react-icons/fa'
import Resume from '../../assets/MyResume.pdf'
import './about.css';
import Skills from '../../Components/Skills'
import { resume } from '../../data'
import ResumeItem from '../../Components/ResumeItem'
import SocialMedia from '../../Components/SocialMedia';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section_title">
          About <span>Me</span>
        </h2>

        <div className="about_container grid">
          <div className="about_info">
            <h3 className="section_subtitle personal_info">Personal Infos</h3>

            <ul className="info_list grid">
              <Info />
            </ul>

            <motion.a href={Resume} download='' className="button resume_btn" whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
              Download Resume{' '}
              <span className="button_icon download_icon">
                <FaDownload />
              </span>
            </motion.a>
          </div>

          <div className="social grid">
            <SocialMedia />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section_subtitle subtitle_center">My Skills</h3>

        <div className="skills_container grid">
          <Skills />
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section_subtitle subtitle_center">Experience & Education</h3>

        <div className="resume_container grid">
          <div className="resume_data">
            {resume.map((val) => {
              if(val.category === 'experience') {
                return <ResumeItem  key={val.id} {...val} />;
              }
            })}
          </div>

          <div className="resume_data">
            {resume.map((val) => {
              if(val.category === 'education') {
                return <ResumeItem  key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About