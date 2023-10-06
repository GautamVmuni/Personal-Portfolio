import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import PortfolioElement1 from './assets/Personal Portfolio first.gif';
import PortfolioElement2 from './assets/diwai poster.png';
import PortfolioElement3 from './assets/Personal Portfolio second.gif';
import PortfolioElement4 from './assets/mca logo.png';
import PortfolioElement5 from './assets/business-card.gif';
import PortfolioElement6 from './assets/Aqua Surf Packet.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

import Instagram from './assets/instagram.jpeg';
import LinkedIn from './assets/LinkedIn.png';
import LeetCode from './assets/LeetCode-logo.png';
import GitHub from './assets/Github-logo.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav_icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav_icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav_icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav_icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Gautam',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Muni',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '22 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Mumbai, India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 9619526992',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'gautam.muni@mail.com',
  },

  {
    id: 9,
    title: 'Gender : ',
    description: 'Male',
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Hindi, English',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - PRESENT',
    title: 'Software Engineer <span> TCS </span>',
    desc: 'Handling backend of two Core Java based billing application.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - 2021',
    title: 'Graphic Designer <span> Mumbai Cestoball Association </span>',
    desc: 'I took on the responsibility of designing a wide range of materials, including eye-catching posters, distinctive logos, and engaging social media posts.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - PRESENT',
    title: 'Freelancer <span> UpWork </span>',
    desc: ' My journey on Upwork has allowed me to continually expand my knowledge, build lasting professional relationships, and offer tailored solutions across various industries.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018 - 2021',
    title: "Bachelor Degree <span> University of Mumbai </span>",
    desc: "I successfully completed my bachelor's degree from the University of Mumbai with an impressive CGPI of 8.53.",
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016 - 2018',
    title: 'Higher Secondary <span> Maharashtra State Board </span>',
    desc: 'I have successfully completed my HSC with a commendable score of 61.33%.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2015 - 2016',
    title: 'Secondary School <span> Maharashtra State Board </span>',
    desc: 'I have proudly completed my SSC with a remarkable achievement of 84.40%.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Core Java',
    percentage: '80',
  },

  {
    id: 2,
    title: 'Shell Scripting',
    percentage: '70',
  },

  {
    id: 3,
    title: 'React JS',
    percentage: '60',
  },

  {
    id: 4,
    title: 'SQL',
    percentage: '65',
  },

  {
    id: 5,
    title: 'Javascript',
    percentage: '55',
  },

  {
    id: 6,
    title: 'Springboot',
    percentage: '60',
  },

  {
    id: 7,
    title: 'Html',
    percentage: '70',
  },

  {
    id: 8,
    title: 'Css',
    percentage: '55',
  },
];

export const portfolio = [
  {
    id: 1,
    img: PortfolioElement1,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'NA',
      },
    ],
  },

  {
    id: 2,
    img: PortfolioElement2,
    title: 'Graphic Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Poster',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'MCA',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'CorelDraw',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'NA',
      },
    ],
  },

  {
    id: 3,
    img: PortfolioElement3,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Personal',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'NA',
      },
    ],
  },

  {
    id: 4,
    img: PortfolioElement4,
    title: 'Graphic Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Logo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'MCA',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe illustrator',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'NA',
      },
    ],
  },

  {
    id: 5,
    img: PortfolioElement5,
    title: 'Graphic Design',
    details: [
      {
        title: 'Project : ',
        desc: 'Business Card',
      },
      {
        title: 'Client : ',
        desc: 'Narayan Enterprises',
      },
      {
        title: 'Language : ',
        desc: 'CorelDraw',
      },
      {
        title: 'Preview : ',
        desc: 'NA',
      },
    ],
  },

  {
    id: 6,
    img: PortfolioElement6,
    title: 'Graphic Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Product Design',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Narayan Enterprises',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'CorelDraw',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'NA',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

export const socialMedia = [

  {
    id: 1,
    img: LinkedIn,
    path: 'https://www.linkedin.com/in/gautammuni/'
  },

  {
    id: 2,
    img: LeetCode,
    path: 'https://leetcode.com/GautamMuni/'
  },

  {
    id: 3,
    img: GitHub,
    path: 'https://github.com/GautamVmuni'
  },

  {
    id: 4,
    img: Instagram,
    path: 'https://www.instagram.com/gautam_v_muni/'
  },

];