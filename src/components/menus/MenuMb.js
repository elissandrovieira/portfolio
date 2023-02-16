import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styled, { useTheme } from 'styled-components'

const variants = {
  open: { opacity: 1, display: 'block' },
  closed: { opacity: 0, display: 'none' },
}

const Menu = ({ children, isOpen }) => {
  
  const theme =  useTheme()
  return(
    <motion.div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: theme.pallete.background,
      zIndex: 0,
    }}
    animate={isOpen ? "open" : "closed"}
    variants={variants}
    >
      {children}
    </motion.div>
  )
}
const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  padding: 20px 15px 0 15px;
  margin: 0 auto;
`
const NavigationMb = styled.nav`
  height: 100%;
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 24px;
  font-weight: 700;

  li{
    justify-self: center;
    list-style: none;
    color: ${props => props.theme.pallete.text.primary};
    cursor: pointer;
    margin-bottom: 35px;

    &:last-child{
      margin: 0;
    }
  }
`

const MenuMb = ({ isOpen }) => {
  const [open, setOpen] = useState(false)

  const theme =  useTheme()

  return (
    <Menu
    isOpen={isOpen}
    >
      <Container>
        <NavigationMb>
          <List>
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
              <li style={{ color: theme.pallete.text.tertiary, borderBottom: `solid 3px ${theme.pallete.text.tertiary}` }}>Contact me</li>
            </Link>
          </List>
        </NavigationMb>
      </Container>
    </Menu>

  )
}

export default MenuMb