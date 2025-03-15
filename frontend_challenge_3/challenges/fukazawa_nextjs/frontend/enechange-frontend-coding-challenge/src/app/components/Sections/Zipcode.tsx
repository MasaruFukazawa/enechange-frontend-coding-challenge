import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import ZipcodeMolecule from '../molecules/Zipcode';

interface ZipcodeProps {
  sectionTitleText: string;
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  zipcodeUppperInputName: string;
  zipcodeLowerInputName: string;
  zipcodeUpperInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  zipcodeLowerInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  zipcodeUppperErrorMessageText: string;
  zipcodeLowerErrorMessageText: string;
} 

const Zipcode: React.FC<ZipcodeProps> = ({ 
  sectionTitleText,
  inputTitleText,
  inputTitleTextIsRequired,
  zipcodeUppperInputName,
  zipcodeLowerInputName,
  zipcodeUpperInputOnChange,
  zipcodeLowerInputOnChange,
  zipcodeUppperErrorMessageText,
  zipcodeLowerErrorMessageText
}) => {
  return (
    <section 
      id='zipcode'
      className='pt-4 pb-8 mb-10 bg-white'
    >
      <SectionTitle>
        {sectionTitleText}
      </SectionTitle>
      <div className='pl-2 pt-8'>
        <ZipcodeMolecule
          inputTitleText={inputTitleText}
          inputTitleTextIsRequired={inputTitleTextIsRequired}
          zipcodeUppperInputName={zipcodeUppperInputName}
          zipcodeLowerInputName={zipcodeLowerInputName}
          zipcodeUpperInputOnChange={zipcodeUpperInputOnChange}
          zipcodeLowerInputOnChange={zipcodeLowerInputOnChange}
          zipcodeUppperErrorMessageText={zipcodeUppperErrorMessageText}
          zipcodeLowerErrorMessageText={zipcodeLowerErrorMessageText}
        />
      </div>
    </section>
  );
};

export default Zipcode;