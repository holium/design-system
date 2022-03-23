import React from 'react';
import { Flex } from '../..';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Group } from './Group';

export default {
  title: 'Components/Urbit/Group',
  component: Group,
  parameters: {},
  argTypes: {
    entity: {
      options: ['Group', 'DAO'],
      control: { type: 'select' },
    },
    trailingInfo: {
      options: ['type', 'notification'],
      control: { type: 'select' },
    },
    infoBeneath: {
      options: ['link', 'participants'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Group>;

const menuOptions = [
  { label: 'View Group Info', value: 'viewGroupInfo' },
  { label: 'Join Group', value: 'joinGroup' },
];

const Template: ComponentStory<typeof Group> = (args) => (
  <Flex style={{ gap: 12 }} flexDirection="column">
    <Group
      patp={args.patp}
      name={args.string}
      color={args.string}
      size="medium"
      menuOptions={args.menuOptions}
      clickable={args.boolean}
      sigil={args.boolean}
      trailingInfo={args.trailingInfo}
      entity={args.entity}
      type={args.type}
      notification={args.notification}
      infoBeneath={args.infoBeneath}
      link={args.link}
      participantNumber={args.participantNumber}
      participantType={args.participantType}
      image={args.image}
      customColour={args.customColour}
    />
    <Group
      patp={args.patp}
      name={args.string}
      color={args.string}
      size="medium"
      menuOptions={args.menuOptions}
      clickable={args.boolean}
      sigil={true}
      trailingInfo={args.trailingInfo}
      entity={args.entity}
      type={args.type}
      notification={args.notification}
      infoBeneath={args.infoBeneath}
      link={args.link}
      participantNumber={args.participantNumber}
      participantType={args.participantType}
      image={args.image}
      customColour={args.customColour}
    />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  patp: '~lomder-librun',
  name: 'Holons',
  color: '#ff810a',
  menuOptions: menuOptions,
  clickable: true,
  noAttachments: true,
};

export const WithNotification = Template.bind({});
WithNotification.args = {
  ...Default.args,
  size: 'medium',
  notification: 12,
  customColour: '#4e9efd',
};

export const WithType = Template.bind({});
WithType.args = {
  ...Default.args,
  size: 'medium',
  type: 'Group',
  customColour: '#876BCA',
};

export const WithParticipants = Template.bind({});
WithParticipants.args = {
  ...Default.args,
  size: 'medium',
  participantNumber: 12,
  participantType: 'holons',
  customColour: '#876BCA',
  noAttachments: true,
};

export const WithNotificationAndParticipants = Template.bind({});
WithNotificationAndParticipants.args = {
  ...Default.args,
  size: 'medium',
  notification: 12,
  participantNumber: 12,
  participantType: 'holons',
  customColour: '#4e9efd',
};

export const WithTypeAndParticipants = Template.bind({});
WithTypeAndParticipants.args = {
  ...Default.args,
  size: 'medium',
  type: 'Group',
  participantNumber: 12,
  participantType: 'holons',
  customColour: '#876BCA',
};

export const WithLink = Template.bind({});
WithLink.args = {
  ...Default.args,
  size: 'medium',
  link: '~lomder-librun/holons',
  customColour: '#876BCA',
  noAttachments: true,
};

export const WithNotificationAndLink = Template.bind({});
WithNotificationAndLink.args = {
  ...Default.args,
  size: 'medium',
  notification: 12,
  link: '~lomder-librun/holons',
  customColour: '#4e9efd',
};

export const WithTypeAndLink = Template.bind({});
WithTypeAndLink.args = {
  ...Default.args,
  size: 'medium',
  type: 'Group',
  link: '~lomder-librun/holons',
  customColour: '#876BCA',
};
