import React from 'react';
import InputTitle from '../atoms/InputTitle';
import SelectBox from '../atoms/SelectBox';
import ErrorMessage from '../atoms/ErrorMessage';
import InputDescription from '../atoms/InputDescription';

interface PlanProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  inputDescriptionText: string;
  selectBoxName: string;
  selectBoxOptions: { name: string }[];
  selectBoxOnChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  errorMessageText: string;
} 
const Plan: React.FC<PlanProps> = ({ 
    inputTitleText,
    inputTitleTextIsRequired,
    inputDescriptionText,
    selectBoxName,
    selectBoxOptions,
    selectBoxOnChange,
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
        selectBoxOnChange={selectBoxOnChange}
      />
      <InputDescription>
        {inputDescriptionText}
      </InputDescription>
      {errorMessageText &&
        <ErrorMessage>
          {errorMessageText}
        </ErrorMessage>
      } 
    </>
  );
};

export default Plan;