import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" className="text-2xl font-bold">The Rapier Company</Link>
            <p className="text-gray-400 text-base">
              Sharpening enterprise technology and management.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Services</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/services/technology-systems" className="text-base text-gray-400 hover:text-white">
                      Technology Systems
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/security" className="text-base text-gray-400 hover:text-white">
                      Security
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/management" className="text-base text-gray-400 hover:text-white">
                      Management Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/hiring" className="text-base text-gray-400 hover:text-white">
                      Hiring Solutions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Industries</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/industries/banking" className="text-base text-gray-400 hover:text-white">
                      Banking
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/tech" className="text-base text-gray-400 hover:text-white">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries/enterprise" className="text-base text-gray-400 hover:text-white">
                      Enterprise
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 The Rapier Company LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

