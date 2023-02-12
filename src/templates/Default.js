import styled from 'styled-components'
import Header from '../components/Header'
import Image from 'next/image'

const GradientTop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -99;
`

const Default = ({ children }) => {

  return (
    <>
      <Header />
      <GradientTop>
        <Image
        src="/img/gradient/gradient-top.png"
        alt="eli.vieira logo"
        quality={100}
        width={1028}
        height={1046}
        />
      </GradientTop>
      
      {children}
    </>
  )
}

export default Default