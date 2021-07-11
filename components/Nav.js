import Link from 'next/link'

const Nav = () => {
  return (
    <nav className="mx-auto px-6 py-2 flex justify-between items-center bg-primary w-screen sticky z-40">
      <p className=" p-3">MJC Photography</p>
      <ul className="flex ">
        <li className="p-3 hover:text-white">
          <Link href='/' >Home</Link>
        </li>
        <li className="p-3 hover:text-white">
          <Link href='/gallery' >Gallery</Link>
        </li>
        <li className="p-3 hover:text-white">
          <Link href='/about' >About</Link>
        </li>
        <li className="p-3 hover:text-white">
          <Link href='/contact' >Contact</Link>
        </li>

      </ul>
    </nav>
  )
}

export default Nav