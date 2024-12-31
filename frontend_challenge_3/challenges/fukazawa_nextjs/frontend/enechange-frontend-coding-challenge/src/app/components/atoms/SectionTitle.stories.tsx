// app/components/atoms/SectionTitle.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SectionTitle, { SectionTitleProps } from './SectionTitle';

export default {
  title: 'atoms/SectionTitle',
  component: SectionTitle,
} as Meta;

const Template: StoryFn<SectionTitleProps> = (args) => <SectionTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: '電気のご使用状況について教えて下さい',
};