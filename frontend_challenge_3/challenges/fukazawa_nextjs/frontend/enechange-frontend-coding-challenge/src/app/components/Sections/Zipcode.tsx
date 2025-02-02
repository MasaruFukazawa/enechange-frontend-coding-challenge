import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import ZipcodeMolecule from '../molecules/Zipcode';

interface ZipcodeProps {
  sectionTitleText: string;
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  zipcodeFirstCodeName: string;
  zipcodeLastCodeName: string;
  errorMessageText: string;
} 

const Zipcode: React.FC<ZipcodeProps> = ({ 
  sectionTitleText,
  inputTitleText,
  inputTitleTextIsRequired,
  zipcodeFirstCodeName,
  zipcodeLastCodeName,
  errorMessageText,
}) => {
  return (
    <section 
      id='zipcode'
      className='pt-4'
    >
      <SectionTitle
        text={sectionTitleText}
      />
      <div className='pl-2 pt-8'>
        <ZipcodeMolecule
          inputTitleText={inputTitleText}
          inputTitleTextIsRequired={inputTitleTextIsRequired}
          zipcodeFirstCodeName={zipcodeFirstCodeName}
          zipcodeLastCodeName={zipcodeLastCodeName}
          errorMessageText={errorMessageText}
        />
      </div>
    </section>
  );
};

export default Zipcode;