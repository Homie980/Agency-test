import styled from "styled-components"
import { motion } from "framer-motion"

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: ${props => props.theme.red};
  color: #000;
  z-index: 100;
  overflow: hidden;
`

export const NavHeader = styled.div`
  top: 72px;
  position: relative;
  @media (max-width: 768px) {
    top: 35px;
  }
  h2 {
    color: ${props => props.theme.background};
  }
`

export const CloseNav = styled.div`
  button {
    transform-origin: center;
    border: none;
    padding: 20px;
    background: none;
    outline: none;
    span {
      width: 36px;
      height: 8px;
      display: block;
      background: ${props => props.theme.background};
      margin: 8px;
    }
  }
`

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    @media (max-width: 768px) {
      margin-left: auto;
    }
    @media (max-width: 400px) {
      margin-top: 16vh;
    }
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      font-weight: 900;
      height: 96px;
      line-height: 96px;
      overflow: hidden;
      @media (max-width: 768px) {
        font-size: 2rem;
        height: 60px;
        line-height: 12px;
      }

      @media (max-width: 400px) {
        font-size: 1.4rem;
        height: 60px;
        line-height: 12px;
      }
      .link {
        color: ${props => props.theme.background};
        position: relative;
        display: flex;
        align-items: center;
        .arrow {
          height: 76px;
          margin-right: 8px;
          svg {
            width: 100px;
            path {
              fill: ${props => props.theme.background};
              @media (max-width: 400px) {
                display: none;
              }
            }
          }
        }
      }
    }
  }
`

export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0;
  @media (max-width: 768px) {
    padding: 38px 0;
  }
  @media (max-width: 400px) {
    padding: 16px 0;
    display: none;
  }
  p {
    color: ${props => props.theme.background};
  }

  svg path {
    fill: ${props => props.theme.background};
  }
`

export const NavVideos = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%;
  z-index: -1;
  height: 100%;
  width: 100%;
  background: #000;
  .reveal {
    width: 100%;
    background: ${props => props.theme.red};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .video {
    background: #000;
    position: absolute;
    height: 100%;
    margin: 0;
    z-index: -1;
    video {
      height: 100%;
    }
  }
`
