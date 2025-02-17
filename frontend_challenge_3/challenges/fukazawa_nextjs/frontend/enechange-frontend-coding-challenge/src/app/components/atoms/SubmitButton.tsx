import React from 'react';

interface SubmitButtonProps {
  submitButtonText: string;
  //submitButtonOnClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ 
  submitButtonText,
}) => {
  return (
    <>
      <button 
        className="text-xl text-center text-white p-2 w-[320px] bg-blue-700 rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
      >
        {submitButtonText}
      </button>
    </>
  );
};

export default SubmitButton;