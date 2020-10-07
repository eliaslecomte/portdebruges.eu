import { FC } from "react";

type Element = {
  hideMobile?: boolean,
  content: React.ReactElement,
}

type Props = {
  title: string,
  descriptions?: Array<Element>

}

const Block: FC<Props> = ({ title, descriptions, children }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {title}
        </h3>
        {descriptions?.map((description, index) => 
          <span key={index} className={`mt-1 max-w-2xl text-sm leading-5 text-gray-500 ${description.hideMobile ? 'hidden md:block' : ''}`}>
            {description.content}
          </span>  
        )}
      </div>
      {children}
    </div>
  );
}
export default Block;
