import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { FeatureCard } from '@/components/cards/Card'
import { Interfaces, AgileMet, WebDev, AppDesign } from '../icons/FeaturesIcons'

const CardContainer = styled.div`
  overflow: hidden;
`

const FeaturesCardSm = ({ language }) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()

  useEffect(() => {
    const scrollWidth = carousel.current?.scrollWidth
    const offsetWidth = carousel.current?.offsetWidth
    setWidth(scrollWidth - offsetWidth)
  }, [])

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

        </motion.div>
      </motion.div>
    </CardContainer>
  )
}

export default FeaturesCardSm