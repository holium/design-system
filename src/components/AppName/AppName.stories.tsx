import React from 'react';
import { Flex, Search, Icons, AppButton, NavButton, DAOSample } from '../..';
import { AppName } from './AppName';

export default {
  title: 'Components/AppName',
  component: AppName,
  parameters: {},
};

const Template = (args?: any) => (
  <div style={{ width: 300 }}>
    <AppName {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  appIcon: <Icons.Chat style={{ color: '#85898E' }} />,
  appName: 'Chat channels',
};
