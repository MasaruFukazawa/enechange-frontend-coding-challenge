// app/components/atoms/SubmitButton.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SubmitButton, { SubmitButtonProps } from './SubmitButton';

export default {
  title: 'atoms/SubmitButton',
  component: SubmitButton,
} as Meta;

const Template: StoryFn<SubmitButtonProps> = (args) => <SubmitButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: '結果を見る',
};
