
import React from 'react';
import InputTitle from '../atoms/InputTitle';
import ZipcodeAtom from '../atoms/Zipcode';
import ErrorMessage from '../atoms/ErrorMessage';

interface ZipcodeProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  zipcodeUpperInputName: string;
  zipcodeLowerInputName: string;
  zipcodeUpperInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  zipcodeLowerInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  zipcodeUpperErrorMessageText: string;
  zipcodeLowerErrorMessageText: string;
}

const Zipcode: React.FC<ZipcodeProps> = ({ 
    inputTitleText,
    inputTitleTextIsRequired,
    zipcodeUpperInputName,
    zipcodeLowerInputName,
    zipcodeUpperInputOnChange,
    zipcodeLowerInputOnChange,
    zipcodeUpperErrorMessageText,
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
        zipcodeUpperInputName={zipcodeUpperInputName}
        zipcodeLowerInputName={zipcodeLowerInputName}
        zipcodeUpperInputOnChange={zipcodeUpperInputOnChange}
        zipcodeLowerInputOnChange={zipcodeLowerInputOnChange} 
      />
      {zipcodeUpperErrorMessageText &&
        <ErrorMessage>
          {zipcodeUpperErrorMessageText}
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