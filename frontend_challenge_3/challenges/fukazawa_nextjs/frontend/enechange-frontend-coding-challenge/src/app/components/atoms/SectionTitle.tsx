import React from 'react';

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <h2 className="pl-2 border-l-4 border-sectionTitleBarColor text-base font-bold pt-[5px] pb-[5px]">{text}</h2>
  );
};

export default SectionTitle;