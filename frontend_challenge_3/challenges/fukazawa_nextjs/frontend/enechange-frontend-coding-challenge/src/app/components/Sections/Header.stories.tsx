import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Header, { HeaderProps } from './Header';

export default {
  title: 'sections/Header',
  component: Header,
} as Meta;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  pageTitleText: (
    <>
        電気代から<br />かんたんシュミレーション
    </>
  ),
  pageDescriptionText: (
    <>
        <p>検針票を用意しなくてもOK</p>
        <p>いくらおトクになるのか今すぐわかります！</p>
    </>
  ),
};
