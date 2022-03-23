import React, { FC } from 'react';
import { Icons, Flex, Sigil } from '../../..';
import { Voice } from '../Voice';
import { TrayButtonStyle } from '../TrayButton';

type UserTrayProps = {
  ship: {
    patp: string;
    color: string;
  };
  wallet: {
    address: string;
  };
  voice: {
    muted?: boolean;
    status?: 'connected' | 'issue' | 'disconnected';
    chatTitle?: string;
  };
};

export const UserTray: FC<UserTrayProps> = (props: UserTrayProps) => {
  const { voice, ship } = props;
  return (
    <Flex alignItems="center" style={{ gap: 8 }}>
      <Voice {...voice} />
      <TrayButtonStyle paddingLeft="4px" paddingRight="4px">
        <Icons.Wallet width="18px" height="18px" />
      </TrayButtonStyle>
      <TrayButtonStyle paddingLeft="4px" paddingRight="4px">
        <Icons.DMs width="18px" height="18px" />
      </TrayButtonStyle>
      {ship && (
        <Sigil
          patp={ship.patp}
          clickable
          size={26}
          color={[ship.color, 'white']}
        />
      )}
    </Flex>
  );
};

UserTray.defaultProps = {
  wallet: {
    address: null,
  },
  voice: {
    muted: true,
    status: 'disconnected',
    chatTitle: '',
  },
};
