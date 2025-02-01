// app/components/atoms/SectionTitle.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectBox, { SelectBoxProps } from './SelectBox';

export default {
  title: 'atoms/SelectBox',
  component: SelectBox,
} as Meta;

const Template: StoryFn<SelectBoxProps> = (args) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: 'select_name',
    options: [
      { name: 'option1' },
      { name: 'option2' },
      { name: 'option3' },
      { name: 'option4' },
      { name: 'option5' },
    ]
};