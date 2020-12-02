import { FC } from 'react';

type Props = {
  title: string;
  description?: string | React.ReactElement;
  showDescriptionMobile?: boolean;
};

const Block: FC<Props> = ({ title, description, showDescriptionMobile = false, children }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4 sm:ml-2 sm:mr-2">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        <p
          className={`mt-1 max-w-2xl text-sm leading-5 text-gray-500 ${
            showDescriptionMobile ? '' : 'hidden md:block'
          }`}>
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};
export default Block;
