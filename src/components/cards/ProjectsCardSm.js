import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { ProjectsCard, ProjectsCardSample } from '@/components/cards/Card'

const CardContainer = styled.div`
  overflow: hidden;
`

const ProjectsCardSm = ({ language }) => {
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
          {
            language.projects.projectsList.map((e) => (
              <div key={e.title}>
                <ProjectsCard
                language={language}
                image={
                  <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  style={{
                      borderRadius: '20px 20px 0 0',
                      objectFit: 'cover'
                  }}
                  />
                }
                title={e.title}
                text={e.text}
                />
              </div>
            ))
            }
            <ProjectsCardSample language={language}/>
        </motion.div>
      </motion.div>
    </CardContainer>
  )
}

export default ProjectsCardSm