import React from 'react';

import { Voice } from './Voice';

export default {
  title: 'Components/OS/Voice',
  component: Voice,
  parameters: {},
};

const Template = (args?: any) => (
  <div>
    <Voice {...args} />
  </div>
);

export const Chatroom = Template.bind({});
Chatroom.args = {
  muted: false,
  status: 'connected',
  chatTitle: 'Development / General',
};

export const Call = Template.bind({});
Call.args = {
  muted: false,
  status: 'connected',
  chatTitle: '~ronseg-hacsym',
};

export const CallIssue = Template.bind({});
CallIssue.args = {
  muted: false,
  status: 'issue',
  chatTitle: '~ronseg-hacsym',
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  muted: true,
  status: 'disconnected',
  chatTitle: null,
};
