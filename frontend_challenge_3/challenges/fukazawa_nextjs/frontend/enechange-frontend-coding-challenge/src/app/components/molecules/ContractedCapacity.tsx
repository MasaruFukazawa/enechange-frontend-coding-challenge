import React from 'react';
import InputTitle from '../atoms/InputTitle';
import SelectBox from '../atoms/SelectBox';
import ErrorMessage from '../atoms/ErrorMessage';

interface ContractedCapacityProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  selectBoxName: string;
  selectBoxOptions: { name: string }[];
  errorMessageText: string;
} 
const ContractedCapacity: React.FC<ContractedCapacityProps> = ({ 
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

export default ContractedCapacity;