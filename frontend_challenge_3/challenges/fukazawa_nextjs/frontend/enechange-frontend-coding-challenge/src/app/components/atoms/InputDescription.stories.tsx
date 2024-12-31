// app/components/atoms/InputDescription.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputDescription, { InputDescriptionProps } from './InputDescription';

export default {
  title: 'atoms/InputDescription',
  component: InputDescription,
} as Meta;

const Template: StoryFn<InputDescriptionProps> = (args) => <InputDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: '選択肢の説明文を表示するコンポーネント',
};
