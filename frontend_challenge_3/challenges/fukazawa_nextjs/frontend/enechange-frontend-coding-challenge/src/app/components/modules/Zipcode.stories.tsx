import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Zipcode, { ZipcodeProps } from './Zipcode';

export default {
  title: 'modules/Zipcode',
  component: Zipcode,
} as Meta;

const Template: StoryFn<ZipcodeProps> = (args) => <Zipcode {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputTitleText: '電気を使用する場所の郵便番号',
  inputTitleTextIsRequired: true,
  zipcodeAtomFirstCodeName: 'zip_upper',
  zipcodeAtomLastCodeName: 'zip_lower',
};
