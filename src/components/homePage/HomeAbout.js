import React, { useState, useEffect } from "react"
// Framer Motion, Scrolling Behavior
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
// Styled Components
import { Container, Flex } from "../../styles/globalStyles"
import {
  HomeAboutSection,
  About,
  Services,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
} from "../../styles/homeStyles"
// Context
import { useGlobalStateContext } from "../../context/globalContext"

const accordionIds = [
  {
    id: 0,
    title: "Branding & Positioning",
    results: [
      "Branding &Positioning your brand in the right place to reach the right audience.",
    ],
  },
  {
    id: 1,
    title: "Content Creation",
    results: [
      "We are fearful hunters. We stalk and hunt your target audience through all of your social media accounts. And by the end of our time together, you’ll have a Net full of clients and achieved sales targets. In a less dramatic manner  Through tons of research and hard digging, We create content that matches your brand identity and grapes your favorite client’s attention.",
    ],
  },
  {
    id: 2,
    title: "Media Production",
    results: [
      "If I told you that smoking kills you probably won’t listen but If I showed you a story of a young boy fighting lung cancer because of his father’s smoking habit , you probably won’t listen either but, It will leave you with the right amount of guilt.",
    ],
  },
]

const HomeAbout = ({ onCursor }) => {
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: '-300px'
  })
  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])
  const [expanded, setExpanded] = useState(0)
  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] },
        },
        hidden: {
          opacity: 0,
          y: 72,
        },
      }}
    >
      <Container>
        <Flex>
          <About>
            <h2>
              How can we help you? <br /> Each brand have a story, some of them
              are lucky to figure it out on their own but the rest, Are even
              more lucky because they have us to figure it out for them.
            </h2>
            <p>
              Everybody's got a story. And we don't stop until we've uncovered
              what makes yours worth telling. Whether it's working directly with
              you, an agency partener, or putting the finishing touches on
              something special, we're ready to dig in and get our hands dirty,
              are you?
            </p>
          </About>
          <Services id="about">
            <h3>Services</h3>
            {accordionIds.map((details, index) => (
              <Accordion
                key={index}
                details={details}
                expanded={expanded}
                setExpanded={setExpanded}
                onCursor={onCursor}
              />
            ))}
          </Services>
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}

const Accordion = ({ details, expanded, setExpanded, onCursor }) => {
  const isOpen = details.id === expanded
  const [hovered, setHovered] = useState(false)
  const { currentTheme } = useGlobalStateContext()
  return (
    <>
      <AccordionHeader
        onClick={() => setExpanded(isOpen ? false : details.id)}
        onMouseEnter={() => onCursor("hovered")}
        onMouseLeave={onCursor}
        onHoverStart={() => setHovered(!hovered)}
        onHoverEnd={() => setHovered(!hovered)}
        whileHover={{
          color: currentTheme === "dark" ? "#ffffff" : "#000000",
        }}
      >
        <AccordionIcon>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : 45, x: 3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
          <motion.span
            animate={{ rotate: isOpen || hovered ? 0 : -45, x: -3 }}
            transition={{ duration: 0.2, ease: [0.6, 0.05, -0.01, 0.9] }}
          ></motion.span>
        </AccordionIcon>
        {details.title}
      </AccordionHeader>
      <AccordionContent
        key="content"
        animate={{ height: isOpen ? "100%" : "0" }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        {details.results.map((result, index) => (
          <span key={index}>{result}</span>
        ))}
      </AccordionContent>
    </>
  )
}

export default HomeAbout
