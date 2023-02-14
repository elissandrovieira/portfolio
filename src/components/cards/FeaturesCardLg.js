import Image from 'next/image'
import styled from 'styled-components'
import { FeatureCard } from '../Card'

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const FeaturesCardLg = ({ language }) => {
    return(
        <CardContainer>
              <FeatureCard
                image={
                  <Image
                    src={language.features.cards[1].image}
                    alt={language.features.cards[1].title}
                    width={55}
                    height={72}
                    style={{ marginBottom: '20px' }}
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
                    style={{ marginBottom: '20px' }}
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
                    style={{ marginBottom: '20px' }}
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
                    style={{ marginBottom: '20px' }}
                  />
                }
                title={language.features.cards[4].title}
                text={language.features.cards[4].text}
                text2={language.features.cards[4].text2}
                text3={language.features.cards[4].text3}
              />

            </CardContainer>
    )
}

export default FeaturesCardLg