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
      picture: null,
    },
  },
  {
    type: 'group',
    name: 'Holium',
    meta: {
      picture:
        'https://lomder-librun.sfo3.digitaloceanspaces.com/dev/Holium.png',
    },
  },
  {
    type: 'group',
    name: 'The Collapse',
    meta: {
      picture:
        'https://lomder-librun.sfo3.digitaloceanspaces.com/dev/roman-empire-wallpaper.jpeg',
    },
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
    <Context {...args} onContextClick={() => {}} />
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
  onContextClick: () => {},
};

export const Group = Template.bind({});
Group.args = {
  selectedContext: {
    type: 'group',
    name: 'The Collapse',
    meta: {
      picture:
        'https://lomder-librun.sfo3.digitaloceanspaces.com/dev/roman-empire-wallpaper.jpeg',
    },
  },
  availableContexts,
  onContextClick: () => {},
};
