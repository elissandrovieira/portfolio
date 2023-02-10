import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    max-width: 1170px;
    margin: 20px auto 0 auto;
  `
  const MenuLinks = styled.li`
    font-size: 14px;
    list-style: none;
  `

  return (
    <div className=''>
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
          <Link href="#features" legacyBehavior>
            <MenuLinks>Features</MenuLinks>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header