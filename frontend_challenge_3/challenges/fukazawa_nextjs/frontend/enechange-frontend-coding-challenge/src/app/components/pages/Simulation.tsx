import React, { useState } from 'react';
import HeaderSection from '../sections/Header';
import ZipcodeSection from '../sections/Zipcode';
import ContractSection from '../sections/Contract';
import CostSection from '../sections/Cost';
import Userinfo from '../sections/Userinfo';
import SubmitSection from '../sections/Submit';
import { createServerParamsForServerSegment } from 'next/dist/server/app-render/entry-base';
import { LoggedIn } from '../../../stories/Page.stories';


const Simulation: React.FC = () => {

  const [zipcodeUpperInputValue, setZipcodeUpperInputValue] = useState<string>('');
  const [zipcodeUpperErrorMessageText, setZipcodeUpperErrorMessageText] = useState<string>('');
  

  const [zipcodeLowerInputValue, setZipcodeLowerInputValue] = useState<string>('');
  const [zipcodeLowerErrorMessageText, setZipcodeLowerErrorMessageText] = useState<string>('');

  /**
   * @name zipcodeUpperInputOnChange
   * @description 郵便番号上3桁の入力値が変更された際の処理
   * @param e 
   * @returns 
   */
  const zipcodeUpperInputOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {

    setZipcodeUpperErrorMessageText('');

    const value: string = e.target.value;

    if (value.length === 0) {
      setZipcodeUpperErrorMessageText('郵便番号を入力してください。');
    }
    else if (!value.match(/^[0-9]*$/)) {
      setZipcodeUpperErrorMessageText('数字のみで入力してください。');
      return;
    }
    else if (!['1', '5'].includes(value[0])) {
      setZipcodeUpperErrorMessageText('サービスエリア対象外です。');
      return;
    }
    /*
    else if (value.length !== 3) {
      setZipcodeUpperErrorMessageText('3桁で入力してください。');
      return;
    }
    */

    setZipcodeUpperInputValue(value);

    try {

      const area_code = value[0]

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/energy-companies/?area_code=${encodeURIComponent(area_code)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('ネットワーク応答が不正です');
      }

      const data = await response.json();

      if (data.length) {
        console.log('有効な郵便番号です');
      } else {
        setZipcodeUpperErrorMessageText('サーバー側で無効と判断されました');
      }

    } catch (error) {
      console.error('エラーが発生しました:', error);
      setZipcodeUpperErrorMessageText('通信エラーが発生しました');
    }

  };

  /**
   * @name zipcodeLowerInputOnChange
   * @description 郵便番号下4桁の入力値が変更された際の処理
   * @param e 
   * @returns 
   */
  const zipcodeLowerInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setZipcodeLowerErrorMessageText('');

    const value: string = e.target.value;

    if (!/^\d+$/.test(value)) {
      setZipcodeLowerErrorMessageText('数字のみで入力してください。');
      return;
    }
    else if (value.length !== 4) {
      setZipcodeLowerErrorMessageText('4桁で入力してください。');
      return;
    }

    setZipcodeLowerInputValue(value);
  };



  /**
   * @name handleSubmit
   * @description フォームが送信された際の処理
   * @param e 
   */
  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault(); // フォームのデフォルト送信を防ぐ
    console.log("フォームが送信されました");

  };

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
      <form onSubmit={handleSubmit}>
        <ZipcodeSection
          sectionTitleText='郵便番号をご入力ください'
          inputTitleText='電気を使用する場所の郵便番号'
          inputTitleTextIsRequired={true}
          zipcodeUppperInputName='zip_upper'
          zipcodeLowerInputName='zip_lower'
          zipcodeUpperInputOnChange={zipcodeUpperInputOnChange}
          zipcodeLowerInputOnChange={zipcodeLowerInputOnChange}
          zipcodeUpperErrorMessageText={zipcodeUpperErrorMessageText}
          zipcodeLowerErrorMessageText={zipcodeLowerErrorMessageText}
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