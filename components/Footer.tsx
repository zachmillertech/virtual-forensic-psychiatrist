import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-content">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Virtual Forensic Psychiatric Services. All Rights Reserved.
          </p>
          <nav className="mt-2 md:mt-0">
            <ul className="flex space-x-4 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-700">
                  About
                </Link>
              </li>
              <li>
                <Link href="/credentials" className="text-gray-600 hover:text-purple-700">
                  Credentials
                </Link>
              </li>
              <li>
                <Link href="/forensic-references" className="text-gray-600 hover:text-purple-700">
                  Forensic References
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-purple-700">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
