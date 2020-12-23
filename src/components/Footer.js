import React from "react"
// Styled Components
import { Container, Flex } from "../styles/globalStyles"
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles"
// Icons
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons"

const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <Flex center>
          <FooterSocial>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
            >
              <Instagram />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
            >
              <Facebook />
            </a>
            <a
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
              href="/"
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
        <FooterContent>
          <p>©2020 Starfish. All Rights Reserved</p>
        </FooterContent>
      </Container>
    </FooterNav>
  )
}

export default Footer
