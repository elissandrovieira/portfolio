import styled, { useTheme } from 'styled-components'
import { useMediaQuery } from '@mui/material'

import { SkillsCard } from '../cards/Card'
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  SassIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  ExpressIcon,
  GitIcon,
  MongodbIcon
} from '../icons/SkillsIcons'

const SkillsSection = styled.section`
  max-width: 1200px;
  padding: 100px 15px 0 15px;
  margin: 0 auto;

  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
  }
`
const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  :last-child{
    margin-bottom: 0;
  }
`
const SkillsContainerMb = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 20px;
  :last-child{
    margin-right: 0;
  }
`

const Skills = () => {
  const theme = useTheme()
  const maxWidthMd = useMediaQuery('(max-width:850px)')

  const skillsList = [
    [
      {
        title: 'HTML 5',
        image: <HtmlIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      },
      {
        title: 'CSS 3',
        image: <CssIcon color={theme.pallete.text.primary} />
      },
      {
        title: 'Javascript',
        image: <JsIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      },
      {
        title: 'SASS',
        image: <SassIcon color={theme.pallete.text.primary} />
      },
      {
        title: 'React.js',
        image: <ReactIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      },
    ],
    [
      {
        title: 'Next.js',
        image: <NextIcon color={theme.pallete.text.primary} />
      },
      {
        title: 'Node.js',
        image: <NodeIcon color={theme.pallete.text.primary} />
      },
      {
        title: 'Express',
        image: <ExpressIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      },
      {
        title: 'GIT',
        image: <GitIcon color={theme.pallete.text.primary} />
      },
      {
        title: 'Mongo DB',
        image: <MongodbIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      }
    ]
  ]

  const skillsListMb = [
    [
      {
        title: 'HTML 5',
        image: <HtmlIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      },
      {
        title: 'Javascript',
        image: <JsIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      },
      {
        title: 'React.js',
        image: <ReactIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      },
      {
        title: 'Node.js',
        image: <NodeIcon color={theme.pallete.text.primary} />
      },
      {
        title: 'GIT',
        image: <GitIcon color={theme.pallete.text.primary} />
      },
    ],
    [
      {
        title: 'CSS 3',
        image: <CssIcon color={theme.pallete.text.primary} />
      },
      {
        title: 'SASS',
        image: <SassIcon color={theme.pallete.text.primary} />
      },
      {
        title: 'Next.js',
        image: <NextIcon color={theme.pallete.text.primary} />
      },
      {
        title: 'Express',
        image: <ExpressIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      },
      {
        title: 'Mongo DB',
        image: <MongodbIcon color={theme.pallete.text.primary} secondColor={theme.pallete.card.primary} />
      }
    ]


  ]

  return (
    <SkillsSection>
      {
        maxWidthMd
          ? (
            <>
              <SkillsContainerMb>
                {
                  skillsListMb[0].map((e) => (
                    <SkillsCard
                      image={e.image}
                      title={e.title}
                      key={e.title}
                    />
                  ))
                }
              </SkillsContainerMb>
              <SkillsContainerMb>
                {
                  skillsListMb[1].map((e) => (
                    <SkillsCard
                      image={e.image}
                      title={e.title}
                      key={e.title}
                    />
                  ))
                }
              </SkillsContainerMb>
            </>
          ) : (
            <>
              <SkillsContainer>
                {
                  skillsList[0].map((e) => (
                    <SkillsCard
                      image={e.image}
                      title={e.title}
                      key={e.title}
                    />
                  ))
                }
              </SkillsContainer>
              <SkillsContainer>
                {
                  skillsList[1].map((e) => (
                    <SkillsCard
                      image={e.image}
                      title={e.title}
                      key={e.title}
                    />
                  ))
                }
              </SkillsContainer>
            </>
          )
      }
    </SkillsSection>
  )
}

export default Skills