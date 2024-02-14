import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
    return (
        <>
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <img src="logo-kevin-fit.png" alt="Acme Inc" width="70" height="40" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="https://jurnal.vnctkevin.com/">
            Blog
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        </header>
        </>
    );
}


  