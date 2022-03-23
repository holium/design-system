import React from 'react';
import { Flex, Search, Icons, AppButton, NavButton, DAOSample } from '../..';
import { SystemBar } from './SystemBar';

// Mock data
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

const availableNetworks = [
  {
    blockchain: 'Ethereum',
    network: 'Mainnet',
  },
  {
    blockchain: 'Uqbar',
    network: 'Testnet',
  },
];

const apps = [
  {
    name: 'Chat',
    icon: <Icons.ChatLine />,
    color: '#4E9EFD',
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
];

export default {
  title: 'Components/SystemBar',
  component: SystemBar,
  parameters: {},
};

const Template = (args?: any) => (
  <div
    style={{
      height: 200,
      width: '100%',
      display: 'inline-flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
    }}
  >
    <SystemBar {...args} />
  </div>
);

export const Full = Template.bind({});

Full.args = {
  selectedContext: {
    type: 'ship',
    name: '~lomder-librun',
    meta: {
      color: '#ff810a',
    },
  },
  availableContexts,
  selectedNetwork: { blockchain: 'Ethereum', network: 'Mainnet' },
  availableNetworks,
  selectedApp: null,
  apps,
  voice: {
    muted: true,
    status: 'disconnected',
    chatTitle: null,
  },
  wallet: { address: '123' },
  ship: { patp: '~lomder-librun', color: '#ff810a' },
};

export const AppSelected = Template.bind({});

AppSelected.args = {
  selectedContext: {
    type: 'ship',
    name: '~lomder-librun',
    meta: {
      color: '#ff810a',
    },
  },
  availableContexts,
  selectedNetwork: { blockchain: 'Ethereum', network: 'Mainnet' },
  availableNetworks,
  selectedApp: { name: 'Chat' },
  apps,
  voice: {
    muted: true,
    status: 'disconnected',
    chatTitle: null,
  },
  wallet: { address: '123' },
  ship: { patp: '~lomder-librun', color: '#ff810a' },
};
