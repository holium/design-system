import React from 'react';
import { Flex } from '../..';
import { Notification, NotificationProps } from './Notification';

export default {
  title: 'Components/Notifications',
  component: Notification,
  parameters: {},
};

// @ts-ignore
const Template: Story = (args: Partial<NotificationProps>) => (
  <Flex style={{ gap: 4 }} flexDirection="column">
    <Notification colour={args.customColor}>1234567</Notification>
    <Notification colour={args.customColor}>4321</Notification>
    <Notification colour={args.customColor}>4</Notification>
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  customColor: '#4e9efd',
};
