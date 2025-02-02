import React from 'react';
import PageTitle from '../atoms/PageTitle';
import PageDescription from '../atoms/PageDescription';

interface HeaderProps {
  pageTitleText: string;
  pageDescriptionText: string;
} 

const Header: React.FC<HeaderProps> = ({ pageTitleText, pageDescriptionText }) => {
  return (
    <section 
      id='header'
      className='bg-gray-100 p-8'
    >
      <PageTitle
        text={pageTitleText}
      />
      <PageDescription
        text={pageDescriptionText}
      />
    </section>
  );
};

export default Header;