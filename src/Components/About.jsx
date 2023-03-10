import React from 'react';
import '../App.css';
import { fadeIn } from '../animation';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className=' section ' id='about'>
      <div className=' container mx-auto'>
        <div className='  d-flex align-items-center justify-lg-content-center gap-3 gap-lg-5  flex-column flex-lg-row  '>
          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView='show'
            className=' flex-1 max-w-320px 1g:max-w-482px'
          >
            <img
              src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
              alt=''
              style={{ width: '450px' }}
            />
          </motion.div>

          <div className='mx-lg-5 flex-fill p-5 flex-grow-1 text-center text-lg-start'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              className='fw-bold fs-1 lh-base text-55 lg:text-110'
            >
              About Me
            </motion.h1>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView='show'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              fugiat ex nemo eius optio provident, tempore repudiandae dicta
              veniam officia consequuntur quos cum quis non! Libero totam
              expedita pariatur cumque, nobis minus voluptatem dignissimos
              molestiae.
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView='show'
              className='d-flex align-items-center fs-5 gap-4 mx-auto'
              style={{ maxWidth: 'max-content' }}
            >
              <button className='btn btn-sm fs-5 btn-lg'>Contact Me</button>
              <a href='http://' className='text-decoration-none'>
                My Portfolios
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
