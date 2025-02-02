import React from 'react';

interface ZipcodeProps {
  firstCodeName: string;
  lastCodeName: string;
}

const Zipcode: React.FC<ZipcodeProps> = ({ firstCodeName, lastCodeName }) => {
  return (
    <>
      <div
        // 背景を灰色にする
        className="bg-gray-300 w-[348px] mb-1"

      >
        <input
          type="text"
          name={firstCodeName}
          className="p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[160px]"
        />
        &nbsp;&nbsp;-&nbsp;&nbsp;
        <input
          type="text"
          name={lastCodeName}
          className="p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[160px]"
        />
      </div>
    </>
  );
};

export default Zipcode;