import React from "react"
//Components
import HomeBanner from "../components/homePage/HomeBanner"
import HomeContent from '../components/homePage/HomeContent'
import Layout from "../components/layout"
import HomeAbout from "../components/homePage/HomeAbout";
//Context
import {useGlobalStateContext, useGlobalDispatchContext} from '../context/globalContext';

const IndexPage = props => {
  const {currentTheme, cursorStyles} = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({type: 'CURSOR_TYPE', cursorType: cursorType})
  }
  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeAbout onCursor={onCursor} />
    </Layout>
  ) 
}

export default IndexPage
