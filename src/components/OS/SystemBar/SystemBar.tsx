import * as React from 'react';
import { Box, Flex } from '../../';
import { AppDock, AppType } from '../AppDock/AppDock';
import { Context, ContextType } from '../Context';
import { Network, NetworkType } from '../Network';
import { UserTray } from '../UserTray/UserTray';
import { VoiceProps } from '../Voice';

export type SystemBarProps = {
  selectedApp: AppType;
  apps?: [AppType];
  selectedContext?: ContextType;
  availableContexts?: ContextType[];
  selectedNetwork?: NetworkType;
  availableNetworks: NetworkType[];
  ship: {
    patp: string;
    color: string;
  };
  voice: VoiceProps;
  children?: React.ReactChildren;
  onContextSelect?: (context: ContextType) => any;
  onSettingsClick?: () => any;
};

export const SystemBar: any = (props: Partial<SystemBarProps>) => {
  const {
    selectedApp,
    apps,
    selectedContext,
    availableContexts,
    selectedNetwork,
    availableNetworks,
    voice,
    ship,
    // onSettingsClick,
    // onContextSelect,
  } = props;
  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          zIndex: 3,
          display: 'flex',
          bottom: 6,
          left: 0,
        }}
      >
        <Box
          style={{ gap: '8px' }}
          justifyContent="flex-start"
          alignItems="center"
        >
          <Context
            menuOrientation="top"
            selectedContext={selectedContext}
            availableContexts={availableContexts}
          />
          <Network
            selectedNetwork={selectedNetwork}
            availableNetworks={availableNetworks}
          />
        </Box>
      </div>
      <div
        style={{
          width: '100%',
          position: 'absolute',
          zIndex: 2,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Flex justifyContent="center" alignItems="center">
          <AppDock selectedApp={selectedApp && selectedApp.name} apps={apps} />
        </Flex>
      </div>
      <div
        style={{
          display: 'inline-flex',
          position: 'absolute',
          zIndex: 3,
          bottom: 6,
          right: 0,
        }}
      >
        <Box justifyContent="flex-end" ml={12}>
          <UserTray ship={ship} voice={voice} wallet={{ address: '' }} />
        </Box>
      </div>
    </div>
  );
};
