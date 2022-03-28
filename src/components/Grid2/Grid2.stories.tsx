import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import Grid from './';
import { Box, Text } from '..';

export default {
  title: 'Components/Grid2',
  component: Grid,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Grid creates a Grid container that exposes CSS Grid properties
          </Description>
          <Props of={Grid} />
        </>
      ),
    },
  },
};

export const Basic = (args: any) => (
  <Grid.Box debug={false}>
    <Grid.Column>
      <Grid.Row>Header</Grid.Row>
      <Grid.Row>Content</Grid.Row>
      <Grid.Row>Footer</Grid.Row>
    </Grid.Column>
  </Grid.Box>
);

// export const Breakpoints = (args: any) => (
//   <Grid.Provider
//     debug
//     padding="20px"
//     breakpoints={{ sm: '-500', md: '501-750', lg: '+750' }}
//   >
//     <Grid.Bounds direction="vertical">
//       <Grid.Box sm={{ padding: '40px' }}>
//         This box gains padding on small devices
//       </Grid.Box>
//       <Grid.Box sm={{ height: '200px' }}>
//         This box gains height on small devices
//       </Grid.Box>
//       <Grid.Bounds direction="vertical" lg={{ direction: 'horizontal' }}>
//         <Grid.Box>These boxes render side by side on large screens</Grid.Box>
//         <Grid.Box>These boxes render side by side on large screens</Grid.Box>
//       </Grid.Bounds>
//     </Grid.Bounds>
//   </Grid.Provider>
// );
