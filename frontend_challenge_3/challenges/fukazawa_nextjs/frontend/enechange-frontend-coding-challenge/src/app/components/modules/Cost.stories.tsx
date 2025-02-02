import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Cost, { CostProps } from './Cost';

export default {
  title: 'modules/Cost',
  component: Cost,
} as Meta;

const Template: StoryFn<CostProps> = (args) => <Cost {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputTitleText: ' 先月の電気代は？',
  inputTitleTextIsRequired: true,
  textInputName: 'cost',
};
