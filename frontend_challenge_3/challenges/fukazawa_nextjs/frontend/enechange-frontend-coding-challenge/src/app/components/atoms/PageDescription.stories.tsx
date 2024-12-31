// app/components/atoms/PageTitle.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PageDescription, { PageDescriptionProps } from './PageDescription';

export default {
  title: 'atoms/PageDescription',
  component: PageDescription,
} as Meta;

const Template: StoryFn<PageDescriptionProps> = (args) => <PageDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: (
      <>
          <p>検針票を用意しなくてもOK</p>
          <p>いくらおトクになるのか今すぐわかります！</p>
      </>
  ),
};