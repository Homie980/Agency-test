import styled from "styled-components"
import { motion } from "framer-motion"

// Banner
export const Banner = styled.div`
  background: ${props => props.theme.background};
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 296px;
`

export const BannerTitle = styled(motion.h1)`
  position: absolute;
  bottom: -23vh;
  @media (max-width: 1370px) {
    bottom: -260px;
  }
  @media (max-width: 500px) {
    bottom: -200px;
  }
  @media (max-width: 400px) {
    bottom: -200px;
  }
  left: 0;
  color: ${props => props.theme.text};
  pointer-events: none;
`

export const Headline = styled(motion.span)`
  display: block;
  font-size: 8vw;
  font-weight: 900;
  line-height: 0.8;
`

// Content Section
// Change mar-bot to 14.705882352941176
export const HomeContentSection = styled(motion.div)`
  margin-bottom: 200px;
  @media (max-width: 768) {
    margin-bottom: 0;
  }
  #section-padding {
    paddding: 7% 15%;
  }
`

export const Content = styled.h2`
  width: 53%;
  font-size: 2.3rem;
  font-weight: 400;
  margin-left: 124px;
  color: ${props => props.theme.text};
  @media (max-width: 1024px) {
    width: 80%;
    font-size: 1.9rem;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 0 auto;
    font-size: 1.9rem;
  }

  @media (max-width: 400px) {
    width: 100%;
    margin: 0 auto;
    font-size: 1.4rem;
  }
`

// About
export const HomeAboutSection = styled(motion.div)``
export const About = styled.div`
  width: 100%;
  h2 {
    width: 60%;
    font-size: 2.3rem;
    font-weight: 400;
    margin-left: 124px;
    color: ${props => props.theme.text};
    @media (max-width: 1024px) {
      width: 80%;
      font-size: 1.9rem;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin-left: 0;
      font-size: 1.9rem;
    }

    @media (max-width: 400px) {
      width: 100%;
      margin-left: 0;
      font-size: 1.4rem;
    }
  }
  p {
    max-width: 440px;
    font-size: 1rem;
    line-height: 1.17;
    margin-left: 124px;
    color: ${props => props.theme.text};
    @media (max-width: 768px) {
      line-height: 1.54;
      margin-left: 0;
      text-align: center;
    }
    @media (max-width: 600px) {
      line-height: 1.2;
      text-align: center;
      margin: 0 auto;
    }
  }
`
export const Services = styled.div`
  h3 {
    color: ${props => props.theme.text};
  }

  @media (max-width: 768px) {
    margin-top: 11vh;
  }
`

// Accordion
export const AccordionHeader = styled(motion.div)`
  width: 100%;
  color: ${props => props.theme.red};
  height: 32px;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.15rem;
  margin: 8px 0;
`
export const AccordionIcon = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
  span {
    width: 16px;
    height: 4px;
    background: ${props => props.theme.red};
    transition: 0.1 ease-in-out;
  }
`
export const AccordionContent = styled(motion.div)`
  overflow: hidden;
  padding-left: 40px;
  span {
    width: 100%;
    margin: 8px 0;
    font-size: 0.875rem;
    color: ${props => props.theme.red};
    display: block;
    font-weight: 300;
  }
`
