import React, { useEffect, useState } from "react"
// Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { Contact } from "../styles/contactStyles"
// Scroll Behavior
import { useInView } from "react-intersection-observer"
import { useAnimation } from "framer-motion"
// Mailchimp plugin
import addToMailchimp from "gatsby-plugin-mailchimp"

const ContactForm = ({ onCursor }) => {
  const [state, setState] = useState({
    email: "",
    // firstName: "",
    // lastName: "",
    message: "",
  })

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    setState({
      [name]: value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(state.email, {
      FNAME: firstName,
      LNAME: lastName,
    })
    setState({ message: result.msg })
  }

  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    // rootMargin: '-300px'
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])
  return (
    <Container>
      <Flex center>
        <Contact
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
          id="contact"
        >
          <form class="form" method="POST" onSubmit={handleSubmit}>
            <h2 class="title">Newsletter</h2>
            <p class="subtitle">Subscribe to our news letter!</p>
            <div
              className="message"
              dangerouslySetInnerHTML={{ __html: state.message }}
            />
            <div class="input-container ic1">
              <input
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                name="firstName"
                id="first-name"
                class="input"
                type="text"
                placeholder=" "
              />
              <div class="cut"></div>
              <label for="first-name" class="placeholder">
                First name
              </label>
            </div>
            <div class="input-container ic2">
              <input
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                name="lastName"
                id="last-name"
                class="input"
                type="text"
                placeholder=" "
              />
              <div class="cut"></div>
              <label for="last-name" class="placeholder">
                Last name
              </label>
            </div>
            <div class="input-container ic2">
              <input
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                value={state.email}
                onChange={handleInputChange}
                name="email"
                id="email"
                class="input"
                type="text"
                placeholder=" "
              />
              <div class="cut cut-short"></div>
              <label for="email" class="placeholder">
                Email
              </label>
            </div>
            <button
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              type="submit"
              class="submit"
            >
              Submit
            </button>
          </form>
        </Contact>
      </Flex>
    </Container>
  )
}

export default ContactForm
