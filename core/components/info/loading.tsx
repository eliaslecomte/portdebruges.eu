import { FC } from "react"

export enum Size {
  small,
  regular,
  large,
  huge,
}

type Props = {
  size?: Size;
}

const getStyleForSize = (size: Size) => {
  switch (size) {
    case Size.small:
      return 'w-1/4';
    case Size.regular:
      return 'w-2/4';
    case Size.large:
      return 'w-3/4';
    case Size.large:
      return 'w-4/4';
  }
}

const Loading: FC<Props> = ({ size = Size.large }) => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className={`h-4 bg-gray-400 rounded ${getStyleForSize(size)}`}></div>
      </div>
    </div>
  );
}

export default Loading;
