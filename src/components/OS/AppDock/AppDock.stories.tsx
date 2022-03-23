import React from 'react';
import { Icons } from '../..';

import { AppDock } from './AppDock';

export default {
  title: 'Components/OS/AppDock',
  component: AppDock,
  parameters: {},
};

const Template = (args?: any) => (
  <div>
    <AppDock {...args} />
  </div>
);

export const Base = Template.bind({});
Base.args = {
  apps: [
    {
      name: 'Chat',
      icon: <Icons.ChatLine />,
    },
    {
      name: 'Engram',
      icon: <Icons.BookLine />,
    },
    {
      name: 'News',
      icon: <Icons.NewspaperLine />,
    },
    {
      name: 'Members',
      icon: <Icons.TeamLine />,
    },
    {
      name: 'Governance',
      icon: <Icons.GovernanceLine />,
    },
    {
      name: 'Treasury',
      icon: <Icons.SafeLine />,
    },
  ],
};

export const AppOpen = Template.bind({});
AppOpen.args = {
  selectedApp: 'Chat',
  apps: [
    {
      name: 'Chat',
      icon: <Icons.ChatLine />,
      color: '#3F95FA',
    },
    {
      name: 'Engram',
      icon: <Icons.BookLine />,
    },
    {
      name: 'News',
      icon: <Icons.NewspaperLine />,
    },
    {
      name: 'Members',
      icon: <Icons.TeamLine />,
    },
    {
      name: 'Governance',
      icon: <Icons.GovernanceLine />,
    },
    {
      name: 'Treasury',
      icon: <Icons.SafeLine />,
    },
  ],
};
