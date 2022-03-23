import React from 'react';

import { UserTray } from './UserTray';

export default {
  title: 'Components/OS/UserTray',
  component: UserTray,
  parameters: {},
};

const Template = (args?: any) => (
  <div>
    <UserTray {...args} />
  </div>
);

export const UserTrayBase = Template.bind({});
UserTrayBase.args = {
  ship: {
    patp: '~lomder-librun',
    color: '#ff810a',
  },
  wallet: { address: '' },
};

export const UserTrayVoice = Template.bind({});
UserTrayVoice.args = {
  ship: {
    patp: '~lomder-librun',
    color: '#ff810a',
  },
  voice: {
    muted: false,
    status: 'connected',
    chatTitle: 'Development / General',
  },
  wallet: { address: '' },
};
