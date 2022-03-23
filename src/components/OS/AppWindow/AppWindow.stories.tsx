import React from 'react';
import { Icons } from '../../';
import { AppWindow } from './AppWindow';

export default {
  title: 'Components/OS/AppWindow',
  component: AppWindow,
  parameters: {},
};

const Template = (args?: any) => (
  <div style={{ width: '100%' }}>
    <AppWindow {...args} />
  </div>
);

export const Standalone = Template.bind({});
Standalone.args = {
  // isStandalone: true,
  app: {
    icon: <Icons.Governance />,
    name: 'Ballot',
    color: '#ff810a',
  },
  ship: {
    patp: '~lomder-librun',
    color: '#ff810a',
  },
  selectedRouteUri: '/proposals',
  onRouteClick: (...args) => {},
  subRoutes: [
    { name: 'Proposals', uri: '/proposals' },
    { name: 'Delegates', uri: '/delegates' },
  ],
  selectedContext: {
    type: 'ship',
    name: '~lomder-librun',
    meta: {
      color: '#ff810a',
    },
  },
  contexts: [
    {
      type: 'ship',
      name: '~lomder-librun',
      meta: {
        color: '#ff810a',
      },
    },
    {
      type: 'group',
      name: 'Holium',
      avatar:
        'https://lomder-librun.sfo3.digitaloceanspaces.com/dev/Holium.png',
    },
    {
      type: 'group',
      name: 'The Collapse',
      avatar:
        'https://lomder-librun.sfo3.digitaloceanspaces.com/dev/roman-empire-wallpaper.jpeg',
    },
  ],
};
