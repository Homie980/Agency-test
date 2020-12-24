import styled from "styled-components"
import { motion } from "framer-motion"

export const Contact = styled(motion.div)`
  margin-top: 200px;
  .message {
    color: ${props => props.theme.red};
  }

  body {
    align-items: center;
    background-color: ${props => props.theme.background};
    display: flex;
    justify-content: center;
    height: 100vh;
  }

  .form {
    background-color: ${props => props.theme.background};
    border-radius: 20px;
    @media (max-width: 500px) {
      padding-left: 0px;
    }

    @media (max-width: 380px) {
      padding-left: 0px;
    }
    box-sizing: border-box;
    height: 500px;
    padding: 40px;
    width: 400px;
  }

  .title {
    color: ${props => props.theme.text};
    font-family: sans-serif;
    font-size: 36px;
    font-weight: 600;
    margin: 0;
  }

  .subtitle {
    color: ${props => props.theme.text};
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
  }

  .input-container {
    height: 50px;
    position: relative;
    width: 100%;
  }

  .ic1 {
    margin-top: 40px;
    @media (max-width: 380px) {
      width: 250px;
    }
  }

  .ic2 {
    margin-top: 30px;
    @media (max-width: 380px) {
      width: 250px;
    }
  }

  .input {
    background-color: ${props => props.theme.red};
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
    transition: box-shadow 0.2s ease-in-out;
    box-shadow: inset 0px 0px 0px 0px transparent;
  }

  .input:focus {
    box-shadow: inset 0px 0px 0px 2px #dc2f55;
  }

  .cut {
    background-color: ${props => props.theme.background};
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
  }

  .cut-short {
    width: 50px;
  }

  .input:focus ~ .cut,
  .input:not(:placeholder-shown) ~ .cut {
    transform: translateY(8px);
  }

  .placeholder {
    color: ${props => props.theme.text};
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
  }

  .input:focus ~ .placeholder,
  .input:not(:placeholder-shown) ~ .placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
  }

  .input:not(:placeholder-shown) ~ .placeholder {
    color: #808097;
  }

  .input:focus ~ .placeholder {
    color: #dc2f55;
  }

  .submit {
    background-color: ${props => props.theme.red};
    @media (max-width: 380px) {
      padding-left: 0px;
      width: 250px;
    }
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: ${props => props.theme.text};
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    outline: 0;
    text-align: center;
    width: 100%;
    transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    box-shadow: inset 0px 0px 0px 0px transparent;
  }

  .submit:active {
    background-color: ${props => props.theme.red};
  }

  .submit:hover {
    box-shadow: inset 0px 0px 0px 2px #ffffff;
  }

  .submit:focus {
    box-shadow: inset 0px 0px 0px 2px #ffffff;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: #65657b;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #65657b;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  ::placeholder {
    color: #65657b;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  input:focus::-webkit-input-placeholder {
    /* Edge */
    opacity: 1;
  }

  input:focus:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    opacity: 1;
  }

  input:focus::placeholder {
    opacity: 1;
  }
`
