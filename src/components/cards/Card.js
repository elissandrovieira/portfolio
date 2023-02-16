import styled, { useTheme } from 'styled-components'

import Button from '../Button'

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  min-width: 250px;
  height: 250px;
  padding: 40px 20px;
  background-color: ${props => props.theme.pallete.card.primary};
  border-radius: 20px;
  box-shadow: 10px 10px 50px ${props => props.theme.pallete.shadow};

  @media (max-width: 1100px) {
    width: 100vw;
    height: 250px;
    margin: 20px;
  }
`
const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 7px;
`
const CardParag = styled.p`
  font-size: 14px;
  text-align: center;
`

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 200px;
  height: 200px;
  border-radius: 20px;
  background-color: ${props => props.theme.pallete.card.primary};
  box-shadow: 10px 10px 50px ${props => props.theme.pallete.shadow};

  h3{
    font-size: 14px;
    font-weight: 400;
    padding-top: 20px;
  }

  @media ( max-width: 1100px) {
    min-width: 150px;
    height: 150px;
  }

  @media (max-width: 850px) {
    width: 100%;
    margin-bottom: 20px;
    :last-child{
      margin-bottom: 0;
    }
  }
`

const Projects =  styled.div`
  display: flex;
  flex-direction: column;
  max-width: 370px;
  min-height: 405px;
  height: 100%;
  border-radius: 20px;
  background-color: ${props => props.theme.pallete.card.primary};
  box-shadow: 10px 10px 50px ${props => props.theme.pallete.shadow};

  @media (max-width: 850px) {
    min-width: 300px;
  }
`
const ImageProducts = styled.div`
position: relative;
width: 100%;
height: 200px;
`
const ProjectsContent = styled.div`
  display: flex;
  height: 50%;
  flex-direction: column;
  align-items: center;
  padding: 0 50px 20px 50px;

  h3{
    display: flex;
    align-items: center;
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    height: 30%;
  }

  p{
    font-size: 14px;
    text-align: center;
    margin: 15px 0 0 0;
    height: 30%;
  }
`
const ProjectSample =  styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 370px;
  width: 370px;
  min-height: 405px;
  padding: 0 70px;
  border-radius: 20px;
  background-color: ${props => props.theme.pallete.card.secondary};
  box-shadow: 10px 10px 50px ${props => props.theme.pallete.shadow};

  h3{
    font-size: 24px;
    margin-top: 30px;
    color: white;
    margin-bottom: 10px;
  }

  @media (max-width: 850px) {
    min-width: 300px;
  }
`

export const FeatureCard = ({image, title, text, text2, text3}) => {
  return (
    <>
      <Feature>
        {image}
        <CardTitle>{title}</CardTitle>
        <CardParag>{text}</CardParag>
        <CardParag>{text2}</CardParag>
        <CardParag>{text3}</CardParag>
      </Feature>
    </>
  )
}

export const SkillsCard = ({image, title}) => {
  return (
    <>
      <Skills>
        {image}
        <h3>{ title }</h3>
      </Skills>
    </>
  )
}
export const ProjectsCard = ({image, title, text, language}) => {
  return (
    <>
      <Projects>
        <ImageProducts>
          {image}
        </ImageProducts>
        <ProjectsContent>
          <h3>{ title }</h3>
          <p>{text}</p>
          <Button
          padding="7px 30px"
          fontSize="14px"
          >
            {language.projects.detailsBtn}
          </Button>
        </ProjectsContent>
      </Projects>
    </>
  )
}

export const ProjectsCardSample = ({ language }) => {
  return (
    <>
      <ProjectSample>
        <div>
        <h3>
          {language.projects.seeMoreBtn}
        </h3>
        <svg width="38" height="26" viewBox="0 0 38 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M22.3787 0.87868C23.5503 -0.292893 25.4497 -0.292893 26.6213 0.87868L36.6213 10.8787C37.7929 12.0503 37.7929 13.9497 36.6213 15.1213L26.6213 25.1213C25.4497 26.2929 23.5503 26.2929 22.3787 25.1213C21.2071 23.9497 21.2071 22.0503 22.3787 20.8787L27.2574 16H3C1.34315 16 0 14.6569 0 13C0 11.3431 1.34315 10 3 10H27.2574L22.3787 5.12132C21.2071 3.94975 21.2071 2.05025 22.3787 0.87868Z" fill="white"/>
        </svg>
        </div>

      </ProjectSample>
    </>
  )
}