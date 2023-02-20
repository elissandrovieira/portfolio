import Image from 'next/image'
import Link from 'next/link'
import styled, { useTheme } from 'styled-components'
import useMediaQuery from '@mui/material/useMediaQuery'

import { HorizontalIcons } from '@/components/icons/Icons'
import Button from '../Button'
import AboutImage from '../../../public/img/about-image.png'
import AboutImageMb from '../../../public/img/about-image-mb.png'

const AboutSection = styled.section`
  display: flex;
  position: relative;
  max-width: 1170px;
  margin: 100px auto 0 auto;
  background-color: ${props => props.theme.pallete.card.primary};
  border-radius: 20px;
  box-shadow: 10px 10px 50px #13283426;

  @media (max-width: 1200px) {
    max-width: 100vw;
    margin: 100px 15px 0 15px
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }


`
const ImageAbout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 70px 150px 70px 0;

  h2 {
    font-size: 24px;
    margin-bottom: 30px;
  };

  p{
    font-size: 14px;
  };

  div{
    margin-top: 20px;
  };

  @media ( max-width: 1080px) {
    padding: 40px 40px 40px 0;
  } 
  @media ( max-width: 700px) {
    width: 100%;
    padding: 40px 20px;
    text-align: center;

    h2{
      text-align: center;
    }

    div{
      display: flex;
      justify-content: center;
    }
  } 
`

const About = ({ language }) => {
  const theme = useTheme()

  const maxWidthMd = useMediaQuery('(max-width: 1080px)')
  const maxWidthSm = useMediaQuery('(max-width: 850px)')
  const maxWidthMb = useMediaQuery('(max-width: 700px)')

  return (
    <AboutSection id='about'>
      <ImageAbout>
      <Image
          src={maxWidthSm ? AboutImageMb : AboutImage}
          alt={language.about.title}
          quality={100}
          style={{
            position: maxWidthSm ? 'static' : 'absolute',
            bottom: 0,
            left: '20px',
            width: maxWidthMb ? '140px' : maxWidthSm ? '280px' : maxWidthMd ? '400px' : '470px',
            height: maxWidthMb? '206px' : maxWidthSm ? '412px' : maxWidthMd ? '483px' : '567px',
          }}
          />
      </ImageAbout>
      <AboutContent>
        <h2>{language.about.title}</h2>
        {
          maxWidthMd
          ? (
            <>
              <p style={{
                marginBottom: '15px'
              }}>
                {`${language.about.text} ${language.about.text2}`}
              </p>
              <p style={{
                marginBottom: '15px'
              }}>
                {`${language.about.text3} ${language.about.text4}`}
              </p>
              <p>{language.about.text5}</p>
            </>

          ) :(
            <>
              <p>{language.about.text}</p>
              <p style={{
                marginBottom: '15px'
              }}>{language.about.text2}</p>
              <p>{language.about.text3}</p>
              <p style={{
                marginBottom: '15px'
              }}>{language.about.text4}</p>
              <p>{language.about.text5}</p>
            </>
          )}
        <div style={{ display: 'flex' }}>
          <a href={language.about.downloadHref} style={{ textDecoration: 'none' }}>
            <Button
            margin="0 20px 0 0"
            >
              {language.about.downloadBtn}
            </Button>
          </a>
          <Link href="#contact" legacyBehavior>
            <Button
            border
            color={theme.pallete.text.tertiary}
            backgroundColor={theme.pallete.button.secondary}
            padding="0 10px"
            hoverBackground={theme.pallete.text.tertiary}
            hoverColor={theme.pallete.button.secondary}
            >
              {language.about.contactBtn}
            </Button>
          </Link>
        </div>
        <div>
          <HorizontalIcons colors='red' />
        </div>

      </AboutContent>
    </AboutSection>
  )
}

export default About