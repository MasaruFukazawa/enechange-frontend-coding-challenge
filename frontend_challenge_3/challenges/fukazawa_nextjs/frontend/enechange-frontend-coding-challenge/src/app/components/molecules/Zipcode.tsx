
import React from 'react';
import InputTitle from '../atoms/InputTitle';
import ZipcodeAtom from '../atoms/Zipcode';
import ErrorMessage from '../atoms/ErrorMessage';

interface ZipcodeProps {
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
    inputTitleText,
    inputTitleTextIsRequired,
    zipcodeUppperInputName,
    zipcodeLowerInputName,
    zipcodeUpperInputOnChange,
    zipcodeLowerInputOnChange,
    zipcodeUppperErrorMessageText,
    zipcodeLowerErrorMessageText,

  }) => {
  return (
    <>
      <InputTitle 
        isRequired={inputTitleTextIsRequired}
      >
        {inputTitleText}
      </InputTitle>

      <ZipcodeAtom
        zipcodeUppperInputName={zipcodeUppperInputName}
        zipcodeLowerInputName={zipcodeLowerInputName}
        zipcodeUpperInputOnChange={zipcodeUpperInputOnChange}
        zipcodeLowerInputOnChange={zipcodeLowerInputOnChange} 
      />
      {zipcodeUppperErrorMessageText &&
        <ErrorMessage>
          {zipcodeUppperErrorMessageText}
        </ErrorMessage>
      } 
      {zipcodeLowerErrorMessageText &&
        <ErrorMessage>
          {zipcodeLowerErrorMessageText}
        </ErrorMessage>
      } 
    </>
  );
};

export default Zipcode;