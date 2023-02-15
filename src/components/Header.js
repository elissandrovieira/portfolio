import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { useTheme } from 'styled-components'

import dark from '@/theme/dark'
import Button from './Button'
import { LogoIcon, LanguageIcon } from '@/components/Icons'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 20px 15px 0 15px;
  margin: 0 auto;
`
const Navigation = styled.nav`
  display: flex;
`

const Menu = styled.ul`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;

  li{
    list-style: none;
    margin-right: 35px;
    color: ${props => props.theme.pallete.text.primary};
    cursor: pointer;

    &:last-child{
      margin: 0;
    }
  }

  @media( max-width: 800px) {
    display: none;
  }
`

const ContactBtn = styled.button`
background-color: ${props => props.theme.pallete.button.primary};
font-family: 'Montserrat', sans-serif;
font-size: 12px;
font-weight: 700;
color: white;
padding: 7px 10px;
border: none;
border-radius: 5px;
cursor: pointer;

`
const Languages = styled.button`
display: flex;
align-items: center;
background-color: #A1ADC3;
font-family: 'Montserrat', sans-serif;
font-size: 12px;
font-weight: 700;
color: white;
padding: 5px 15px;
border: none;
border-radius: 5px;
cursor: pointer;
`

const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 35px;
  z-index: 1;
`

const Header = ({handleChangeTheme}) => {
  const theme =  useTheme()

  const {locale, push} = useRouter()

  const handleChangeLanguage = (e) => {
    locale === 'pt'
    ? push('/', '/', { locale: 'en' })
    : push('/', '/', { locale: 'pt' })
  }

  return (
    <Container className="mainContainer">
      <Link href="/">
        <LogoIcon color={theme.pallete.text.primary} />
      </Link>
      <Navigation>
        <Menu>
          <Link href="#features" legacyBehavior scroll={false}>
            <li>Features</li>
          </Link>
          <Link href="#about" legacyBehavior scroll={false}>
            <li>About</li>
          </Link>
          <Link href="#skills" legacyBehavior scroll={false}>
            <li>Skills</li>
          </Link>
          <Link href="#projects" legacyBehavior scroll={false}>
            <li>Projects</li>
          </Link>
          <Link href="#contact" legacyBehavior scroll={false}>
            <li>
              <Button>Contact me</Button>
            </li>
          </Link>
          <li>
            <Button 
            backgroundColor="transparent"
            border
            color={theme.pallete.text.primary}
            padding= '2px 10px'
            fontSize='14px'
            width="80px"
            onClick={handleChangeLanguage}
            >
              <LanguageIcon
              color={theme.pallete.text.primary}
              margin='0 10px 0 0'
              />
              {
                locale ==='pt'
                ? 'EN'
                : 'PT'
              }
            </Button>
          </li>
        </Menu>
        <ThemeBtn
        onClick={handleChangeTheme}
        >
          <Image
            src={theme === dark ? "/img/header/light-mode.svg" : "/img/header/dark-mode.svg"}
            alt="theme changer"
            width={26}
            height={26}
            />
        </ThemeBtn>
      </Navigation>
    </Container>
  )
}

export default Header