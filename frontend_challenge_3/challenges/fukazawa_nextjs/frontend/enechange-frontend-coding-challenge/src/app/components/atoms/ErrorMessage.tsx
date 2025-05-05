import React, { ReactNode } from 'react';
import WarningIcon from './WarningIcon';

interface ErrorMessageProps {
  children: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  children,
}) => {
  return (
    <>
      <div className="text-xs text-white bg-red-400 p-2 w-[320px] mb-1">
        { WarningIcon({ size: 20 }) }
        {children}
      </div>
    </>
  );
};

export default ErrorMessage;