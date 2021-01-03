import styled, { css } from "styled-components"

export const FooterNav = styled.div`
  height: 175px;
  margin-top: 296px;
`
export const FooterContent = styled.div`
  color: ${props => props.theme.red};
  font-weight: 600;
  flex: 1;
  text-align: center;
  ${props =>
    props.wider &&
    css`
      flex: 2;
    `}
`
export const FooterSocial = styled.div`
  
  display: flex;
  position: relative;
  a {
    position: relative;
    display: block;
    width: 24px;
    height: 24px;
    padding: 8px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
