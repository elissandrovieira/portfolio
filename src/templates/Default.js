import styled from 'styled-components'
import Header from '../components/Header'
import Image from 'next/image'
import useMediaQuery from '@mui/material/useMediaQuery'

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

  const maxWidth = useMediaQuery('(max-width:700px)')
  return (
    <>
      <Header />
      <GradientTop>
        {
          maxWidth
          ? null
          : (
            <Image
            src="/img/gradient/gradient-top.jpg"
            alt="eli.vieira logo"
            quality={100}
            width={1028}
            height={1046}
            />
          )
        }
      </GradientTop>
      
      {children}
    </>
  )
}

export default Default