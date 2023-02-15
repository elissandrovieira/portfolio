import Image from 'next/image'
import styled from 'styled-components'

import { FeatureCard } from '@/components/cards/Card'
import { Interfaces, AgileMet, WebDev, AppDesign } from '../Vectors'

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const FeaturesCardMd = ({ language }) => {
  return (
    <>
      <CardContainer>
        <FeatureCard
          image={
            <Interfaces margin="0 0 20px 0" />
          }
          title={language.features.cards[1].title}
          text={language.features.cards[1].text}
        />
        <FeatureCard
          image={
            <AgileMet margin="0 0 20px 0" />
          }
          title={language.features.cards[2].title}
          text={language.features.cards[2].text}
        />
      </CardContainer>
      <CardContainer>
        <FeatureCard
          image={
            <WebDev margin="0 0 20px 0" />
          }
          title={language.features.cards[3].title}
          text={language.features.cards[3].text}
        />
        <FeatureCard
          image={
            <AppDesign margin="0 0 20px 0" />
          }
          title={language.features.cards[4].title}
          text={language.features.cards[4].text}
          text2={language.features.cards[4].text2}
          text3={language.features.cards[4].text3}
        />
      </CardContainer>
    </>
  )
}

export default FeaturesCardMd