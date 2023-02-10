import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const Header = () => {
  

  return (
    <div class>
      <Link href="/">
        <Image
        src="/logo.svg"
        alt="eli.vieira logo"
        width={109}
        height={26}
        />
      </Link>
    </div>
  )
}

export default Header