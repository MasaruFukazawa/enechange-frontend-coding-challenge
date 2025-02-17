import React from 'react';

interface TextInputProps {
  textInputName: string;
  textInputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  textInputName,
  textInputOnChange,
}) => {
  return (
    <>
      <input
        type="text"
        className='p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[320px] mb-1'
        name={textInputName}
        onChange={textInputOnChange}
      />
    </>
  );
};

export default TextInput;