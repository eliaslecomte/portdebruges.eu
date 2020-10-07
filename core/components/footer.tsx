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
      <Link href="https://createweb.be"><a className="p-1" target="_blank">Made by Createweb.be</a></Link>
    </div>
  );
}

export default Footer;
