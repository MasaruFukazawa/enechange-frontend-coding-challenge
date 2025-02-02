import React from 'react';
import InputTitle from '../atoms/InputTitle';
import ErrorMessage from '../atoms/ErrorMessage';
import TextInput from '../atoms/TextInput';

interface CostProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  textInputName: string;
  errorMessageText: string;
} 

const Cost: React.FC<CostProps> = ({ 
    inputTitleText,
    inputTitleTextIsRequired,
    textInputName,
    errorMessageText,
}) => {
  return (
    <>
      <InputTitle 
        text={inputTitleText}
        isRequired={inputTitleTextIsRequired}
      />
      <TextInput
        name={textInputName}
      /> 円
      {errorMessageText &&
        <ErrorMessage
          text={errorMessageText}
        />
    } 
    </>
  );
};

export default Cost;