import * as React from 'react';
import { Sigil, Flex, Text } from '../..';

export type ShipProps = {
  avatar?: string;
  nickname?: string;
  sigilOnly?: boolean;
  textOpacity?: number;
  patp: string;
  shipColor?: string;
  textColor?: string;
};

export const Ship: any = (props: ShipProps) => {
  return (
    <Flex style={{ gap: 8 }} alignItems="center" padding={['4px', 0, '4px', 0]}>
      <Sigil
        clickable={false}
        avatar={props.avatar}
        patp={props.patp}
        size={24}
        color={props.sigilColor ? [props.sigilColor, 'white'] : ['black', 'white']}
      />
      <Text
        style={{ opacity: props.textOpacity || 0.95 }}
        variant="body"
        fontWeight="400"
        color={props.textColor ? props.textColor: 'black'}
        // fontByType="monospace"
      >
        {props.nickname || props.patp}
      </Text>
    </Flex>
  );
};
