import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { useTheme } from 'styled-components'

import light from '@/theme/light'
import { DarkModeIcon, LightModeIcon } from './Icons'

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
  const [themeIcon, setThemeIcon] = useState(useTheme === light ? LightModeIcon : DarkModeIcon)

  const handleTheme = () => {
    setThemeIcon(
      themeIcon === LightModeIcon
      ? DarkModeIcon
      : LightModeIcon
    )
    handleChangeTheme()
  }

  const {locale, push} = useRouter()
  const handleChangeLanguage = (e) => {
    locale === 'pt'
    ? push('/', '/', { locale: 'en' })
    : push('/', '/', { locale: 'pt' })
  }

  return (
    <Container className="mainContainer">
      <Link href="/">
        <Image
        src="/img/header/logo.svg"
        alt="eli.vieira logo"
        width={109}
        height={26}
        />
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
              <ContactBtn>Contact me</ContactBtn>
            </li>
          </Link>
          <li>
          <Languages onClick={handleChangeLanguage}>
            <Image
            src="/img/header/globe.svg"
            alt="languages"
            width={20}
            height={20}
            style={{
              marginRight: '10px'
            }}
            />
            {
              locale ==='pt'
              ? 'EN'
              : 'PT'
            }
          </Languages>
          </li>
        </Menu>
        <ThemeBtn
        onClick={handleTheme}
        >
          {
            themeIcon === LightModeIcon
            ? <LightModeIcon />
            : <DarkModeIcon />
          }
        </ThemeBtn>
      </Navigation>
    </Container>
  )
}

export default Header