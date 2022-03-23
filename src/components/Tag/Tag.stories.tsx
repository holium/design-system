import React from 'react';
import { Flex, TlonIcon } from '..';
import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: {},
};

// @ts-ignore
const Template: Story = (args: Partial<TagProps>) => (
  <Flex style={{ gap: 4 }} flexDirection="column">
    <Tag
      label={args.label}
      intent="info"
      icon={args.icon}
      minimal={args.minimal}
      removable={args.removable}
    />
    <Tag
      label={args.label}
      intent="success"
      icon={args.icon}
      minimal={args.minimal}
      removable={args.removable}
    />
    <Tag
      label={args.label}
      intent="caution"
      icon={args.icon}
      minimal={args.minimal}
      removable={args.removable}
    />
    <Tag
      label={args.label}
      intent="alert"
      icon={args.icon}
      minimal={args.minimal}
      removable={args.removable}
    />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Active',
};

export const Minimal = Template.bind({});
Minimal.args = {
  label: 'Active',
  minimal: true,
};

export const Removable = Template.bind({});
Removable.args = {
  label: 'Active',
  minimal: true,
  removable: true,
};

export const WithIconMinimal = Template.bind({});
WithIconMinimal.args = {
  label: 'Active',
  icon: <TlonIcon icon="Info" />,
  minimal: true,
  removable: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: 'Active',
  icon: <TlonIcon icon="Info" />,
  removable: true,
};
