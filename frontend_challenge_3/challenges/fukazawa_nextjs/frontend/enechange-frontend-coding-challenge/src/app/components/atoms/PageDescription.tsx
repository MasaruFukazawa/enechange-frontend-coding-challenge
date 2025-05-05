import React, { ReactNode } from 'react';

interface PageDescriptionProps {
  children: ReactNode;
}

const PageDescription: React.FC<PageDescriptionProps> = ({
  children,
}) => {
  return (
    <div className="text-base text-center">
      {children}
    </div>
  );
};

export default PageDescription;