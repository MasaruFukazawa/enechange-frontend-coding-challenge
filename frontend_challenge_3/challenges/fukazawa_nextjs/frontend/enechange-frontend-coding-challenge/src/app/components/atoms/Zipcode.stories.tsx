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
  first_code_name: 'zip_upper',
  last_code_name: 'zip_lower',
};
