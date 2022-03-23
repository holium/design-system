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
    <Notification colour={args.colour}>1234567</Notification>
    <Notification colour={args.colour}>4321</Notification>
    <Notification colour={args.colour}>4</Notification>
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  colour: '#4e9efd',
};
