import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 
      0.5 * index, 0.75)} className="w-full 
      green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
            }}
            className="bg-tertiary rounded-[20px]
            py-5 px-12 min-h-[280px] flex 
            justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] 
          font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Overview</p>
        <h2 className={styles.sectionHeadText}>Why Choose Us.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 mb-10 text-secondary 
      text-[17px] mx-w-3xl leading-[30px]">
        We are an independently-owned cleaning company, insured, and bonded. 
        With your busy day, you deserve a stress-free janitorial service with 
        strong management, high quality workers, and quick, responsive customer service. 
        We can be responsive because we are located in the Northwest Indiana community. 
        It makes us happy to impress you, not just during the first month, but every time! 
        Because we don't lock you in a contract, we work hard to earn your loyalty. 
        That is why 98% of our clients stay with us. When you hire Fresh and Clean Services you will get:
        Cleaning experts,
        All equipment and cleaning supplies provided by us.
        Consistent quality and supervising managers near the job.
        Quick response. We can start right away with no notice required.
        100% reliability and professional etiquette.
        Monthly invoices.
        </motion.p>

        <h2 className={styles.sectionHeadText}>Cleaning Services Include:</h2>

        <div className="mt-20 flex flex-wrap gap-10">{services.map((service, index) => 
        (<ServiceCard key={service.title} index={index} {...service}/>))}</div>

        
    </>
  )
}

export default SectionWrapper(About, "about")