import { FC } from "react"

export enum Size {
  small = '1/4',
  regular = '2/4',
  large = '3/4',
  huge = '4/4',
}

type Props = {
  size?: Size;
}



const Loading: FC<Props> = ({ size = Size.large }) => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className={`h-4 bg-gray-400 rounded w-${size}`}></div>
      </div>
    </div>
  );
}

export default Loading;
