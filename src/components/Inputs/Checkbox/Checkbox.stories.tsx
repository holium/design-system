import React from "react";

import { Description, Props, Title } from "@storybook/addon-docs/blocks";

import { Checkbox } from "./Checkbox";

export default {
  title: "Components/Inputs/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            Form checkbox input component with a label wrapper
          </Description>
          <Props of={Checkbox} />
        </>
      ),
    },
  },
};

export const Default = (args: any) => <Checkbox {...args} label="label" />;

export const Disabled = () => <Checkbox mb={2} disabled label="Option" />;

export const Error = () => <Checkbox mb={2} error label="Option" />;
