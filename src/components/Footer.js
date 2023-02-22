import styled from 'styled-components'
import { useMediaQuery } from '@mui/material'

import { LogoIcon } from '@/components/icons/Icons'
import Link from 'next/link'

const Container = styled.footer`
    background-color: ${props => props.theme.pallete.button.primary};
    width: 100%;
    
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 15px;
    }

    p{
        color: white;
        font-size: 12px;
    }
`

const Footer = () => {
  const maxWidthMd = useMediaQuery('(max-width:600px)')

  return (
    <Container>
      <div>
        <Link href="#header" scroll={false}>
          <LogoIcon color='white' />
        </Link>
          {
            maxWidthMd
            ? <p>2023 © Elissandro Vieira. <br /> All Rights Reserved</p>
            : <p>2023 © Elissandro Vieira. All Rights Reserved</p>
          }
      </div>
    </Container>
  )
}

export default Footer