import React from "react";

import { Description, Props, Title } from "@storybook/addon-docs/blocks";

import { HTMLSelect } from "./Select";
import { Box, Icons } from "../..";

export default {
  title: "Components/Inputs/HTMLSelect",
  component: HTMLSelect,
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "label", enabled: false }],
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            When using this component, the menu options that you want `Select`
            component to display should be nested in using `option` tag. Specify
            `defaultValue` prop if you want `Select` to display an option other
            than the first one. If not specified, `Select` will display the
            first option by default.
          </Description>
          <Props of={HTMLSelect} />
        </>
      ),
    },
  },
};

export const Basic = () => (
  <Box>
    <HTMLSelect defaultValue="Select a city" name="city" mb={4}>
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
    <HTMLSelect
      defaultValue="Select a city"
      leftIcon={<Icons.Place color="text.primary" aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
    <HTMLSelect
      defaultValue="Select a city"
      rightIcon={<Icons.Info color="text.primary" aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
    <HTMLSelect
      defaultValue="Select a city"
      leftIcon={<Icons.Place color="text.primary" aria-hidden />}
      rightIcon={<Icons.Info color="text.primary" aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
  </Box>
);

export const Disabled = () => (
  <Box>
    <HTMLSelect disabled defaultValue="Select a city" mb={4}>
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
    <HTMLSelect
      disabled
      defaultValue="Select a city"
      leftIcon={<Icons.Place aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
  </Box>
);

export const Error = () => (
  <Box>
    <HTMLSelect error={true} defaultValue="Select a city" mb={4}>
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
    <HTMLSelect
      error
      defaultValue="Select a city"
      leftIcon={<Icons.Place color="text.primary" aria-hidden />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
    <HTMLSelect
      error
      defaultValue="Select a city"
      rightIcon={<Icons.Error aria-hidden color="ui.error" />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
    <HTMLSelect
      error
      defaultValue="Select a city"
      leftIcon={<Icons.Place color="text.primary" aria-hidden />}
      rightIcon={<Icons.Error aria-hidden color="ui.error" />}
      mb={4}
    >
      <option>Select a city</option>
      <option>Toronto</option>
      <option>Istanbul</option>
      <option>Amsterdam</option>
    </HTMLSelect>
  </Box>
);
