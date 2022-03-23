import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import { Text } from './Text';
import { Box, Flex } from '../../';

export default {
  title: 'Components/Text',
  component: Text,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Primitive typographic component, defaults to `p`. Use the `as` prop
            to set the correct HTML element independent from styling.
          </Description>
          <Props of={Text} />
        </>
      ),
    },
  },
};

const Variant = (props: any) => (
  <Text
    variant="hint"
    fontSize={1}
    color="text.secondary"
    width={3}
    my={0}
    {...props}
  />
);

export const Basic = (args: any) => <Text {...args} />;
Basic.args = { children: 'Label' };

export const BodyVariants = () => (
  <Flex flexDirection="column">
    <Flex alignItems="baseline" mb={3}>
      <Variant>body</Variant>
      <Text variant="body">You know nothing, Jon Snow</Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>caption</Variant>
      <Text variant="caption">You know nothing, Jon Snow</Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>hint</Variant>
      <Text variant="hint">You know nothing, Jon Snow</Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>label</Variant>
      <Text variant="label">You know nothing, Jon Snow</Text>
    </Flex>
  </Flex>
);

export const HeaderVariants = () => (
  <Flex flexDirection="column">
    <Flex alignItems="baseline" mb={3}>
      <Variant>H1</Variant>
      <Text fontByName="Oxanium" variant="h1">
        Header 1
      </Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>H2</Variant>
      <Text variant="h2">Header 2</Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>H3</Variant>
      <Text variant="h3">Header 3</Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>H4</Variant>
      <Text variant="h4">Header 4</Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>H5</Variant>
      <Text variant="h5">Header 5</Text>
    </Flex>
    <Flex alignItems="baseline" mb={3}>
      <Variant>H6</Variant>
      <Text variant="h6">Header 6</Text>
    </Flex>
  </Flex>
);
