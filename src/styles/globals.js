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
  color: #1F2022;
  background-color: ${props => props.theme.pallete.background};
  overflow-x: hidden;
  }

  .homeBannerMb{
  background-image: ${props => props.theme.pallete.gradientMb};
  background-size: cover;
  }
`