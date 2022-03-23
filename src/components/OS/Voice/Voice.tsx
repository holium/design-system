import React, { FC } from 'react';
import { Icons, Text } from '../../..';
import { TrayButtonStyle } from '../TrayButton';

export type VoiceProps = {
  muted?: boolean;
  status?: 'connected' | 'issue' | 'disconnected';
  chatTitle?: string;
};

const statuses = {
  connected: '#0FC383',
  issue: '#EE3B3B',
  disconnected: null,
};

export const Voice: FC<VoiceProps> = (props: VoiceProps) => {
  const { muted, status, chatTitle } = props;
  return (
    <TrayButtonStyle
      paddingLeft="4px"
      paddingRight={chatTitle ? '8px' : '4px'}
      baseColor={!muted && statuses[status]}
    >
      {muted ? (
        <Icons.MicOff width="18px" height="18px" />
      ) : (
        <Icons.MicOn width="18px" height="18px" />
      )}
      {chatTitle && <Text ml="8px">{chatTitle}</Text>}
    </TrayButtonStyle>
  );
};

Voice.defaultProps = {
  status: 'connected',
};
