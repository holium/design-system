import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "#ececec" },
  },
} as Meta;

const Template: Story = (args) => <Card>{args}</Card>;

export const Primary = Template.bind({});
Primary.args = <div style={{ width: 480, height: 208 }}>Card bruh</div>;

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
