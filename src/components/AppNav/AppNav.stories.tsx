import React from 'react';
import { Flex, Search, Icons, AppButton, NavButton, DAOSample } from '../..';
import { AppNav, AppNavProps } from './AppNav';

export default {
  title: 'Components/AppNav',
  component: AppNav,
  parameters: {},
};

const Template = (args?: AppNavProps) => (
  <div style={{ height: 600, width: 300 }}>
    <AppNav {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  appIcon: <Icons.Governance />,
  appName: 'Voting',
  appColor: '#F08735',
  selectedRouteUri: '/voting/booth/proposals',
  onSettingsClick: () => {},
  onRouteClick: (route) => console.log(route),
  subRoutes: [
    {
      icon: <Icons.SurveyLine />,
      name: 'Proposals',
      uri: '/voting/booth/proposals',
    },
    {
      icon: <Icons.ParentLine />,
      name: 'Delegate',
      uri: '/voting/booth/delegate',
    },
    {
      icon: <Icons.SettingsLine />,
      name: 'Settings',
      uri: '/voting/booth/settings',
    },
  ],
};
