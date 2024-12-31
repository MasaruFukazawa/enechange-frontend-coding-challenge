import React from 'react';

interface InputDescriptionProps {
  text: string;
}

const InputDescription: React.FC<InputDescriptionProps> = ({ text }) => {
  return (
    <>
      <div className="text-xs text-gray-600 bg-gray-300 p-2 w-[320px]">
        {text}
      </div>
    </>
  );
};

export default InputDescription;