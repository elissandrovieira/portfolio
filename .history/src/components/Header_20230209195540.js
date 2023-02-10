import Image from "next/image"
import Link from "next/link"

const Header = () => {

  return (
    <div>
      <Link href="/">
        <Image
        src="/logo.svg"
        alt="eli.vieira logo"
        width={109}
        />
      </Link>
    </div>
  )
}

export default Header