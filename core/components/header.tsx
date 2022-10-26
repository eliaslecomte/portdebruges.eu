import Link from 'next/link';
import { FC } from 'react';

type Props = {};

const Header: FC<Props> = () => {
  return (
    <div className="sm:mb-4 p-2 sm:p-4">
      <h1>Kite wind en weerbericht voor Zeebrugge.</h1>
      <p>
        Sinds <code>26/09/2020</code> -{' '}
        <Link href="/">Home</Link>
        .
      </p>
    </div>
  );
};

export default Header;
