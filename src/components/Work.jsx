import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

import React from "react";

import ImageSlider from "./ImageSlider";
import {
  office1,
} from "../assets";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  slides,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[420px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={office1}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          
        </div>

        

        
      </Tilt>
    </motion.div>
  );
};

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
        Lorenzo has many years of janitorial services experience in Northwest Indiana. 
        He has perfected cleaning techniques which he has passes on every day. 
        You will see the difference when you hire a cleaning company who knows the right method, 
        what product to use, and who has a team  member who is not afraid of using elbow grease.
        
        </motion.p>
       
        
    </>
  )
};

export default SectionWrapper(Work, "work");


/**
 * You will be so happy with the work of the professional team here at Fresh & Clean Services. 
          Lorenzo has many years of janitorial services experience in Northwest Indiana. 
          He has perfected cleaning techniques which he has passes on every day. 
          You will see the difference when you hire a cleaning company who knows the right method, 
          what product to use, and who has a team  member who is not afraid of using elbow grease.
        
 */