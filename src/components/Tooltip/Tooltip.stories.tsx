import React from "react";
import styled from "styled-components";
import { compose, space, color, layout } from "styled-system";
import { rgba } from "polished";

// import { Description, Props, Title } from '@storybook/addon-docs/blocks';
import { Tooltip } from "./Tooltip";
import { Story } from "@storybook/react";
import { Card } from "../Card";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
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

const Template: Story = (args: any) => (
  <Tooltip {...args}>
    <div style={{ height: 25, width: 25, background: "red" }}></div>
  </Tooltip>
);

export const Default = Template.bind({});
Default.args = {
  content: <Card>This is a tooltip</Card>,
  placement: "bottom-right",
  delay: 0.5,
};
