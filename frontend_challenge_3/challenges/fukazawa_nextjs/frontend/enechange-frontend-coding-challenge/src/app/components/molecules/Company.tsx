import React from 'react';
import InputTitle from '../atoms/InputTitle';
import SelectBox from '../atoms/SelectBox';
import ErrorMessage from '../atoms/ErrorMessage';

interface ComapanyProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  selectBoxName: string;
  selectBoxOptions: { name: string }[];
  errorMessageText: string;
} 

const Comapany: React.FC<ComapanyProps> = ({ 
    inputTitleText,
    inputTitleTextIsRequired,
    selectBoxName,
    selectBoxOptions,
    errorMessageText,
}) => {
  return (
    <>
      <InputTitle 
        isRequired={inputTitleTextIsRequired}
      >
        {inputTitleText}
      </InputTitle>
      <SelectBox
        selectBoxName={selectBoxName}
        selectBoxOptions={selectBoxOptions}
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