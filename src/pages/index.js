import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styled from 'styled-components'

import TemplateDefault from '../templates/Default'
import { FeatureCard } from '@/components/Card'
import { HorizontalIcons} from '@/components/ContactIcons'
import CvEn from '@/cv/en/cv-elissandro-vieira.pdf'

import en from '../languages/en'
import pt from '../languages/pt'

const Banner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 50px 15px 0 15px;
  margin: 0 auto;
`

const TitleBanner = styled.div`
  width: 50%;
  padding-bottom: 50px;
`

const FirstLine = styled.span`
  text-transform: uppercase;
  font-size: 18px;
`

const Title = styled.h1`
  font-weight: 900;
  font-size: 72px;
`

const LastLine = styled.span`
  font-size: 15px;
  letter-spacing: -0.3px;
`

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;

  div{
    position: relative;
    width: 400px;
    height: 510px;

  }
`

const Features = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 15px 0 15px;

  h2 {
    font-size: 24px;
    margin-bottom: 50px;
  }

  div{
    display: flex;
    justify-content: space-between;
  }
`

const About = styled.section`
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

export default function Home() {
  const { locale } = useRouter()

  const [ language, setLanguage ] = useState(en)

  useEffect(() => {
    locale === 'pt'
    ? setLanguage(pt)
    : setLanguage(en)
  }, [locale])


  return (
    <TemplateDefault>
      <Banner id='home'>
        <TitleBanner>
          <FirstLine>{language.banner.firstLine}</FirstLine>
          <Title>{language.banner.title}</Title>
          <LastLine>{language.banner.lastLine}</LastLine>
        </TitleBanner>
        <ImageContainer>
          <div>
            <Image
            src="/img/banner/imageBanner.png"
            alt="eli.vieira logo"
            quality={100}
            fill
            style={{objectFit: 'contain'}}
            />
          </div>
        </ImageContainer>
      </Banner>
      <Features id='features'>
        <h2>{language.features.title}</h2>
        <div>
          <FeatureCard
            image={
              <Image
              src={language.features.cards[1].image}
              alt={language.features.cards[1].title}
              width={55}
              height={72}
              style={{marginBottom: '20px'}}
              />
            }
            title={language.features.cards[1].title}
            text={language.features.cards[1].text}
          />
          <FeatureCard
            image={
              <Image
              src={language.features.cards[2].image}
              alt={language.features.cards[2].title}
              width={55}
              height={72}
              style={{marginBottom: '20px'}}
              />
            }
            title={language.features.cards[2].title}
            text={language.features.cards[2].text}
          />
          <FeatureCard
            image={
              <Image
              src={language.features.cards[3].image}
              alt={language.features.cards[3].title}
              width={55}
              height={72}
              style={{marginBottom: '20px'}}
              />
            }
            title={language.features.cards[3].title}
            text={language.features.cards[3].text}
          />
          <FeatureCard
            image={
              <Image
              src={language.features.cards[4].image}
              alt={language.features.cards[4].title}
              width={55}
              height={72}
              style={{marginBottom: '20px'}}
              />
            }
            title={language.features.cards[4].title}
            text={language.features.cards[4].text}
            text2={language.features.cards[4].text2}
            text3={language.features.cards[4].text3}
          />
          
        </div>
      </Features>
      <About id='about'>
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
            <a href={language.about.downloadHref} download="cv-elissandro-vieira">
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
      </About>

    </TemplateDefault>
  )
}
