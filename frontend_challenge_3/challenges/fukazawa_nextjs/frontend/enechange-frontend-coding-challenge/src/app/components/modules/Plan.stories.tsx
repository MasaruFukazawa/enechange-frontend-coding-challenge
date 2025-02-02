import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Plan, { PlanProps } from './Plan';

export default {
  title: 'modules/Plan',
  component: Plan,
} as Meta;

const Template: StoryFn<PlanProps> = (args) => <Plan {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputTitleText: 'プラン',
  inputTitleTextIsRequired: true,
  selectBoxName: 'plan',
  selectBoxOptions: [
    {name: "従量電灯B"},
    {name: "従量電灯C"},
  ]
};
