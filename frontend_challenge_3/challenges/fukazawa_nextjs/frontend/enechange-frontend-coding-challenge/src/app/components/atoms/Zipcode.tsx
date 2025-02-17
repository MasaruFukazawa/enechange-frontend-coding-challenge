import React from 'react';

interface ZipcodeProps {
  zipcodeUppperInputName: string;
  zipcodeLowerInputName: string;
  zipcodeUpperInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  zipcodeLowerInputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Zipcode: React.FC<ZipcodeProps> = ({
  zipcodeUppperInputName,
  zipcodeLowerInputName,
  zipcodeUpperInputOnChange,
  zipcodeLowerInputOnChange,
}) => {
  return (
    <>
      <div
        // 背景を灰色にする
        className="bg-gray-300 w-[348px] mb-1"

      >
        <input
          type="text"
          name={zipcodeUppperInputName}
          maxLength={3}
          onChange={zipcodeUpperInputOnChange}
          className="p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[160px]"
        />
        &nbsp;&nbsp;-&nbsp;&nbsp;
        <input
          type="text"
          name={zipcodeLowerInputName}
          maxLength={4}
          onChange={zipcodeLowerInputOnChange}
          className="p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[160px]"
        />
      </div>
    </>
  );
};

export default Zipcode;