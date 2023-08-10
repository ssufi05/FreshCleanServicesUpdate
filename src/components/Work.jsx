
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

import React from "react";



const Work = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Location</p>
        <h2 className={styles.sectionHeadText}>Where We Serve.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4  text-secondary 
      text-[17px] mx-w-3xl leading-[30px]">
        Based out of Hammond, Northwest Indiana, we serve businesses in Valparaiso, Portage, 
        Whiting, Chicago, Hammond, Griffith, Highland, Schererville, Merrillville, Munster, 
        Hobart, and Crown Point. You will be so happy with the work of the professional team 
        here at Fresh & Clean Services. 
        Lorenzo has many years of janitorial services experience in Northwest Indiana and the Chicagoland Areas. 
        He has perfected cleaning techniques which he has passed on to his team. 
        You will see the difference when you hire a cleaning company: that knows the correct cleaning method, 
        the right products to use, and has a team who is not afraid of using elbow grease.
        
        </motion.p>
       
        
    </>
  )
};

export default SectionWrapper(Work, "");