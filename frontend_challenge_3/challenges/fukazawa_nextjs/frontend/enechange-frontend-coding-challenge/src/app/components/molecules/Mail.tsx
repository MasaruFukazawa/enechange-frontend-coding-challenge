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
        isRequired={inputTitleTextIsRequired}
      >
        {inputTitleText}
      </InputTitle>
      <MailInput
        mailInputName={mailInputName}
      />
      {errorMessageText &&
        <ErrorMessage>
          {errorMessageText}
        </ErrorMessage>
      } 
    </>
  );
};

export default Comapany;