// app/components/atoms/TextInput.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import MailInput, { TMailInputProps } from './MailInput';

export default {
  title: 'atoms/MailInput',
  component: MailInput,
} as Meta;

const Template: StoryFn<MailInputProps> = (args) => <MailInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'メールアドレス',
};
