import React from 'react';
import WarningIcon from './WarningIcon';

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return (
    <>
      {text &&
        <div className="text-xs text-white bg-red-400 p-2 w-[320px] mt-1">
          { WarningIcon({ size: 20 }) }  {text}
        </div>
      }
    </>
  );
};

export default ErrorMessage;