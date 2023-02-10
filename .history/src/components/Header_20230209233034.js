import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  const Container = styled.div`
    display: flex;
    max-width: 1170px;
  `
  const MenuLinks = styled.li`
    font-size: 14px;
    list-style: none;
  `

  return (
    <Container class>
      <Link href="/">
        <Image
        src="/logo.svg"
        alt="eli.vieira logo"
        width={109}
        height={26}
        />
      </Link>
      <nav>
        <ul>
          <Link href="#features">
            <MenuLinks>Features</MenuLinks>
          </Link>
        </ul>
      </nav>
    </Container>
  )
}

export default Header