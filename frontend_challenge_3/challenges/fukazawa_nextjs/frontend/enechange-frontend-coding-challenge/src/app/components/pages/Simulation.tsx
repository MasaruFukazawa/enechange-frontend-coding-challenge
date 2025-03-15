import React, { useState } from 'react';
import HeaderSection from '../sections/Header';
import ZipcodeSection from '../sections/Zipcode';
import ContractSection from '../sections/Contract';
import CostSection from '../sections/Cost';
import Userinfo from '../sections/Userinfo';
import SubmitSection from '../sections/Submit';


const Simulation: React.FC = () => {
  /*
  const [upperZipcode, setUpperZipcode] = useState<string>('');
  const [upperZipcodeError, setUpperZipcodeError] = useState<string>('');

  const [upperZipcode, setUpperZipcode] = useState<string>('');
  const [upperZipcodeError, setUpperZipcodeError] = useState<string>('');

  const onUpperZipcodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setUpperZipcodeError('');

    const value: string = e.target.value;

    if (value[0] !== '1' && value[0] !== '5') {
      setUpperZipcodeError('サービスエリア対象外です。');
      return;
    }
    else if (value.length !== 3) {
      setUpperZipcodeError('3桁で入力してください。');
      return;
    }
    else if (!value.match(/^[0-9]*$/)) {
      setUpperZipcodeError('数字のみで入力してください。');
      return;
    }

    setUpperZipcode(value);
  };
  */
  return (
    <div
      className='bg-gray-100'
    >
      <HeaderSection
        pageTitleText=<>
            電気代から<br />かんたんシュミレーション
        </>
        pageDescriptionText=<>
          <p>検針票を用意しなくてもOK</p>
          <p>いくらおトクになるのか今すぐわかります！</p>
        </>
      />
      <form>
        <ZipcodeSection
          sectionTitleText='郵便番号をご入力ください'
          inputTitleText='電気を使用する場所の郵便番号'
          inputTitleTextIsRequired={true}
          zipcodeUppperInputName='zip_upper'
          zipcodeLowerInputName='zip_lower'
          zipcodeUpperInputOnChange={() => alert('zipcodeUpperInputOnChange called')}
          zipcodeLowerInputOnChange={() => alert('zipcodeLowerInputOnChange called')}
          zipcodeUppperErrorMessageText=""
          zipcodeLowerErrorMessageText=""
        />
        <ContractSection
          sectionTitleText='電気の契約状況について教えてください'
          companyInputTitleText='電力会社'
          companyInputTitleTextIsRequired={true}
          companySelectBoxName='company'
          companySelectBoxOptions={[]}
          companyErrorMessageText=''
          planInputTitleText='プラン'
          planInputTitleTextIsRequired={true}
          planInputDescriptionText='電力会社のプランを選択してください'
          planSelectBoxName='plan'
          planSelectBoxOptions={[]}
          planErrorMessageText=''
          contractedCapacityInputTitleText='契約容量'
          contractedCapacityInputTitleTextIsRequired={true}
          contractedCapacitySelectBoxName='contracted_capacity'
          contractedCapacitySelectBoxOptions={[]} 
          contractedCapacityErrorMessageText=''
        />
        <CostSection
          sectionTitleText='先月の電気代について教えてください'
          costInputTitleText='先月の電気代は？'
          costInputTitleTextIsRequired={true}
          costTextInputName='cost'
          costErrorMessageText=''
        />
        <Userinfo
          sectionTitleText='ユーザ情報を入力してください'
          mailInputTitleText='メールアドレス'
          mailInputTitleTextIsRequired={true}
          mailInputName='mail'
          mailErrorMessageText=''
        />
        <SubmitSection
          submitButtonText='結果を見る'
        />
      </form>
    </div>
  );
};

export default Simulation;