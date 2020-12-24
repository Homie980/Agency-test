import React, { useState } from "react"
import { Link } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
// Icons
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"

// Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
} from "../styles/navigationStyles"

const navRoutes = [
  { id: 1, title: "Features", path: "#features" },
  {
    id: 2,
    title: "About",
    path: "#about",
  },
  {
    id: 3,
    title: "Contact",
    path: "#contact",
  },
]

const Navigation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>STARFISH</h2>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map(route => (
                    <motion.li
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      key={route.id}
                    >
                      <Link to={`${route.path}`}>
                        <motion.div
                          onClick={() => setToggleMenu(!toggleMenu)}
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              duration: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                          className="link"
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex center>
                  <FooterSocial>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                    >
                      <Instagram />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                    >
                      <Facebook />
                    </a>
                    <a
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      href="/"
                    >
                      <Vimeo />
                    </a>
                  </FooterSocial>
                  <FooterContent>
                    <p>©2020 Starfish. All Rights Reserved</p>
                  </FooterContent>
                </Flex>
              </NavFooter>
            </Container>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation
