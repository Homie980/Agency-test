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
    // rootMargin: '-300px'
  })

  useEffect(() => {
    if (inView) {
      animation.start('visible');
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
          Be global as the starfish. <br />
          Put your customer experience in safe hands, Choose our first arm and
          let us manage your social media, plan your events for you! Of Course
          in a starfish way.
        </Content>
      </Container>
    </HomeContentSection>
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
          Be global as the starfish. <br />
          Put your customer experience in safe hands, Choose our first arm and
          let us manage your social media, plan your events for you! Of Course
          in a starfish way.
        </Content>
      </Container>
    </HomeContentSection>
    </section>
  )
}

export default HomeContent
