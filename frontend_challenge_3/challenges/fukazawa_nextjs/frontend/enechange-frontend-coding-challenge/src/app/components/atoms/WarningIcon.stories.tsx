// app/components/atoms/ErrorMessage.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import WarningIcon, { WarningIconProps } from './WarningIcon';

export default {
  title: 'atoms/WarningIcon',
  component: WarningIcon,
} as Meta;

const Template: StoryFn<WarningIconProps> = (args) => <WarningIcon {...args} />;

export const Default = Template.bind({});
// Default.args = {};
