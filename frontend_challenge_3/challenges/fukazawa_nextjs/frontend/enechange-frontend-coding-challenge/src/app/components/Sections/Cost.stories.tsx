import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Cost, { CostProps } from './Cost';

export default {
  title: 'sections/Cost',
  component: Cost,
} as Meta;

const Template: StoryFn<CostProps> = (args) => <Cost {...args} />;

export const Default = Template.bind({});
Default.args = {
  sectionTitleText: '先月の電気代について教えてください',
  costInputTitleText: '先月の電気代は？',
  costInputTitleTextIsRequired: true,
  costTextInputName: 'cost',
  costErrorMessageText: '',
};
