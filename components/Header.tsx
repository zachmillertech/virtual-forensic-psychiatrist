import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-custom-purple shadow-md">
      <div className="container mx-auto px-content py-4 flex flex-col md:flex-row justify-between items-center">
        <Link href="/">
          <Image
            src="https://web.archive.org/web/20250126232306im_/https://www.virtualforensicpsychiatrist.com/wp-content/uploads/2018/07/logo-1.png"
            alt="Virtual Forensic Psychiatric Services"
            width={264}
            height={74}
          />
        </Link>
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-end space-x-2 md:space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-purple-200 text-menu">
                About
              </Link>
            </li>
            <li>
              <Link href="/credentials" className="text-white hover:text-purple-200 text-menu">
                Credentials
              </Link>
            </li>
            <li>
              <Link href="/forensic-references" className="text-white hover:text-purple-200 text-menu">
                Forensic References
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-purple-200 text-menu">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
