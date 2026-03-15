import { FC, useMemo } from 'react';

// Inspired on https://tailwindcss.com/docs/justify-items

type Props = {
  style?: string;
  items: Array<React.ReactElement>;
};

export const Grid: FC<Props> = ({ style, items }) => {
  const gridStyle = useMemo(() => {
    switch (items.length) {
      case 5:
        return 'grid-cols-5';
      case 6:
        return 'grid-cols-6';
      default:
        return '';
    }
  }, [items.length]);

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
