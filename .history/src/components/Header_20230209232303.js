import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  const Container = styled.div`
    max-width: 600;
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
    </Container>
  )
}

export default Header