import Image from 'next/image'
import styled, { useTheme } from 'styled-components'
import { useMediaQuery } from '@mui/material'

import {
  PhoneIcon,
  EmailIcon,
  LinkedinIcon,
  GithubIcon
} from '../icons/Icons'

const ContactSection = styled.section`
  width: 100vw;
  @media (max-width: 800px) {
    padding-bottom: 50px;
  }
`
const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 150px 15px 0 15px;

  @media (max-width: 710px) {
    flex-direction: column;
    align-items: center;
  }
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 710px) {
    align-items: center;
    margin-bottom: 50px;
  }
`
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;

  @media (max-width: 800px) {
    font-size: 42px;
  }
`
const CardContent = styled.div`
  width: 50%;
  background-color: ${props => props.theme.pallete.card.primary};
  padding: 50px;
  border-radius: 20px;
  box-shadow: 10px 10px 50px ${props => props.theme.pallete.shadow};
  
  h2{
    margin-bottom: 20px;
  }

  @media (min-width: 800px) and (max-width: 1100px) {
    padding: 20px;
    font-size: 12px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }

  
`
const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 800px){
    flex-direction: column;
  }
`
const Link = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 20px;
  
  a{
    text-decoration: none;
    color: ${props => props.theme.pallete.text.primary};

  }
`
const BannerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  div{
    position: relative;
    width: 700px;
    height: 800px;
    margin-top: -600px;
    margin-left: -100px;
    z-index: -1;
  }

  @media (max-width: 800px) {
    div{
      margin-top: -650px;
      margin-left: -200px;
    }
  }
`

const Contact = ({ language }) => {
  const theme = useTheme()
  const maxWidthMb = useMediaQuery('(max-width: 800px)')

  return (
    <>
      <ContactSection id='contact' className={ maxWidthMb ? 'bottonGradientMb' : null}>
        <Container>
          <TitleContainer>
            <Title>{language.contact.title}</Title>
            <Title>{language.contact.title2}</Title>
            <Title>{language.contact.title3}</Title>
          </TitleContainer>
          <CardContent>
            <h2>{language.contact.subtitle}</h2>
            <LinksContainer>
              <div style={{ marginRight: '10px' }}>
                <Link>
                  <a
                  href='https://wa.me/5521982485926'
                  >
                    <PhoneIcon margin="0 10px 0 0" />
                  </a>
                  <p>+55 21 9 8248 5926</p>
                </Link>
                <Link>
                  <a
                  href='mailto:teofiloeli@gmail.com'
                  >
                    <EmailIcon margin="0 10px 0 0" />
                  </a>
                  <p>teofiloeli@gmail.com</p>
                </Link>
              </div>
              
              <div>
                <Link>
                  <a
                  href='https://www.linkedin.com/in/elissandro-junior'
                  >
                    <LinkedinIcon margin="0 10px 0 0" />
                  </a>
                  <p>elissandro-junior</p>
                </Link>
                <Link>
                  <a
                  href='https://github.com/elissandrovieira'
                  >
                    <GithubIcon margin="0 10px 0 0" />
                  </a>
                  <p>teofiloeli@gmail.com</p>
                </Link>
              </div>
            </LinksContainer>
          </CardContent>
          
        </Container>
      </ContactSection>
      {
        maxWidthMb
        ? (
          null
        ) : (
          <BannerContainer>
            <div>
              <Image
              src={theme.pallete.gradientBottom}
              alt="eli.vieira logo"
              quality={100}
              fill
              style={{objectFit: 'contain', bottom: 0, left: 0}}
              />
            </div>
          </BannerContainer>
        )
      }
    </>
  )
}

export default Contact