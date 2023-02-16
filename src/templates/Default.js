import styled from 'styled-components'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from 'styled-components'

import dark from '@/theme/dark'
import Footer from '@/components/Footer'

const GradientTop = styled.div`
  position: absolute;
  top: -120px;
  right: -100px;
  z-index: -99;
 

 
 
  @media( max-width: 700px) {
  }
  @media( min-width: 1000px) {
    top: -120px;
    right: -100px;
  }
  @media( min-width: 1600px) {
    top: -120px;
    right: 0;
  }
  @media(min-width: 1800px){
    top: -120px;
    right: 200px;
  }
  @media( min-width: 2300px) {
    top: -120px;
    right: 500px;
  }
`

const Default = ({ children }) => {
  const theme =  useTheme()

  const maxWidth = useMediaQuery('(max-width:700px)')
  return (
    <>
      <GradientTop>
        {
          maxWidth
          ? null
          : (
            <Image
            src={theme === dark ? "/img/gradient/gradient-top-dark.jpg" : "/img/gradient/gradient-top.jpg"}
            alt="eli.vieira logo"
            quality={100}
            width={1028}
            height={1046}
            />
          )
        }
      </GradientTop>
      {children}
      <Footer />
    </>
  )
}

export default Default