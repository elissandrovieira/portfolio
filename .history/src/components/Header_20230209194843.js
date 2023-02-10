import Link from "next/link"

const Header = () => {

  return (
    <div>
      <Link>
        <Image
        src="/logo.svg"
        alt="eli.vieira"
        />
      </Link>
    </div>
  )
}

export default Header