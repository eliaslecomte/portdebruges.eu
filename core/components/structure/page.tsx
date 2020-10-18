import { FC } from "react";
import Footer from "../footer";
import Header from "../header";

type Props = {
  topComponent?: React.ReactElement,
  description?: string,
}

const Page: FC<Props> = ({ topComponent, description, children }) => {
  // FIXME store page padding as mixin?
  return (
    <div className="xl:container xl:mx-auto p-4">
      {topComponent}
      <Header  />
      {description ? <p className="p-2 sm:p-4">{description}</p> : null}
      {children}
      <Footer />
    </div>
  );
}
export default Page;
