import React from 'react';
import WarningIcon from './WarningIcon';

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return (
    <>
      <div className="text-xs text-white bg-red-400 p-2 w-[320px]">
        { WarningIcon({ size: 20 }) }  {text}
      </div>
    </>
  );
};

export default ErrorMessage;