import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Zipcode, { ZipcodeProps } from './Zipcode';

export default {
  title: 'molecules/Zipcode',
  component: Zipcode,
} as Meta;

const Template: StoryFn<ZipcodeProps> = (args) => <Zipcode {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputTitleText: '電力会社',
  inputTitleTextIsRequired: true,
  zipcodeAtomFirstCodeName: 'zip_upper',
  zipcodeAtomLastCodeName: 'zip_lower',
};
