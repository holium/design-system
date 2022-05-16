import * as React from 'react';
import { NotificationStyle } from './Notification.styles';

export type NotificationProps = {
  hasBorder?: boolean;
  customColor?: string;
  children?: string;
};

export const Notification: any = (props: NotificationProps) => {
  return (
    <NotificationStyle
      hasBorder={props.hasBorder}
      customColor={props.customColor}
    >
      {/* <Text
        variant={props.children.length > 2 ? 'body' : 'hint'}
        fontSize={1}
        color={props.colour}
      > */}
      {props.children}
      {/* </Text> */}
    </NotificationStyle>
  );
};

Notification.defaultProps = {
  customColor: '#4E9EFD',
  hasBorder: false,
  children: '1',
};
