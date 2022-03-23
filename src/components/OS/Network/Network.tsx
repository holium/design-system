import React, { FC } from 'react';
import styled from 'styled-components';
import { Icons, Text } from '../../..';
import { TrayButtonStyle } from '../TrayButton';

export type NetworkType = {
  blockchain: string;
  network: string;
};

type NetworkProps = {
  status?: 'connected' | 'disconnected';
  selectedNetwork?: NetworkType;
  availableNetworks: NetworkType[];
};

export const Network: FC<NetworkProps> = (props: NetworkProps) => {
  const { status, selectedNetwork, availableNetworks } = props;
  console.log(availableNetworks);
  let icon = null;
  let networkLabel = 'No network selected';
  if (selectedNetwork) {
    switch (selectedNetwork.blockchain) {
      case 'Ethereum':
        icon = <Icons.Ethereum height="16px" width="16px" />;
        networkLabel = `${selectedNetwork.blockchain}`;
        if (selectedNetwork.network === 'Testnet') {
          networkLabel = `${networkLabel} - ${selectedNetwork.network}`;
        }
        break;
      case 'Uqbar':
        icon = <Icons.Uqbar height="16px" width="16px" />;
        networkLabel = `${selectedNetwork.blockchain} - ${selectedNetwork.network}`;
        break;
      default:
        break;
    }
  }
  return (
    <TrayButtonStyle paddingLeft="4px">
      {icon}
      <Text ml="8px">{networkLabel}</Text>
      <NetworkStatus online={status === 'connected'} />
    </TrayButtonStyle>
  );
};

Network.defaultProps = {
  status: 'disconnected',
};

export const NetworkStatus = styled.div`
  height: 8px;
  width: 8px;
  margin-left: 12px;
  border-radius: 50%;
  background: ${(props: { online: boolean }) =>
    props.online ? '#0FC383' : '#EE3B3B'};
`;
