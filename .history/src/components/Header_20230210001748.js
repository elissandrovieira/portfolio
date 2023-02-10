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
  align-items: center;
  font-size: 12px;
  font-weight: 700;
`
const MenuLinks = styled.li`
  list-style: none;
  margin-right: 35px;
  cursor: pointer;
`
const ContactBtn = styled.button`
background-color: #17A1A6;
font-family: 'Montserrat', sans-serif;
font-size: 12px;
font-weight: 700;
color: white;
padding: 7px 10px;
border: none;
border-radius: 5px;
cursor: pointer;

`
const Languages = styled.div`
background-color: #A1ADC3;
font-family: 'Montserrat', sans-serif;
font-size: 12px;
font-weight: 700;
color: white;
padding: 7px 10px;
border-radius: 5px;
cursor: pointer;

  select{
    border: none;
    background: transparent;
  }
`

const Header = () => {
  console.log(Languages.value)
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
          <Link href="#contact" legacyBehavior>
            <MenuLinks>
              <ContactBtn>Contact me</ContactBtn>
            </MenuLinks>
          </Link>
          <MenuLinks>
            <Languages>
              <option value="en">English</option>
              <option value="pt">Portuguese</option>
            </Languages>
          </MenuLinks>
          
        </Menu>
      </nav>
    </Container>
  )
}

export default Header