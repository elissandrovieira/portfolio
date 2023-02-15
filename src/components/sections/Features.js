import styled from 'styled-components'
import useMediaQuery from '@mui/material/useMediaQuery'

import FeaturesCardLg from '../cards/FeaturesCardLg'
import FeaturesCardMd from '../cards/FeaturesCardMd'
import FeaturesCardSm from '../cards/FeaturesCardSm'

const TechFeatures = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 15px 0 15px;

  h2 {
    font-size: 24px;
    margin-bottom: 50px;
  }

  @media (max-width: 1100px) {
    padding: 0;
  }
  @media (max-width: 700px) {
    padding: 0 15px;
    margin-top: -300px;
  }

`


const Features = ({ language }) => {
  const maxWidthMd = useMediaQuery('(max-width:1100px)') & useMediaQuery('(min-width:549px)')
  const maxWidthSm = useMediaQuery('(max-width:550px)')

  return (
    <TechFeatures id='features'>
      <h2>{language.features.title}</h2>
      {
        maxWidthSm
        ? (
          <FeaturesCardSm
          language={language}
          />
          ) : maxWidthMd
        ? (
          <FeaturesCardMd
          language={language}
          />
          
        ) : (
          <FeaturesCardLg language={language} />
        )
      }
    </TechFeatures>
  )
}

export default Features