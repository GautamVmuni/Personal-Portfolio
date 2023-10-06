import React from 'react'
import { socialMedia } from '../data'
import { motion } from 'framer-motion'

const socialAnimationVeriants = {
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

const SocialMedia = () => {
  return (
    <>
        {socialMedia.map(({img, path}, index) => {
            return (
                <motion.div className="social_container" key={index} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} variants={socialAnimationVeriants} initial="initial" whileInView="animate" viewport={{once: true,}} custom={index}>
                    <div className="social_box">
                        <a href={path} className="social_link">
                            <img src={img} alt="" className="social_logo" />
                        </a>
                    </div>
                </motion.div>
            )
        })}
    </>
  )
}

export default SocialMedia