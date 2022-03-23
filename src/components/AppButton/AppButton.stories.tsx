import React from 'react';

// import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { AppButton, AppButtonProps } from './AppButton';
import { Story } from '@storybook/react/types-6-0';
import { Flex, Icons } from '../';
import { flex } from 'styled-system';

export default {
  title: 'Navigation/AppButton',
  component: AppButton,
  parameters: {},
};

const Template = (args: AppButtonProps) => (
  <div>
    <AppButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: 'Home',
  icon: <Icons.Home />,
  expanded: false,
  disabled: false,
  selected: false,
  onAppClick: () => {},
};

export const AppButtonRow = () => (
  <div
    style={{
      display: 'flex',
      gap: 8,
      flexDirection: 'row',
      alignItems: 'center',
    }}
  >
    <AppButton
      name="Home"
      icon={<Icons.Home />}
      expanded={false}
      selected={true}
      onAppClick={() => {}}
    />
    <AppButton
      name="Chat"
      icon={<Icons.Chat />}
      expanded={false}
      selected={false}
      onAppClick={() => {}}
    />
    <AppButton
      name="Engram"
      icon={<Icons.Book />}
      expanded={false}
      selected={false}
      onAppClick={() => {}}
    />
    <AppButton
      name="News"
      icon={<Icons.Newspaper />}
      expanded={false}
      selected={false}
      onAppClick={() => {}}
    />
    <AppButton
      name="Members"
      icon={<Icons.Team />}
      expanded={false}
      selected={false}
      onAppClick={() => {}}
    />
    <AppButton
      name="Governance"
      icon={<Icons.Governance />}
      expanded={false}
      selected={false}
      onAppClick={() => {}}
    />
    <AppButton
      name="Treasury"
      icon={<Icons.Safe />}
      expanded={false}
      selected={false}
      onAppClick={() => {}}
    />
  </div>
);
