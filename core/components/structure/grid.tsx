import { FC, useEffect, useState } from 'react';

// Inspired on https://tailwindcss.com/docs/justify-items

type Props = {
  style?: string;
  items: Array<React.ReactElement>;
};

export const Grid: FC<Props> = ({ style, items }) => {
  const [gridStyle, setGridStyle] = useState<string>('');
  useEffect(() => {
    switch (items.length) {
      case 5:
        setGridStyle('grid-cols-5');
        break;
      case 6:
        setGridStyle('grid-cols-6');
        break;
      default:
        // TODO: grid-cols-5 as default and log console error?
        setGridStyle('');
        break;
    }
  }, [items, setGridStyle]);

  return (
    <div className={`grid ${gridStyle} gap-1 justify-items-auto ${style ? style : null}`}>
      {items.map((item, index) => (
        <div
          key={`grid-${index}`}
          className="text-gray-700 flex justify-center items-center px-2 py-2">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Grid;
