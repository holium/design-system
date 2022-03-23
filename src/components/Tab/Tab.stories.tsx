import React from 'react';
import { Tab } from './Tab';

export default {
  title: 'Components/Tab',
  component: Tab,
  parameters: {},
};

// @ts-ignore
const Template: Story = (args: TabProps) => <Tab children={args.children} />;

export const Default = Template.bind({});
Default.args = {
  children: <a>Link</a>,
};
