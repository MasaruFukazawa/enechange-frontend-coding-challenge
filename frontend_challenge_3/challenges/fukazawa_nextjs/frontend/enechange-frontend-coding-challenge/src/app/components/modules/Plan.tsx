import React from 'react';
import InputTitle from '../atoms/InputTitle';
import SelectBox from '../atoms/SelectBox';
import ErrorMessage from '../atoms/ErrorMessage';
import InputDescription from '../atoms/InputDescription';

interface PlanProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  selectBoxName: string;
  selectBoxOptions: { name: string }[];
  errorMessageText: string;
} 
const Plan: React.FC<PlanProps> = ({ 
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
      <InputDescription
        text="※選択肢の説明文を表示するコンポーネント。"
      />
      {errorMessageText &&
        <ErrorMessage
          text={errorMessageText}
        />
    } 
    </>
  );
};

export default Plan;