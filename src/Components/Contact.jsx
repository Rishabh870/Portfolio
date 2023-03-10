import React from 'react';
import { fadeIn } from '../animation';
import { motion } from 'framer-motion';
export const Contact = () => {
  return (
    <section className='section' id='contact'>
      <div className='container mx-xuto'>
        <div className='d-flex flex-column flex-lg-row mx-lg-5 align-items-lg-center'>
          {/* text */}
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            whileInView='show'
            className='flex-grow-1'
          >
            <div>
              <h4 className='text-uppercase text-cl font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2
                style={{ fontSize: '60px' }}
                className='text-4xl mb-5 mb-lg-2'
              >
                Let's work
                <br /> Together!
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView='show'
            className='d-flex flex-grow-1 flex-column gap-y-4 pb-5 px-3 border rounded align-items-start'
          >
            <input
              className='form-control bg-transparent border-0 border-bottom mb-3  my-5 py-3 w-100 transition'
              type='text'
              placeholder='Your Name'
            />
            <input
              className='form-control bg-transparent border-0 border-bottom py-3 w-100  transition'
              type='text'
              placeholder='Your E-mail'
            />
            <textarea
              placeholder='Your Message'
              className='textarea form-control bg-transparent border-0 border-bottom py-3 w-100 transition mb-3 my-5'
            ></textarea>

            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
