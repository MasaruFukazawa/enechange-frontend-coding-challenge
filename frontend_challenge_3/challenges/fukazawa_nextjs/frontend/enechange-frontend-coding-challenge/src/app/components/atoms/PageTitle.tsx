import React from 'react';

interface PageTitleProps {
  pageTitleText: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  pageTitleText
}) => {
  return (
    <h1 className="text-2xl font-bold text-center">
      {pageTitleText}
    </h1>
  );
};

export default PageTitle;