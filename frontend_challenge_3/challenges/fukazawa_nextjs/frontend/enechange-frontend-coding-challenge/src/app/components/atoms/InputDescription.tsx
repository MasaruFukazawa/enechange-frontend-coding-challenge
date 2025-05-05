import React, { ReactNode } from 'react';

interface InputDescriptionProps {
  children: ReactNode;
}

const InputDescription: React.FC<InputDescriptionProps> = ({
  children,
}) => {
  return (
    <>
      <div className="text-xs text-gray-600 bg-gray-300 p-2 w-[320px] mb-1">
        {children}
      </div>
    </>
  );
};

export default InputDescription;