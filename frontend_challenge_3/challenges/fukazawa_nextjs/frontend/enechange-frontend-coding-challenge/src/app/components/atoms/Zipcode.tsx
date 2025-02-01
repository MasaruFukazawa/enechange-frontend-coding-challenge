import React from 'react';

interface ZipcodeProps {
  first_code_name: string;
  last_code_name: string;
}

const Zipcode: React.FC<ZipcodeProps> = ({ first_code_name, last_code_name }) => {
  return (
    <>
      <div
        // 背景を灰色にする
        className="bg-gray-300 w-[348px]"

      >
        <input
          type="text"
          name={first_code_name}
          className="p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[160px]"
        />
        &nbsp;&nbsp;-&nbsp;&nbsp;
        <input
          type="text"
          name={last_code_name}
          className="p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[160px]"
        />
      </div>
    </>
  );
};

export default Zipcode;