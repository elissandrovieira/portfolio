import { useState, useEffect } from 'react'
import styled from 'styled-components'

import ligth from '@/theme/light'

const Button = ({ children, backgroundColor, color, padding, margin, border }) => {
  const textColor = ligth.pallete.text.secondary
  const buttonColor = ligth.pallete.button.primary 

  const [borderColored, setBorderColored] = useState(textColor)


  useEffect(() => {
    setBorderColored(color)
  }, [color])

  const outlinedBorder = `solid 2px ${borderColored}`
  
  const Btn = styled.button`
  background-color: ${backgroundColor ? backgroundColor : buttonColor};
  color: ${color ? color : textColor};
  padding: ${padding ? padding : '7px 10px'};
  margin: ${margin ? margin : '0'};
  border: ${border ? outlinedBorder : 'none'};
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  `

  return (
    <Btn>
      {children}
    </Btn>
  )
}

export default Button