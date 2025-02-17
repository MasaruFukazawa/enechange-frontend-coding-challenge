import React from 'react';

interface SectionTitleProps {
  sectionTitleText: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  sectionTitleText
}) => {
  return (
    <h2 className="border-l-4 border-sectionTitleBarColor text-base font-bold pl-2 pt-2 pb-2">{sectionTitleText}</h2>
  );
};

export default SectionTitle;