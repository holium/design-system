import React from 'react';
import { Flex, Page, Button, Fill } from '../..';
import { TextButton } from '../Button/TextButton';
import { PaneHeader, PaneHeaderText, PaneHeaderProps } from './PaneHeader';

export default {
  title: 'Components/PaneHeader',
  component: PaneHeader,
  parameters: {
    // docs: {
    //   page: () => (
    //     <>
    //       <Title />
    //       <Description>Building block of layouts. Creates a box-model context</Description>
    //       <Props of={Box} />
    //     </>
    //   ),
    // },
  },
};

// @ts-ignore
const Template: Story = (args: Partial<PaneHeaderProps>) => (
  <Fill style={{ height: 250, width: 400 }}>
    <Page spacing={16} {...args}>
      <PaneHeader {...args}>{args.children}</PaneHeader>
    </Page>
  </Fill>
);

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  children: (
    <>
      <PaneHeaderText>Polls</PaneHeaderText>
      <TextButton>+ Create</TextButton>
    </>
  ),
};
