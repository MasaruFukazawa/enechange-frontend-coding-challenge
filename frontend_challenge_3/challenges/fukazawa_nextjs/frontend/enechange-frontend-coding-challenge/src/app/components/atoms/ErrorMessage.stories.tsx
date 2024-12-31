// app/components/atoms/ErrorMessage.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ErrorMessage, { ErrorMessageProps } from './ErrorMessage';

export default {
  title: 'atoms/ErrorMessage',
  component: ErrorMessage,
} as Meta;

const Template: StoryFn<ErrorMessageProps> = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'エラーメッセージを表示するコンポーネント',
};
