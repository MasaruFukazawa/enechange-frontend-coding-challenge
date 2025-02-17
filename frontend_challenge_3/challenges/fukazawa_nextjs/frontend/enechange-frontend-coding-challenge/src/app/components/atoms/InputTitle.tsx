import React, { ReactNode } from 'react';

interface InputTitleProps {
  children: ReactNode;
  isRequired: boolean;
}

const InputTitle: React.FC<InputTitleProps> = ({
  children,
  isRequired = false,
}) => {
  return (
    <>
      <h3 
        className={`text-base font-bold ${isRequired ? 'required' : ''}` + ' mb-2'}
      >
        {children}
      </h3>
    </>
  );
};

export default InputTitle;