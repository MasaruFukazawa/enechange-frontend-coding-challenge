import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Userinfo, { UserinfoProps } from './Userinfo';

export default {
  title: 'sections/Userinfo',
  component: Userinfo,
} as Meta;

const Template: StoryFn<UserinfoProps> = (args) => <Userinfo {...args} />;

export const Default = Template.bind({});
Default.args = {
  sectionTitleText: 'ユーザ情報を入力してください',
  mailInputTitleText: 'メールアドレス',
  mailInputTitleTextIsRequired: true,
  mailInputName: 'mail',
  mailErrorMessageText: '',
};
