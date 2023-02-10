import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  padding: 20px 15px 0 15px;
  margin: 0 auto;
`
const Menu = styled.ul`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 700;

  li{
    list-style: none;
  margin-right: 35px;
  cursor: pointer;
  }
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
display: flex;
align-items: center;
background-color: #A1ADC3;
padding: 0 10px;
border-radius: 5px;
cursor: pointer;

  select{
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: white;
    border: none;
    background: transparent;
    padding: 7px -5px 7px 10px;
    cursor: pointer;
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
            <li>Features</li>
          </Link>
          <Link href="#about" legacyBehavior>
            <li>About</li>
          </Link>
          <Link href="#skills" legacyBehavior>
            <li>Skills</li>
          </Link>
          <Link href="#projects" legacyBehavior>
            <li>Projects</li>
          </Link>
          <Link href="#contact" legacyBehavior>
            <li>
              <ContactBtn>Contact me</ContactBtn>
            </li>
          </Link>
          <li>
            <Languages>
            <Image
            src="/globe.svg"
            alt="languages"
            width={20}
            height={20}
            />
              <select>
                <option value="en">English</option>
                <option value="pt">Portuguese</option>
              </select>
            </Languages>
          </li>
          
        </Menu>
      </nav>
    </Container>
  )
}

export default Header