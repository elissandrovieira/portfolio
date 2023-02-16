import styled from 'styled-components'

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
  width: 370px;
  height: 500px;
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