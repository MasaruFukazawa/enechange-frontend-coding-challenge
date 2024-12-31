// app/components/atoms/TextInput.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput';

export default {
  title: 'atoms/TextInput',
  component: TextInput,
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: '結果を見る',
};
