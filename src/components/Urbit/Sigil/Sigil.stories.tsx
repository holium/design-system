import React from 'react';
import { Flex } from '../..';
import { Sigil } from './Sigil';

export default {
  title: 'Components/Urbit/Sigil',
  component: Sigil,
  parameters: {},
};

export const Simple = () => (
  <Flex style={{ gap: 8 }} alignItems="center">
    <Sigil
      clickable
      size={30}
      patp="~lomder-librun"
      color={['#ff810a', 'white']}
    />
  </Flex>
);

export const Zod = () => (
  <Flex style={{ gap: 8 }} alignItems="center">
    <Sigil clickable size={24} patp="~zod" color={['black', 'white']} />
  </Flex>
);

export const Full = () => (
  <Flex style={{ gap: 8 }} alignItems="center">
    <Sigil
      clickable
      size={120}
      patp="~lomder-librun"
      color={['#ff810a', 'white']}
      simple={false}
    />
  </Flex>
);
