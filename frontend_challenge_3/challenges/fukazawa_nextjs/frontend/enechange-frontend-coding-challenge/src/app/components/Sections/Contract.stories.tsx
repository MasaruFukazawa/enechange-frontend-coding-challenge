import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Contract, { ContractProps } from './Contract';

export default {
  title: 'sections/Contract',
  component: Contract,
} as Meta;

const Template: StoryFn<ContractProps> = (args) => <Contract {...args} />;

export const Default = Template.bind({});
Default.args = {
  sectionTitleText: '電気の契約状況について教えてください',
  companyInputTitleText: '電力会社',
  companyInputTitleTextIsRequired: true,
  companySelectBoxName: 'company',
  companySelectBoxOptions: [
    { name: '東京電力' },
    { name: '関西電力' },
  ],
  companyErrorMessageText: '',
  planInputTitleText: 'プラン',
  planInputTitleTextIsRequired: true,
  planSelectBoxName: 'plan',
  planSelectBoxOptions: [
    { name: '従量電灯B' },
    { name: '従量電灯C' },
  ],
  planErrorMessageText: '',
  contractedCapacityInputTitleText: '契約容量',
  contractedCapacityInputTitleTextIsRequired: true,
  contractedCapacitySelectBoxName: 'contracted_capacity',
  contractedCapacitySelectBoxOptions: [
    { name: '50kVA' },
  ],
  contractedCapacityErrorMessageText: '',
};
