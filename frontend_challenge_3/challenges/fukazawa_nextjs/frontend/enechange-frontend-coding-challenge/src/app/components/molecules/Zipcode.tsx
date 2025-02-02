import React from 'react';
import InputTitle from '../atoms/InputTitle';
import ZipcodeAtom from '../atoms/Zipcode';
import ErrorMessage from '../atoms/ErrorMessage';

interface ComapanyProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  zipcodeFirstCodeName: string;
  zipcodeLastCodeName: string;
  errorMessageText: string;
}

const Comapany: React.FC<ComapanyProps> = ({ 
    inputTitleText,
    inputTitleTextIsRequired,
    zipcodeFirstCodeName,
    zipcodeLastCodeName,
    errorMessageText,
}) => {
  return (
    <>
      <InputTitle 
        text={inputTitleText}
        isRequired={inputTitleTextIsRequired}
      />
      <ZipcodeAtom
        firstCodeName={zipcodeFirstCodeName}
        lastCodeName={zipcodeLastCodeName}
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