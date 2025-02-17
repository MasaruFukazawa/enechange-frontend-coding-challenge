import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
}) => {
  return (
    <h2 className="border-l-4 border-sectionTitleBarColor text-base font-bold pl-2 pt-2 pb-2">{children}</h2>
  );
};

export default SectionTitle;