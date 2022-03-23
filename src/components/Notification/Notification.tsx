import * as React from 'react';
import { Text } from '../..';
import { NotificationStyle } from './Notification.styles';

export type NotificationProps = {
  colour?: string;
  children?: string;
};

export const Notification: any = (props: NotificationProps) => {
  return (
    <NotificationStyle colour={props.colour}>
      <Text
        variant={props.children.length > 2 ? 'body' : 'hint'}
        fontSize={1}
        color={props.colour}
      >
        {props.children}
      </Text>
    </NotificationStyle>
  );
};

Notification.defaultProps = {
  color: '#4E9EFD',
  children: '1',
};
