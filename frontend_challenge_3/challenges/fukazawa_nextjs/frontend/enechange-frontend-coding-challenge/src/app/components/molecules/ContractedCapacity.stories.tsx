import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ContractedCapacity, { ContractedCapacityProps } from './ContractedCapacity';

export default {
  title: 'molecules/ContractedCapacity',
  component: ContractedCapacity,
} as Meta;

const Template: StoryFn<ContractedCapacityProps> = (args) => <ContractedCapacity {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputTitleText: '契約容量',
  inputTitleTextIsRequired: true,
  selectBoxName: 'contracted_capacity',
  selectBoxOptions: [
    {name: "50kVA"},
  ]
};
