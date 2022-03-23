import React from 'react';

import { Network } from './Network';

export default {
  title: 'Components/OS/Network',
  component: Network,
  parameters: {},
};

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

const Template = (args?: any) => (
  <div>
    <Network {...args} />
  </div>
);

export const NoNetwork = Template.bind({});
NoNetwork.args = {
  status: 'disconnected',
  availableNetworks,
};

export const EthereumMainnet = Template.bind({});
EthereumMainnet.args = {
  status: 'connected',
  selectedNetwork: { blockchain: 'Ethereum', network: 'Mainnet' },
  availableNetworks,
};

export const UqbarTestnet = Template.bind({});
UqbarTestnet.args = {
  status: 'connected',
  selectedNetwork: { blockchain: 'Uqbar', network: 'Testnet' },
  availableNetworks,
};
