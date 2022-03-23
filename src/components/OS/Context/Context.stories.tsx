import React from 'react';

import { Context } from './Context';

export default {
  title: 'Components/OS/Context',
  component: Context,
  parameters: {},
};

const availableContexts = [
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
    avatar: 'https://lomder-librun.sfo3.digitaloceanspaces.com/dev/Holium.png',
  },
  {
    type: 'group',
    name: 'The Collapse',
    avatar:
      'https://lomder-librun.sfo3.digitaloceanspaces.com/dev/roman-empire-wallpaper.jpeg',
  },
];

const Template = (args?: any) => (
  <div
    style={{
      height: 400,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}
  >
    <Context {...args} />
  </div>
);

export const NoContextSelected = Template.bind({});
NoContextSelected.args = {
  selectedContext: null,
  availableContexts,
};

export const Ship = Template.bind({});
Ship.args = {
  selectedContext: {
    type: 'ship',
    name: '~lomder-librun',
    meta: {
      color: '#ff810a',
    },
  },
  availableContexts,
};

export const Group = Template.bind({});
Group.args = {
  selectedContext: {
    type: 'group',
    name: 'The Collapse',
    avatar:
      'https://lomder-librun.sfo3.digitaloceanspaces.com/dev/roman-empire-wallpaper.jpeg',
  },
  availableContexts,
};
