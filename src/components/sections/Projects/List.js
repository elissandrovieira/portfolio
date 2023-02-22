import styled from 'styled-components'
import { useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import { useTheme } from 'styled-components'

import { BackIcon } from '@/components/icons/Icons'
import ListCardLg from '@/components/cards/projects/ListCardLg'

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  overflow-y: scroll;
`

const variantsBg = {
  open: { opacity: 1, display: 'flex', },
  closed: { opacity: 0, display: 'none', }
}

const variantsContainer = {
  open: { marginLeft: '0', display: 'block' },
  closed: { marginLeft: '-100vw', display: 'none'}
}

const List = ({language, isOpen, onClick}) => {
  const theme = useTheme()
  const maxWidthMb = useMediaQuery('(max-width: 850px)')

  return (
    <motion.div
    style={{
      display: 'none',
      position: 'fixed',
      width: '100%',
      height: '100%',
      marginTop: '-50px',
      padding: maxWidthMb ? '10px' : '50px',
      backgroundColor: '#00000091',
      zIndex: '1',
    }}
    animate={ isOpen ? "open" : "closed"}
    variants={variantsBg}
    exit="closed"
    >
      <motion.div
      style={{
        display: 'none',
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        padding:  maxWidthMb ? '40px 10px' : '50px',
        backgroundColor: theme.pallete.background,
        boxShadow: `10px 10px 50px ${theme.pallete.shadow}`,
      }}
      animate={ isOpen ? "open" : "closed"}
      variants={variantsContainer}
      exit="closed"
      >
        <BackIcon
        margin="0 0 15px 0"
        onClick={onClick}
        />
        <CardContainer>
          <ListCardLg language={language} />
        </CardContainer>
      </motion.div>
    </motion.div>
  )
}

export default List