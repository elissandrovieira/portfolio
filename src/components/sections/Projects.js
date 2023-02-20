import styled from 'styled-components'
import { useMediaQuery } from '@mui/material'


import ProjectsCardLg from '../cards/ProjectsCardLg'
import ProjectsCardSm from '../cards/ProjectsCardSm'

const ProjectsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 15px 0 15px;
`
const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div{
    margin-right: 20px;
    :last-child{
      margin: 0;
    }
  }
`

const Projects = ({language}) => {
  const maxWidthMb = useMediaQuery('(max-width: 850px)')
  
  return (
    <ProjectsSection>
      <CardContainer>
      {
        maxWidthMb
        ?(
          <ProjectsCardSm language={language} />
        ) : (
          <ProjectsCardLg language={language} />
        )
      }
      </CardContainer>
    </ProjectsSection>
  )
}

export default Projects