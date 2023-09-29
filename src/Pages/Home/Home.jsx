import React from 'react'
import ProfileImage from '../../assets/profileImage.jpg';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './home.css'

const Home = () => {
  return (
    <section className="home section grid">
      <img src={ProfileImage} alt="" className="home_img" />

      <div className="home_content">
        <div className="home_data">
          <h1 className="home_title">
            <span>I'm Gautam Muni.</span> Software Developer
          </h1>

          <p className="home_description">
            A passionate and creative software developer with a 
            penchant for turning ideas into reality through code. 
            Welcome to my digital space, where I showcase my journey, 
            skills, and the projects that make up my coding odyssey.
          </p>

          <Link to='/about' className='button'>
            More About Me {' '}
            <span className="button_icon">
              <FaArrowRight /> 
            </span>
          </Link>
        </div>
      </div>

      <div className="color_block"></div>
    </section>
  )
}

export default Home