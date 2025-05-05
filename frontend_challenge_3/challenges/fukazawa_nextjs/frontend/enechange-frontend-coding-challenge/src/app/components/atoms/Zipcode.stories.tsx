import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Zipcode, { ZipcodeProps } from './Zipcode';

export default {
  title: 'atoms/Zipcode',
  component: Zipcode,
} as Meta;

const Template: StoryFn<ZipcodeProps> = (args) => <Zipcode {...args} />;

export const Default = Template.bind({});

Default.args = {
  zipcodeUppperInputName: 'zip_upper',
  zipcodeLowerInputName: 'zip_lower',
  zipcodeUpperInputOnChange: () => alert("call zipcodeUpperInputOnChange"),
  zipcodeLowerInputOnChange: () => alert("call zipcodeLowerInputOnChange"),
};
