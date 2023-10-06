import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

const skillsAnimationVeriants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    }),
};

const Skills = () => {
  return (
    <>
        {skills.map(({title, percentage}, index) => {
            return (
                <motion.div className="progress_box" key={index} variants={skillsAnimationVeriants} initial="initial" whileInView="animate" viewport={{once: true,}} custom={index}>
                    <div className="progress_circle">
                        <CircularProgressbar 
                            strokeWidth={7.5} 
                            text={`${percentage}%`} 
                            value={percentage} 
                        />
                    </div>

                    <h3 className="skills_title">{title}</h3>
                </motion.div>
            )
        })}
    </>
  )
}

export default Skills