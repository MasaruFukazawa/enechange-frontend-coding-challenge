// app/components/atoms/PageDescription.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PageDescription from './PageDescription';

export default {
  title: 'atoms/PageDescription',
  component: PageDescription,
} as Meta;

const Template: StoryFn = (args) => <PageDescription {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: (
    <>
      <p>検針票を用意しなくてもOK</p>
      <p>いくらおトクになるのか今すぐわかります！</p>
    </>
  ),
};