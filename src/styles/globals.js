import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
  scroll-behavior: smooth;
  }

  body{
  font-family: 'Montserrat', sans-serif;
  color: ${props => props.theme.pallete.text.primary};
  background-color: ${props => props.theme.pallete.background};
  margin: 0 auto;
  overflow-x: hidden;
  }

  .homeBannerMb{
  background-image: ${props => props.theme.pallete.gradientMb};
  background-size: cover;
  }
`