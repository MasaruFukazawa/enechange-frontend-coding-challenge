// app/components/atoms/InputDescription.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputDescription from './InputDescription';

export default {
  title: 'atoms/InputDescription',
  component: InputDescription,
} as Meta;

const Template: StoryFn = (args) => <InputDescription {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '選択肢の説明文を表示するコンポーネント',
};
