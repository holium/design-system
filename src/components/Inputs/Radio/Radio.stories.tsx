import React from "react";

import { Description, Props, Title } from "@storybook/addon-docs/blocks";

import { Radio } from "./Radio";

export default {
  title: "Components/Inputs/Radio",
  component: Radio,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Form Radio input component with a label wrapper
          </Description>
          <Props of={Radio} />
        </>
      ),
    },
  },
};

export const Basic = () => <Radio label="Radio" value="Radio" />;

export const Disabled = () => <Radio label="Radio" value="Radio" disabled />;

export const Error = () => <Radio label="Radio" value="Radio" error />;
