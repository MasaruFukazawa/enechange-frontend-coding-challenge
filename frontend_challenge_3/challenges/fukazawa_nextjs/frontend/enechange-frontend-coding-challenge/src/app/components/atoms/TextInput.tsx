import React from 'react';

interface TextInputProps {
  name: string;
}

const TextInput: React.FC<TextInputProps> = ({ name }) => {
  return (
    <>
      <input
        type="text"
        className='p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[320px]'
        name={name}
      />
    </>
  );
};

export default TextInput;