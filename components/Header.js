import Image from 'next/image';
import Link from 'next/link';
const Logo = require('../public/Logo 1.png');

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image src={Logo} alt="Logo" width="80" height="80" className="rounded-full mx-auto" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
