import React from "react"
import { motion } from "framer-motion"

import { Banner, BannerTitle, Headline } from "../../styles/homeStyles"

const HomeBanner = ({ onCursor }) => {
  const parent = {
    initial: { y: 800 },
    animate: {
      y: -130,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const child = {
    initial: { y: 800 },
    animate: {
      y: -130,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  const child2 = {
    initial: { y: 800 },
    animate: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner variants={parent} initial="initial" animate="animate">
      <BannerTitle>
        <Headline variants={child}>STARFISH</Headline>
        <Headline variants={child}>YOUR BUISNESS</Headline>
      </BannerTitle>
      <motion.div variants={child2} animate="animate" className="header-logo">
        <img src="https://i.ibb.co/MPzqt8p/starfish-Heading.png"></img>
      </motion.div>
    </Banner>
  )
}

export default HomeBanner
