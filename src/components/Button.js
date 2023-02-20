import { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'
import { motion } from 'framer-motion'

import { LanguageIcon } from '@/components/icons/Icons'

const Btn = styled.button`
display: flex;
align-items: center;
justify-content: center;
font-family: 'Montserrat', sans-serif;
font-weight: 700;
border: none;
border-radius: 5px;
cursor: pointer;
`

const Button = ({ children, backgroundColor, hoverBackground, hoverColor, color, padding, margin, border, fontSize, width, onClick }) => {
  const theme = useTheme()
  const textColor = '#FFFFFF'
  const buttonColor = backgroundColor ? backgroundColor : theme.pallete.button.primary
  const buttonHover = {
    background: hoverBackground ? hoverBackground : theme.pallete.button.secondary,
    color: hoverColor ? hoverColor : theme.pallete.button.primary,
    borderColor: hoverColor ? hoverColor : theme.pallete.button.primary,
  }

  const [borderColored, setBorderColored] = useState(textColor)


  useEffect(() => {
    setBorderColored(color)
  }, [color])

  const outlinedBorder = `solid 2px ${borderColored}`

  const buttonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: buttonColor,
    color: color ? color : textColor,
    padding: padding ? padding : '7px 10px',
    margin: margin ? margin : '0',
    border: border ? outlinedBorder : 'none',
    fontSize: fontSize ? fontSize : '12px',
    width: width ? width : 'none',
  }
  

  return (
    <motion.button
    style={buttonStyles}
    onClick={onClick}
    whileHover={{ backgroundColor: buttonHover.background, color: buttonHover.color, borderColor: buttonHover.color ,scale: 1.05 }}
    transition={{ duration: 0.1 }}
    >
      {children}
    </motion.button>
  )
}

export const LangButton = ({ children, backgroundColor, hoverColor, color, padding, margin, border, fontSize, width, onClick, maxWidthSm }) => {
  const [ isHover, setIsHover ] = useState(false)

  const theme = useTheme()
  const textColor = '#FFFFFF'
  const buttonColor = backgroundColor ? backgroundColor : theme.pallete.button.primary
  const buttonHover = hoverColor ? hoverColor : theme.pallete.text.tertiary

  const [borderColored, setBorderColored] = useState(textColor)

  useEffect(() => {
    setBorderColored(color)
  }, [color])

  const outlinedBorder = `solid 2px ${borderColored}`

  const variants = {
    open: {border: `solid 2px ${buttonHover}`, color: buttonHover, scale: 1.05},
    closed: {border: border ? outlinedBorder : 'none', color: color ? color : textColor, }
  }

  const buttonStyles = {
    position: 'relative', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: '700',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: buttonColor,
    padding: padding ? padding : '7px 10px',
    margin: margin ? margin : '0',
    fontSize: fontSize ? fontSize : '12px',
    width: width ? width : 'none',
  }

  console.log(isHover)

  return(
    <motion.button
    style={buttonStyles}
    onClick={onClick}
    onMouseEnter={() => setIsHover(true)}
    onMouseOut={() => setIsHover(false)}
    animate={isHover ? "open" : "closed"}
    variants={variants}
    transition={{ duration: 0.1 }}
    >
      <LanguageIcon
      color={theme.pallete.text.primary}
      margin= {maxWidthSm ? '0 4px 0 0' : '0 10px 0 0'}
      isHover={isHover}
      />
      {children}
    </motion.button>
  )
}

export default Button