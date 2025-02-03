import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import MailModule from '../molecules/Mail';

interface UserinfoProps {
  sectionTitleText: string;
  mailInputTitleText: string;
  mailInputTitleTextIsRequired: boolean;
  mailInputName: string;
  mailErrorMessageText: string;
} 

const Userinfo: React.FC<UserinfoProps> = ({ 
  sectionTitleText,
  mailInputTitleText,
  mailInputTitleTextIsRequired,
  mailInputName,
  mailErrorMessageText,
}) => {
  return (
    <section 
      id='contract'
      className='pt-4 pb-8 mb-10 bg-white'
    >
      <SectionTitle
        text={sectionTitleText} 
      />
      <div className='pl-2 pt-8'>
        <MailModule
          inputTitleText={mailInputTitleText}
          inputTitleTextIsRequired={mailInputTitleTextIsRequired}
          mailInputName={mailInputName}
          errorMessageText={mailErrorMessageText}
        />
      </div>
    </section>
  );
};

export default Userinfo;