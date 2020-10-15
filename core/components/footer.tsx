import Link from "next/link";
import { FC } from "react"

type Props = {
}

const Footer: FC<Props> = () => {

  return (
    <div className="mt-4 p-4">
      <img
        className="float-left"
        alt="Createweb.be"
        src="/createweb_small.png"
        width="35"
        height="35" />
      <Link href="https://createweb.be"><a className="p-1" target="_blank">Made with ♥ by Createweb.be</a></Link>
      <span className="pl-2 pr-2">⚓</span>
      <Link href="/cooky-policy"><a>Cooky Policy</a></Link>
      <span className="pl-2 pr-2">⚓</span>
      <Link href="/"><a>Home</a></Link>
    </div>
  );
}

export default Footer;
