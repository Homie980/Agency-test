import React from 'react'

import {Banner, BannerTitle, Headline} from '../../styles/homeStyles';



const HomeBanner = ({onCursor}) => {
  const parent = {
    initial: {y: 800},
    animate: {
      y: -130,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const child = {
    initial: {y: 800},
    animate: {
      y: -130,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  }

  return (
    <Banner>
      <BannerTitle variants={parent} initial='initial' animate='animate'>
        <Headline variants={child}>STARFISH</Headline>
        <Headline variants={child}>YOUR BUISNESS</Headline>
      </BannerTitle>
    </Banner>
  )
}

export default HomeBanner
