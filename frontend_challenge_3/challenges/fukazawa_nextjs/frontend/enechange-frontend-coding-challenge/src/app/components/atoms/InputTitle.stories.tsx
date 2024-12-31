// app/components/atoms/InputTitle.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputTitle, { InputTitleProps } from './InputTitle';

export default {
  title: 'atoms/InputTitle',
  component: InputTitle,
} as Meta;

const Template: StoryFn<InputTitleProps> = (args) => <InputTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: '電力会社',
    isRequired: false,
};

export const Required = Template.bind({});
Required.args = {
    text: '電力会社',
    isRequired: true,
};