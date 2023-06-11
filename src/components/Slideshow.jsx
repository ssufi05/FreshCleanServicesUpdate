import React from 'react';
import ImageSlider from "./ImageSlider";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import {
  office1,
  office2,
  office3,
  office4,
  office5,
  office6,
  office7,
  office8,
} from "../assets";

const Slideshow = () => {
  const slides = [
    { url: office1, title: "beach" },
    { url: office2, title: "boat" },
    { url: office3, title: "forest" },
    { url: office4, title: "city" },
    { url: office5, title: "italy" },
    { url: office6, title: "italy" },
    { url: office7, title: "italy" },
    { url: office8, title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (

    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        
      </div>
    </div>
    

  );
};

/**
 * <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <div style={containerStyles}>
          <ImageSlider slides={slides} parentWidth={500}/>
        </div>
      </div>
 */

export default SectionWrapper(Slideshow, "");