import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1170px;
  margin: 20px auto 0 auto;
`
const Menu = styled.ul`
  display: flex;
`
const MenuLinks = styled.li`
  font-size: 12px;
  font-weight: 700;
  list-style: none;
  margin-right: 35px;
`
const 
const Header = () => {

  return (
    <Container className="mainContainer">
      <Link href="/">
        <Image
        src="/logo.svg"
        alt="eli.vieira logo"
        width={109}
        height={26}
        />
      </Link>
      <nav>
        <Menu>
          <Link href="#features" legacyBehavior>
            <MenuLinks>Features</MenuLinks>
          </Link>
          <Link href="#about" legacyBehavior>
            <MenuLinks>About</MenuLinks>
          </Link>
          <Link href="#skills" legacyBehavior>
            <MenuLinks>Skills</MenuLinks>
          </Link>
          <Link href="#projects" legacyBehavior>
            <MenuLinks>Projects</MenuLinks>
          </Link>
        </Menu>
      </nav>
    </Container>
  )
}

export default Header