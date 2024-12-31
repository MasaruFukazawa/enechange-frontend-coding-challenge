import React from 'react';

interface PageTitleProps {
  text: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <h1 className="text-2xl font-bold text-center">
      {text}
    </h1>
  );
};

export default PageTitle;