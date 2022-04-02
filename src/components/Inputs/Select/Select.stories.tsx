import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icons } from '../../';
import Select from './Select';

export default {
  title: 'Components/Inputs/Select',
  component: Select,
} as Meta;

// @ts-ignore
const Template: Story = (args: any) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Select something...',
  selectionOption: null,
  options: [
    {
      label: 'Option 1',
      value: 'Option 1',
      // icon: JSX.Element;
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      // icon: JSX.Element;
    },
    {
      label: 'Option 3',
      value: 'Option 3',
      icon: <Icons.ArrowRight />,
    },
  ],
  onSelected: () => {},
};

export const Selected = Template.bind({});
Selected.args = {
  placeholder: 'Select something...',
  selectionOption: 'Plymouth network',
  options: [
    { label: 'Plymouth network', value: 'Plymouth network' },
    {
      label: 'Option 1',
      value: 'Option 1',
      // icon: JSX.Element;
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      // icon: JSX.Element;
    },
    {
      label: 'Option 3',
      value: 'Option 3',
      icon: <Icons.ArrowRight />,
    },
  ],
  onSelected: () => {},
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  placeholder: 'Select something...',
  selectionOption: 'Plymouth network',
  options: [
    { label: 'Plymouth network', value: 'Plymouth network' },
    {
      label: 'Option 1',
      value: 'Option 1',
      // icon: JSX.Element;
    },
    {
      label: 'Option 2',
      value: 'Option 2',
      // icon: JSX.Element;
    },
    {
      label: 'Option 3',
      value: 'Option 3',
      icon: <Icons.ArrowRight />,
    },
  ],
  onSelected: () => {},
};
