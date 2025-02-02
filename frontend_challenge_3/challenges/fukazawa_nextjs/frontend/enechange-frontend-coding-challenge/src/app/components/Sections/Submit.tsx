import React from 'react';
import SubmitButton from '../atoms/SubmitButton';

interface SubmitProps {
  submitButtonText: string;
} 

const Submit: React.FC<SubmitProps> = ({ submitButtonText,  }) => {
  return (
    <section 
      id='submit'
      className='bg-gray-100 p-10 text-center'
    >
      <SubmitButton
        text={submitButtonText}
      />
    </section>
  );
};

export default Submit;