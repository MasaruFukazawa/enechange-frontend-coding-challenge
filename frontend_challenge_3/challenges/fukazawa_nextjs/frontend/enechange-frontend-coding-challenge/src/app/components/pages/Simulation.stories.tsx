import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Simulation, { SimulationProps } from './Simulation';

export default {
  title: 'pages/Simulation',
  component: Simulation,
} as Meta;

const Template: StoryFn<SimulationProps> = (args) => <Simulation {...args} />;

export const Default = Template.bind({});

Default.args = {};