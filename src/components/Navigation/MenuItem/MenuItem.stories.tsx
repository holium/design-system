import React from 'react';
import { Flex } from '../..';
import { MenuItem } from './MenuItem';

export default {
  title: 'Components/ContextMenu/MenuItem',
  component: MenuItem,
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

export const Basic = () => (
  <Flex flexDirection="row" justifyContent="flex-start">
    <MenuItem label="Mark as read" onClick={() => {}} subMenu={null} />
  </Flex>
);
