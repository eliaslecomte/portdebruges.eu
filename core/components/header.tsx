import Link from "next/link";
import { FC } from "react"

type Props = {
}

const Header: FC<Props> = () => {

  return (
    <div className="mb-4 p-4">
      <h1>Welkom op <Link href="/"><a>Portdebruges.eu!</a></Link></h1>
      <p>
        Beste kitesurf weer uit Zeebrugge sinds <code>26/09/2020</code>.
      </p>
    </div>
  );
}

export default Header;
