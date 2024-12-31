import React from 'react';

interface PageDescriptionProps {
  text: string;
}

const PageDescription: React.FC<PageDescriptionProps> = ({ text }) => {
  return (
    <div className="text-base text-center">
      {text}
    </div>
  );
};

export default PageDescription;