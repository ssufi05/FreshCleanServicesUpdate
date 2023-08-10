import { motion } from "framer-motion";
import React, { Fragment } from "react";
import Media from "react-media";

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import './Experience.css';

import {
  office1,
  office10,
  office11,
  office12,
  office13,
  office14,
  office2,
  office3,
  office4,
  office5,
  office6,
  office7,
  office8,
  office9,
} from "../assets";
import ImageSlider from "./ImageSlider";

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
  //media width 500 x 280px

  const containerStyles = {
    width: "500",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Curriculum Vitae</p>
          <h2 className={styles.sectionHeadText}>Work Experience.</h2>
        </motion.div>

        

      </div>

      <div className={`-mt-25 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        <div className="containerStyles">
          <Media queries={{
            mobile: "(max-width: 960px)",
            notMobile: "(min-width: 961px)"
          }}>
            {matches => (
              <Fragment>
                {matches.mobile && <ImageSlider slides={slides} parentWidth={300}/>}
                {matches.notMobile && <ImageSlider slides={slides} parentWidth={500}/>}
              </Fragment>
            )}

          </Media>

        </div>
      </div>
    </div>

    

  );
};

export default SectionWrapper(Experience, "work");