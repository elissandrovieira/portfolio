import { borderColor } from '@mui/system'
import { useState, useEffect, Children } from 'react'
import styled from 'styled-components'


const Filled = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
const Outlined = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
`

export const FilledButton = ({ children, padding, margin, backgroundColor, color }) => {
  const [defaultValues, setDefaultValues] = useState({
    backgroundColor: '#17A1A6',
    color: 'white',
    padding: '7px 10px',
    margin: '0',
  })

  useEffect(() => {
    backgroundColor
    ? (
      setDefaultValues({
        ...defaultValues,
        backgroundColor,
      })
    ) : color
    ? (
      setDefaultValues({
        ...defaultValues,
        color,
      })
    ) : padding
    ? (
      setDefaultValues({
        ...defaultValues,
        padding,
      })
    ) : margin
    ? (
      setDefaultValues({
        ...defaultValues,
        margin,
      })
    ) : null
  }, [
    backgroundColor,
    color,
    padding,
    margin,
    defaultValues
  ])
  

  return (
    <Filled
    style={{
      padding: defaultValues.padding,
      margin: defaultValues.margin,
      backgroundColor: defaultValues.backgroundColor,
      color: defaultValues.color
    }}
    >
      {children}
    </Filled>
  )
}

export const OutlinedButton = ({
  children,
  padding,
  margin,
  backgroundColor,
  color,
  borderColor,
  borderStyle,
  borderWidth
}) => {
  const [defaultValues, setDefaultValues] = useState({
    backgroundColor: '#D4F8FA',
    color: '#17A1A6',
    borderStyle: 'solid',
    borderColor: '#17A1A6',
    borderWidth: '2px',
    padding: '7px 10px',
    margin: '0',
  })

  useEffect(() => {
    backgroundColor
    ? (
      setDefaultValues({
        ...defaultValues,
        backgroundColor,
      })
    ) : borderStyle
    ? (
      setDefaultValues({
        ...defaultValues,
        borderStyle,
      })
    ) : borderColor
    ? (
      setDefaultValues({
        ...defaultValues,
        borderColor,
      })
    ) : borderWidth
    ? (
      setDefaultValues({
        ...defaultValues,
        borderWidth,
      })
    ) : color
    ? (
      setDefaultValues({
        ...defaultValues,
        color,
      })
    ) : padding
    ? (
      setDefaultValues({
        ...defaultValues,
        padding,
      })
    ) : margin
    ? (
      setDefaultValues({
        ...defaultValues,
        margin,
      })
    ) : null
  }, [
    backgroundColor,
    color,
    borderColor,borderStyle,borderWidth,
    padding,
    margin,
    defaultValues
  ])
  

  return (
    <Outlined
    style={{
      backgroundColor: defaultValues.backgroundColor,
      color: defaultValues.color,
      borderStyle: defaultValues.borderStyle,
      borderColor: defaultValues.borderColor,
      borderWidth: defaultValues.borderWidth,
      padding: defaultValues.padding,
      margin: defaultValues.margin,
    }}
    >
      {children}
    </Outlined>
  )
}