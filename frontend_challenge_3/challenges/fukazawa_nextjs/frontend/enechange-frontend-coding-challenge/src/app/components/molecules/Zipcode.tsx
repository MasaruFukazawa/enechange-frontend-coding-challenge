
import React from 'react';
import InputTitle from '../atoms/InputTitle';
import ZipcodeAtom from '../atoms/Zipcode';
import ErrorMessage from '../atoms/ErrorMessage';

interface ZipcodeProps {
  inputTitleText: string;
  inputTitleTextIsRequired: boolean;
  uppperZipcodeName: string;
  lowerZipcodeName: string;
  uppperZipcodeErrorMessageText: string;
  lowerZipcodeErrorMessageText: string;
  onUpperZipcodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLowerZipcodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Zipcode: React.FC<ZipcodeProps> = ({ 
    inputTitleText,
    inputTitleTextIsRequired,
    uppperZipcodeName,
    lowerZipcodeName,
    uppperZipcodeErrorMessageText,
    lowerZipcodeErrorMessageText,
    onUpperZipcodeChange,
    onLowerZipcodeChange,
}) => {
  return (
    <>
      <InputTitle 
        text={inputTitleText}
        isRequired={inputTitleTextIsRequired}
      />
      <ZipcodeAtom
        uppperZipcodeName={uppperZipcodeName}
        lowerZipcodeName={lowerZipcodeName}
        onUpperZipcodeChange={onUpperZipcodeChange}
        onLowerZipcodeChange={onLowerZipcodeChange} 
      />
      {uppperZipcodeErrorMessageText &&
        <ErrorMessage
          text={uppperZipcodeErrorMessageText}
        />
      } 
      {lowerZipcodeErrorMessageText &&
        <ErrorMessage
          text={lowerZipcodeErrorMessageText}
        />
      } 
    </>
  );
};

export default Zipcode;