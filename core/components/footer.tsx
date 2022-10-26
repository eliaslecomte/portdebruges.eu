import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {};

const Footer: FC<Props> = () => {
  return (
    <div className="mt-4 p-4">
      <Image
        className="float-left"
        src="/eliaslecomte_small.png"
        alt="logo"
        width="35"
        height="35"
      />
      <Link href="https://eliaslecomte.be" className="p-1" target="_blank">
        Made with ♥ by Eliaslecomte.be
      </Link>
      <span className="pl-2 pr-2">⚓</span>
      <Link href="/cookie-policy">Cookie Policy</Link>
      <span className="pl-2 pr-2">⚓</span>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Footer;
