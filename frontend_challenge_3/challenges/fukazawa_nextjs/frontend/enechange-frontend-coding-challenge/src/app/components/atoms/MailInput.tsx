import React from 'react';

interface MailInputProps {
  name: string;
}

const MailInput: React.FC<MailInputProps> = ({ name }) => {
  return (
    <>
      <input
        type="email"
        className='p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[320px]'
        name={name}
      />
    </>
  );
};

export default MailInput;