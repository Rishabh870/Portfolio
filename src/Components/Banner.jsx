import React from 'react';
import '../App.css';
import { fadeIn } from '../animation';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
export const Banner = () => {
  return (
    <section className=' section ' id='home'>
      <div className=' container mx-auto'>
        <div className='  d-flex align-items-center justify-lg-content-center gap-3 gap-lg-5  flex-column flex-lg-row  '>
          <div className='m-5 flex-fill p-5 flex-grow-1 text-center text-lg-start'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              className='fw-bold fs-1 lh-base text-55 lg:text-110'
            >
              RISHABH <span>PARTH CHOUDHARY</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView='show'
              className='mb-4 fs-3 fs-lg-7 font-secondary font-weight-semi-bold text-uppercase lh-1'
              style={{ fontSize: '36px' }}
            >
              <span className='mr-4 fw-bold'>I am a </span>
              <TypeAnimation
                className='text-cl'
                sequence={['Full Stack Developer', 2000, 'Designer', 2000]}
                speed={50}
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>

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
              <a
                href='http://'
                className='text-decoration-none fs-5 text-gradient text-gradient:hover'
              >
                My Portfolios
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView='show'
              className='d-flex align-items-center fs-5 gap-4 mx-auto '
              style={{ maxWidth: 'max-content' }}
            >
              <a href='' className='text-cl '>
                <FaLinkedin />
              </a>
              <a href='' className='text-cl '>
                <FaGithub />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView='show'
            className=' d-none d-lg-flex flex-1 max-w-320px 1g:max-w-482px'
          >
            <img
              src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
              alt=''
              style={{ width: '450px' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
