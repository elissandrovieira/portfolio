import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styled, { useTheme } from 'styled-components'
import { useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'

import MenuMb from './menus/MenuMb'
import dark from '@/theme/dark'
import Button, { LangButton } from './Button'
import { LogoIcon, LeftMenuIcon, RightMenuIcon, CenterMenuIcon } from '@/components/icons/Icons'

const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 20px 15px 0 15px;
  margin: 0 auto;
  z-index: 1;

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
    transition: 100ms;

    :hover{
      color: ${props => props.theme.pallete.text.tertiary}
    };

    &:last-child{
      margin: 0;
    }
  }

  @media( max-width: 800px) {
    display: none;
  }
`
const ThemeBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 35px;

  @media (max-width: 800px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`

const variants = {
  left:{
    open: { x: 0 },
    closed: { x: "5px" },
  },
  right:{
    open: { x: 0 },
    closed: { x: "-5px" },
  },
  center:{
    open: { opacity: 1 },
    closed: { opacity: 0 },
  },
}

const Header = ({handleChangeTheme}) => {
  const [isOpen, setIsOpen] = useState(false)

  const theme =  useTheme()

  const maxWidthSm = useMediaQuery('(max-width: 800px)')

  const {locale, push} = useRouter()

  const handleChangeLanguage = (e) => {
    locale === 'pt'
    ? push('/', '/', { locale: 'en' })
    : push('/', '/', { locale: 'pt' })
  }

  return (
    <>
      {
        maxWidthSm
        ? (
          <MenuMb
          isOpen={isOpen}
          />
        ) : (
          null
        )
      }
      <Container className="mainContainer" id="header">
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
          </Menu>
          <LangButton 
          backgroundColor="transparent"
          border={maxWidthSm ? false : true}
          color={theme.pallete.text.primary}
          padding= '2px 10px'
          fontSize={maxWidthSm ? '16px' : '14px'}
          width="80px"
          margin="0 0 0 35px"
          onClick={(e) => handleChangeLanguage(e)}
          maxWidthSm={maxWidthSm}
          >
            
            {
              locale ==='pt'
              ? 'EN'
              : 'PT'
            }
          </LangButton>
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
          {
            maxWidthSm
            ? (
              <Button
              backgroundColor="transparent"
              color={theme.pallete.text.primary}
              onClick={() => setIsOpen(isOpen => !isOpen)}
              >
                <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants.left}
                >
                  <LeftMenuIcon color={theme.pallete.text.primary} />
                </motion.div>
                <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants.center}
                >
                  <CenterMenuIcon color={theme.pallete.text.primary} />
                </motion.div>

                <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants.right}
                >
                  <RightMenuIcon color={theme.pallete.text.primary} />
                </motion.div>
              </Button>
            ) : ( null )
          }
        </Navigation>
      </Container>
    </>
  )
}

export default Header