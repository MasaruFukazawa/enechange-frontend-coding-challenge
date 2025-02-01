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
        text={inputTitleText}
        isRequired={inputTitleTextIsRequired}
      />
      <SelectBox
        name={selectBoxName}
        options={selectBoxOptions}
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