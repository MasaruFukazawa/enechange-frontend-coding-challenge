import React from 'react';
import InputTitle from '../atoms/InputTitle';
import MailInput from '../atoms/MailInput';
import ErrorMessage from '../atoms/ErrorMessage';

interface ComapanyProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  mailInputName: string;
  errorMessageText: string;
} 

const Comapany: React.FC<ComapanyProps> = ({ 
    inputTitleText,
    inputTitleTextIsRequired,
    mailInputName,
    errorMessageText,
}) => {
  return (
    <>
      <InputTitle 
        text={inputTitleText}
        isRequired={inputTitleTextIsRequired}
      />
      <MailInput
        name={mailInputName}
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