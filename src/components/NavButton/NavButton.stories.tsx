import React from 'react';
import IconOne from 'remixicon-react/AppStoreLineIcon';
import ChatIcon from 'remixicon-react/Chat1LineIcon';

import { NavButton, NavButtonProps } from './NavButton';
import { Story } from '@storybook/react/types-6-0';

export default {
  title: 'Navigation/NavButton',
  component: NavButton,
  parameters: {
    // docs: {
    //   page: () => (
    //     <>
    //       <Title />
    //       <Description>Building block of layouts. Creates a box-model context</Description>
    //       <Props of={Box} />
    //     </>
    //   ),
    // },
  },
};

const Template = (args?: NavButtonProps) => (
  <div>
    <NavButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  id: '120',
  name: 'AppName',
  icon: <IconOne />,
  disabled: false,
  onAppClick: () => {},
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  id: '120',
  name: 'AppName',
  disabled: false,
  onAppClick: () => {},
};

export const Messaging = Template.bind({});
Messaging.args = {
  id: '120',
  name: 'Messaging',
  icon: <ChatIcon />,
  options: [],
  disabled: false,
  onAppClick: () => {},
};
