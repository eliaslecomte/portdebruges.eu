import { FC } from "react";

// Inspired on https://tailwindcss.com/docs/justify-items

type Props = {
  style?: string,
  items: Array<React.ReactElement>,
  itemsPerRow: number,
};

export const Grid: FC<Props> = ({ style, items, itemsPerRow }) => {

  return (
    <div className={`grid grid-cols-${itemsPerRow} gap-1 justify-items-auto ${style ? style : null}`}>
      {items.map((item, index) =>
        <div key={`grid-${index}`} className="text-gray-700 flex justify-center items-center px-2 py-2">
          {item}
        </div>
      )}
    </div>
  );
}

export default Grid;
