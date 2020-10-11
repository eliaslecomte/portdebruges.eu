import { FC } from "react"

type Props = {
  source: string;
  alternative: string;
  height?: string;
  width?: string;
}

const Image: FC<Props> = ({ source, alternative, height, width}) => {
  return (
    <img src={source} alt={alternative} height={height} width={width} />
  );
}

export default Image;
