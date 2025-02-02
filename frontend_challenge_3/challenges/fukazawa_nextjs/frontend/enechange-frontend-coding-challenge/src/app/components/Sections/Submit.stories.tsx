import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Submit, { SubmitProps } from './Submit';

export default {
  title: 'sections/Submit',
  component: Submit,
} as Meta;

const Template: StoryFn<SubmitProps> = (args) => <Submit {...args} />;

export const Default = Template.bind({});
Default.args = {
  submitButtonText: '結果を見る',
};
