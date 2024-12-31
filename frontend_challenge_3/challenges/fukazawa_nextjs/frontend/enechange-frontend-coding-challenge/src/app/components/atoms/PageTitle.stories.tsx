// app/components/atoms/PageTitle.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import PageTitle, { PageTitleProps } from './PageTitle';

export default {
  title: 'atoms/PageTitle',
  component: PageTitle,
} as Meta;

const Template: StoryFn<PageTitleProps> = (args) => <PageTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: (
      <>
          電気代から<br />かんたんシュミレーション
      </>
  ),
};