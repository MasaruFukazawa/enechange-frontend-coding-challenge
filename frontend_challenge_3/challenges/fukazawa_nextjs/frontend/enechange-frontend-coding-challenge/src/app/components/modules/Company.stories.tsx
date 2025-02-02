import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Company, { CompanyProps } from './Company';

export default {
  title: 'modules/Company',
  component: Company,
} as Meta;

const Template: StoryFn<CompanyProps> = (args) => <Company {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputTitleText: '電力会社',
  inputTitleTextIsRequired: true,
  selectBoxName: 'company',
  selectBoxOptions: [
    {name: "東京電力"},
    {name: "関西電力"},
  ]
};
