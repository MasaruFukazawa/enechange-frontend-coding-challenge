import React from 'react';

interface SelectBoxProps {
  selectBoxName: string;
  selectBoxOptions: { name: string }[];
}

const SelectBox: React.FC<SelectBoxProps> = ({
  selectBoxName,
  selectBoxOptions
}) => {
  return (
    <>
      <select
        name={selectBoxName}
        className="p-1 border-4 border-gray-300 rounded focus:border-orange-300 focus:outline-none w-[320px] mb-1"
      >
        {selectBoxOptions.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectBox;