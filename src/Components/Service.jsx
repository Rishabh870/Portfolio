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
  return (
    <section className='section' id='service'>
      <div className='container mx-xuto'>
        <div className='d-flex flex-1 flex-column flex-lg-row mx-5'>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView='show'
          >
            <h2 className='h2 fw-bold mb-4 text-cl'>What I Do</h2>
            <h3 className='h3 max-w-455 mb-4'>
              I'm a Freelancer, Designer, Full Stack Web Developer with 2 year
              of Experience
            </h3>

            <button className='btn btn-sm mb-5'>See My Work</button>
          </motion.div>
          <div>
            {services.map((service, index) => {
              const { name, description, links } = service;
              return (
                <motion.div
                  variants={fadeIn('left', 0.5)}
                  initial='hidden'
                  whileInView='show'
                  className='border-bottom border-white-50 h-146 mb-4 d-flex mx-lg-5 '
                  key={index}
                >
                  <div class='max-w-476'>
                    <h4 class='fw-bold fs-4 mb-4'>{name}</h4>
                    <p class='fs-5 lh-base'>{description}</p>
                  </div>
                  {/* <div>{links}</div> */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
