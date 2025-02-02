import React from 'react';

interface SectionTitleProps {
  text: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return (
    <h2 className="border-l-4 border-sectionTitleBarColor text-base font-bold pl-2 pt-2 pb-2">{text}</h2>
  );
};

export default SectionTitle;