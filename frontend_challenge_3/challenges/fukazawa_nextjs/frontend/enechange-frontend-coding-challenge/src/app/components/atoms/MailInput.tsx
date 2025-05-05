import React from 'react';

interface MailInputProps {
  mailInputName: string;
  mailInputOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MailInput: React.FC<MailInputProps> = ({
  mailInputName,
  mailInputOnChange,
}) => {
  return (
    <>
      <input
        type="email"
        className='p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[320px] mb-1'
        name={mailInputName}
        onChange={mailInputOnChange}
      />
    </>
  );
};

export default MailInput;