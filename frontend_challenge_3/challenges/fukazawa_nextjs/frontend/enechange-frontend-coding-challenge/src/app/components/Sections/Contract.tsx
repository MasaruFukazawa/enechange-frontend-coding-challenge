import React from 'react';
import SectionTitle from '../atoms/SectionTitle';
import CompanyModule from '../modules/Company';
import PlanModule from '../modules/Plan';
import ContractedCapacityModule from '../modules/ContractedCapacity';

interface ZipcodeProps {
  sectionTitleText: string;
  companyInputTitleText: string;
  companyInputTitleTextIsRequired: boolean;
  companySelectBoxName: string;
  companySelectBoxOptions: { name: string }[];
  companyErrorMessageText: string;
  planInputTitleText: string;
  planInputTitleTextIsRequired: boolean;
  planSelectBoxName: string;
  planSelectBoxOptions: { name: string }[];
  planErrorMessageText: string;
  contractedCapacityInputTitleText: string;
  contractedCapacityInputTitleTextIsRequired: boolean;
  contractedCapacitySelectBoxName: string;
  contractedCapacitySelectBoxOptions: { name: string }[];
  contractedCapacityErrorMessageText: string;
} 

const Zipcode: React.FC<ZipcodeProps> = ({ 
  sectionTitleText,
  companyInputTitleText,
  companyInputTitleTextIsRequired,
  companySelectBoxName,
  companySelectBoxOptions,
  companyErrorMessageText,
  planInputTitleText,
  planInputTitleTextIsRequired,
  planSelectBoxName,
  planSelectBoxOptions,
  planErrorMessageText,
  contractedCapacityInputTitleText,
  contractedCapacityInputTitleTextIsRequired,
  contractedCapacitySelectBoxName,
  contractedCapacitySelectBoxOptions,
  contractedCapacityErrorMessageText,
}) => {
  return (
    <section 
      id='contract'
      className='pt-4'
    >
      <SectionTitle
        text={sectionTitleText} 
      />
      <div className='pl-2 pt-8'>
        <CompanyModule
          inputTitleText={companyInputTitleText}
          inputTitleTextIsRequired={companyInputTitleTextIsRequired}
          selectBoxName={companySelectBoxName}
          selectBoxOptions={companySelectBoxOptions}
          errorMessageText={companyErrorMessageText}
        />
      </div>
      <div className='pl-2 pt-8'>
        <PlanModule
          inputTitleText={planInputTitleText}
          inputTitleTextIsRequired={planInputTitleTextIsRequired}
          selectBoxName={planSelectBoxName}
          selectBoxOptions={planSelectBoxOptions}
          errorMessageText={planErrorMessageText}
        />
      </div>
      <div className='pl-2 pt-8'>
        <ContractedCapacityModule
          inputTitleText={contractedCapacityInputTitleText}
          inputTitleTextIsRequired={contractedCapacityInputTitleTextIsRequired}
          selectBoxName={contractedCapacitySelectBoxName}
          selectBoxOptions={contractedCapacitySelectBoxOptions}
          errorMessageText={contractedCapacityErrorMessageText}
        />
      </div>

    </section>
  );
};

export default Zipcode;