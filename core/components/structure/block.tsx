import { FC } from "react";

type Props = {
  title: string,
  descriptionText?: string,
  descriptionContent?: Array<React.ReactElement>

}

const Block: FC<Props> = ({ title, descriptionText, descriptionContent, children }) => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-4">
      <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          {title}
        </h3>
        {descriptionText ?
          <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500 hidden md:block">
            {descriptionText}
          </p> : null}
        {descriptionContent?.map((description, index) => 
          <span key={index} className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
            {description}
          </span>  
        )}
      </div>
      {children}
    </div>
  );
}
export default Block;
