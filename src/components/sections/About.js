import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { useTheme } from 'styled-components'

import { HorizontalIcons} from '@/components/ContactIcons'

const AboutSection = styled.section`
  display: flex;
  position: relative;
  max-width: 1170px;
  margin: 100px auto 0 auto;
  background-color: white;
  border-radius: 20px;
  box-shadow: 10px 10px 50px #13283426;
`

const ImageAbout = styled.div`
  width: 50%;
`
const AboutContent = styled.div`
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
  }
`
const DownloadBtn = styled.button`
  background-color: #17A1A6;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: white;
  padding: 7px 10px;
  margin-right: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const ContactBtn = styled.button`
  background-color: #D4F8FA;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  color: #17A1A6;
  padding: 7px 10px;
  border: solid 2px #17A1A6;
  border-radius: 5px;
  cursor: pointer;
`

const About = ({ language }) => {

  return (
    <AboutSection id='about'>
      <ImageAbout>
      <Image
          src="/img/about-image.png"
          alt={language.about.title}
          quality={100}
          width={470}
          height={567}
          style={{
            position: 'absolute',
            bottom: 0,
            left: '20px',
          }}
          />
      </ImageAbout>
      <AboutContent>
        <h2>{language.about.title}</h2>
        <p>{language.about.text}</p>
        <p style={{
          marginBottom: '15px'
        }}>{language.about.text2}</p>
        <p>{language.about.text3}</p>
        <p style={{
          marginBottom: '15px'
        }}>{language.about.text4}</p>
        <p>{language.about.text5}</p>
        <div>
          <a href={language.about.downloadHref}>
            <DownloadBtn>{language.about.downloadBtn}</DownloadBtn>
          </a>
          <Link href="#contact">
            <ContactBtn>{language.about.contactBtn}</ContactBtn>
          </Link>
        </div>
        <div>
          <HorizontalIcons />
        </div>

      </AboutContent>
    </AboutSection>
  )
}

export default About