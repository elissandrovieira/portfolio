import { useState, useEffect } from 'react'
import styled, { useTheme } from 'styled-components'

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

const Button = ({ children, backgroundColor, color, padding, margin, border, fontSize, width, onClick }) => {
  const theme = useTheme()
  const textColor = '#FFFFFF'
  const buttonColor = theme.pallete.button.primary 

  const [borderColored, setBorderColored] = useState(textColor)


  useEffect(() => {
    setBorderColored(color)
  }, [color])

  const outlinedBorder = `solid 2px ${borderColored}`
  

  return (
    <Btn style={{
      backgroundColor: backgroundColor ? backgroundColor : buttonColor,
      color: color ? color : textColor,
      padding: padding ? padding : '7px 10px',
      margin: margin ? margin : '0',
      border: border ? outlinedBorder : 'none',
      fontSize: fontSize ? fontSize : '12px',
      width: width ? width : 'none',
    }}
    onClick={onClick}
    >
      {children}
    </Btn>
  )
}

export default Button