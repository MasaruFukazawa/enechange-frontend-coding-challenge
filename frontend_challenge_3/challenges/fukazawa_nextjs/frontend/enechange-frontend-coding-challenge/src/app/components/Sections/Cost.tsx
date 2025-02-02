import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import CostModule from '../modules/Cost';

interface CostProps {
  sectionTitleText: string;
  costInputTitleText: string;
  costInputTitleTextIsRequired: boolean;
  costTextInputName: string;
  costErrorMessageText: string;
} 

const Cost: React.FC<CostProps> = ({ 
  sectionTitleText,
  costInputTitleText,
  costInputTitleTextIsRequired,
  costTextInputName,
  costErrorMessageText,
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
        <CostModule
          inputTitleText={costInputTitleText}
          inputTitleTextIsRequired={costInputTitleTextIsRequired}
          textInputName={costTextInputName}
          errorMessageText={costErrorMessageText}
        />
      </div>
    </section>
  );
};

export default Cost;