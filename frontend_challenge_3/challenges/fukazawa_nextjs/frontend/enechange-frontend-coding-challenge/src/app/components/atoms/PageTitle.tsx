import React, { ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
}

const PageTitle: React.FC<PageTitleProps> = ({
  children,
}) => {
  return (
    <h1 className="text-2xl font-bold text-center">
      {children}
    </h1>
  );
};

export default PageTitle;