import React, { useEffect } from "react"
// Scroll Behavior
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
// Styled Components
import { Container } from "../../styles/globalStyles"
import { HomeContentSection, Content } from "../../styles/homeStyles"

const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "100px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <section id="features">
      <HomeContentSection
        id="section-padding"
        ref={contentRef}
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
          <Content>
            Once we launched our Starfish, <br /> People kept mistaken us with
            their favorite sushi places but eventually, they understood that we
            are the ones who made their favorite sushi places “their” favorite
            suchi places.
          </Content>
        </Container>
      </HomeContentSection>
    </section>
  )
}

export default HomeContent
