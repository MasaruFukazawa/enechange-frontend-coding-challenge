import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Mail, { MailProps } from './Mail';

export default {
  title: 'modules/Mail',
  component: Mail,
} as Meta;

const Template: StoryFn<MailProps> = (args) => <Mail {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputTitleText: 'メールアドレス',
  inputTitleTextIsRequired: true,
  mailInputName: 'mail',
};
