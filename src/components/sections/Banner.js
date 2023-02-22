import Image from 'next/image'
import styled from 'styled-components'
import useMediaQuery from '@mui/material/useMediaQuery'

const HomeBanner = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  padding: 50px 15px 0 15px;
  margin: 0 auto;
`
const HomeBannerMb = styled.section`
  display: flex;
  align-items: flex-start;
  max-width: 1200px;
  padding-left: 30px;
  margin-top: -60px;
  height: 150vh;
  width: 100vw;

  @media (max-width: 390px){
    height: 170vh;
  }
`

const TitleBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  padding-bottom: 40px;

  @media(max-width: 700px) {
    width: 100%;
    height: 100vh;
   justify-content: center;
  }
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
  overflow: hidden;

  div{
    position: relative;
    width: 400px;
    height: 510px;
  }
`

const Banner = ({ language }) => {
  const maxWidth = useMediaQuery('(max-width:700px)')
    return(
      <>
        {
          maxWidth
          ? (
            <HomeBannerMb id='home' className='homeBannerMb'>
              <TitleBanner>
                <FirstLine>{language.banner.firstLine}</FirstLine>
                <Title>{language.banner.title}</Title>
                <LastLine>{language.banner.lastLine}</LastLine>
              </TitleBanner>
            </HomeBannerMb>
          ) : (
            <HomeBanner id='home'>
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
            </HomeBanner>
          )
            }
          
      </>
    )
}

export default Banner