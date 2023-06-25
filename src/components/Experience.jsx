import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import ImageSlider from "./ImageSlider";
import {
  office1,
  office2,
  office3,
  office4,
  office5,
  office6,
  office7,
  office8,
  office9,
  office10,
  office11,
  office12,
  office13,
  office14,
} from "../assets";


const Experience = () => {
  const slides = [
    { url: office1, title: "beach" },
    { url: office2, title: "boat" },
    { url: office3, title: "forest" },
    { url: office4, title: "city" },
    { url: office5, title: "italy" },
    { url: office6, title: "italy" },
    { url: office7, title: "italy" },
    { url: office8, title: "italy" },
    { url: office9, title: "city" },
    { url: office10, title: "italy" },
    { url: office11, title: "italy" },
    { url: office12, title: "italy" },
    { url: office13, title: "italy" },
    { url: office14, title: "italy" },
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
          <p className={styles.sectionSubText}>What We Have Done So Far</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        

      </div>

      <div className={`-mt-25 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <div style={containerStyles}>
          <ImageSlider slides={slides} parentWidth={500}/>
        </div>
      </div>
    </div>

    

  );
};

export default SectionWrapper(Experience, "");