import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  const Container = styled.div`
    max-width: 1170px;
    margin: 20px auto 0 auto;
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
      <ul>
        <li>
          <
        </li>
      </ul>
    </Container>
  )
}

export default Header