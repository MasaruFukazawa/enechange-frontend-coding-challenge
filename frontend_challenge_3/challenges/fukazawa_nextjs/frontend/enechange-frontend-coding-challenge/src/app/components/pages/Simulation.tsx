import React from 'react';
import HeaderSection from '../sections/Header';
import ZipcodeSection from '../sections/Zipcode';
import ContractSection from '../sections/Contract';
import CostSection from '../sections/Cost';
import SubmitSection from '../sections/Submit';

interface SimulationProps {
  pageTitleText: string;
  pageDescriptionText: string;
} 

const Simulation: React.FC<SimulationProps> = ({ 
  pageTitleText,
  pageDescriptionText,
}) => {
  return (
    <div
      className='bg-gray-100'
    >
      <HeaderSection
        pageTitleText={
          <>
            電気代から<br />かんたんシュミレーション
          </>
        }
        pageDescriptionText={
          <>
            <p>検針票を用意しなくてもOK</p>
            <p>いくらおトクになるのか今すぐわかります！</p>
          </>
        }
      />
      <ZipcodeSection
        sectionTitleText='郵便番号を入力してください'
        inputTitleText='電気を使用する場所の郵便番号'
        inputTitleTextIsRequired={true}
        zipcodeFirstCodeName='zip_upper'
        zipcodeLastCodeName='zip_lower'
        errorMessageText=''
      />
      <ContractSection
        sectionTitleText='電気の契約状況について教えてください'
        companyInputTitleText='電力会社'
        companyInputTitleTextIsRequired={true}
        companySelectBoxName='company'
        companySelectBoxOptions={[
          { name: '東京電力' },
          { name: '関西電力' },
        ]}
        companyErrorMessageText=''
        planInputTitleText='プラン'
        planInputTitleTextIsRequired={true}
        planSelectBoxName='plan'
        planSelectBoxOptions={[
          { name: '従量電灯B' },
          { name: '従量電灯C' },
        ]}
        planErrorMessageText=''
        contractedCapacityInputTitleText='契約容量'
        contractedCapacityInputTitleTextIsRequired={true}
        contractedCapacitySelectBoxName='contracted_capacity'
        contractedCapacitySelectBoxOptions={[
          { name: '50kVA' },
        ]}
        contractedCapacityErrorMessageText=''
      />
      <CostSection
        sectionTitleText='先月の電気代について教えてください'
        costInputTitleText='先月の電気代は？'
        costInputTitleTextIsRequired={true}
        costTextInputName='cost'
        costErrorMessageText=''
      />
      <SubmitSection
        submitButtonText='結果を見る'
      />
    </div>
  );
};

export default Simulation;