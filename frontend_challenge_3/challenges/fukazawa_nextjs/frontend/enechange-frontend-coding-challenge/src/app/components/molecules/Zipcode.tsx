import React from 'react';
import InputTitle from '../atoms/InputTitle';
import  ZipcodeAtom from '../atoms/Zipcode';
import ErrorMessage from '../atoms/ErrorMessage';

interface ComapanyProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  zipcodeAtomFirstCodeName: string;
  zipcodeAtomLastCodeName: string;
  errorMessageText: string;
} 
const Comapany: React.FC<ComapanyProps> = ({ 
    inputTitleText,
    inputTitleTextIsRequired,
    zipcodeAtomFirstCodeName,
    zipcodeAtomLastCodeName,
    errorMessageText,
}) => {
  return (
    <>
      <InputTitle 
        text={inputTitleText}
        isRequired={inputTitleTextIsRequired}
      />
      <ZipcodeAtom
        firstCodeName={zipcodeAtomFirstCodeName}
        lastCodeName={zipcodeAtomLastCodeName}
      />
      {errorMessageText &&
        <ErrorMessage
          text={errorMessageText}
        />
    } 
    </>
  );
};

export default Comapany;