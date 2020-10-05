import { FC } from "react";

// Copied from https://tailwindui.com/preview 🦕

type Row = {
  title: string,
  description: React.ReactElement,
  style?: string,
}

type Props = {
  values: Array<Row>,
};

export const Table: FC<Props> = ({ values }) => {

  return (
    <div>
      <dl>
        {values.map((item, index) =>
          <div key={index} className={`${index%2 === 0 ? 'bg-gray-100' : 'bg-white'} px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${ item.style ? item.style : ''}`}>
            <dt className="text-sm leading-5 font-medium text-gray-500">
              {item.title}
            </dt>
            <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
              {item.description}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
  
export default Table;