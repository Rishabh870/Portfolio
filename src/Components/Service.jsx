import React from 'react';
import '../App.css';
import { fadeIn } from '../animation';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const services = [
  {
    name: 'Front End Web Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, fugiat ex nemo eius optio provident, tempore repudiandae dicta veniam officia',
    links: 'Learn More',
  },
  {
    name: 'Back End Web Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, fugiat ex nemo eius optio provident, tempore repudiandae dicta veniam officia',
    links: 'Learn More',
  },
  {
    name: 'UI/UX Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, fugiat ex nemo eius optio provident, tempore repudiandae dicta veniam officia',
    links: 'Learn More',
  },
];

export const Service = () => {
  return <section className='section' id='service'></section>;
};

export default Service;
