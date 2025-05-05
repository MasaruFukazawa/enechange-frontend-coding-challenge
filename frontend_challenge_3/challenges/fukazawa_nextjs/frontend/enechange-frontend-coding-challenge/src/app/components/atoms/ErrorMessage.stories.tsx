// app/components/atoms/ErrorMessage.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ErrorMessage from './ErrorMessage';

export default {
  title: 'atoms/ErrorMessage',
  component: ErrorMessage,
} as Meta;

const Template: StoryFn = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'エラーメッセージを表示するコンポーネント',
};
