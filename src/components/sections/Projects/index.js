import styled from 'styled-components'
import { useMediaQuery } from '@mui/material'


import ProjectsCardLg from '../../cards/projects/ProjectsCardLg'
import ProjectsCardSm from '../../cards/projects/ProjectsCardSm'

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

const Projects = ({language, onClick}) => {
  const maxWidthMb = useMediaQuery('(max-width: 850px)')
  
  return (
    <ProjectsSection id="projects">
      <h2 style={{marginBottom: maxWidthMb ? 0 :'50px'}}>{language.projects.title}</h2>
      <CardContainer>
      {
        maxWidthMb
        ?(
          <ProjectsCardSm
          language={language}
          onClick={onClick}
          />
        ) : (
          <ProjectsCardLg
          language={language}
          onClick={onClick}
          />
        )
      }
      </CardContainer>
    </ProjectsSection>
  )
}

export default Projects