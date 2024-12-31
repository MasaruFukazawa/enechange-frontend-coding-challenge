import React from 'react';

interface InputTitleProps {
  text: string;
  isRequired: boolean;
}

const InputTitle: React.FC<InputTitleProps> = ({ text, isRequired = false }) => {
  return (
    <>
      <h3 
        className={`text-base font-bold ${isRequired ? 'required' : ''}`}
      >
        {text}
      </h3>
    </>
  );
};

export default InputTitle;