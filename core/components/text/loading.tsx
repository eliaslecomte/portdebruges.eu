import { FC } from "react"

const Loading: FC = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-gray-400 rounded w-3/4"></div>
      </div>
    </div>
  );
}

export default Loading;
