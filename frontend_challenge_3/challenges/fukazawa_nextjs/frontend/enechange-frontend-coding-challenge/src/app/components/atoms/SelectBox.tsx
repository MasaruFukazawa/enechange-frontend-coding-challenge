import React from 'react';

interface SelectBoxProps {
  name: string;
  options: { name: string }[];
}

const SelectBox: React.FC<SelectBoxProps> = ({ name, options }) => {
  return (
    <>
      <select
        name={name}
        className="p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[320px] mb-1"
      >
        {options.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBox;