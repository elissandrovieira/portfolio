import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { FeatureCard } from '@/components/Card'

const CardContainer = styled.div`
  overflow: hidden;
`

const FeaturesCardSm = ({ language, carousel, width }) => {
  return (
    <CardContainer>
      <motion.div style={{
        cursor: 'grab',
        overflow: 'hidden'
      }}
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div style={{
          display: 'flex',
          justifyContent: 'space-between',
          with: '100vw'
        }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
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

        </motion.div>
      </motion.div>
    </CardContainer>
  )
}

export default FeaturesCardSm