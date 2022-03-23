import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { InlineEdit } from './InlineEdit';
import { Box, Icons } from '../..';

export default {
  title: 'Components/Inputs/InlineEdit',
  component: InlineEdit,
  parameters: {
    docs: {
      a11y: {
        config: {
          rules: [{ id: 'label', enabled: false }],
        },
      },
      page: () => (
        <>
          <Title />
          <Description>Form input component</Description>
          <Props of={InlineEdit} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => <InlineEdit {...args} />;

export const General = () => (
  <Box>
    <InlineEdit placeholder="Enter first name" mr={3} />
    <InlineEdit variant="h5" placeholder="Enter first name" mr={3} />
    <InlineEdit
      leftIcon={<Icons.AddUser />}
      variant="h5"
      placeholder="Enter first name"
      mr={3}
    />
    <InlineEdit
      leftIcon={<Icons.AddUser />}
      variant="h5"
      placeholder="Enter first name"
      disabled
      mr={3}
    />
    <InlineEdit
      rightIcon={<Icons.Close />}
      variant="h6"
      placeholder="Enter first name"
      mr={3}
    />
    <InlineEdit
      leftIcon={<Icons.AddUser />}
      variant="h5"
      placeholder="Enter first name"
      disabled
      error={'An error'}
    />
  </Box>
);
