import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import Search from "./Search";

export default {
  title: "Components/Search",
  component: Search,
} as Meta;

// @ts-ignore
const Template: Story = (args: { community: any }) => <Search {...args} />;

export const Expanded = Template.bind({});
Expanded.args = {
  expanded: true,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  expanded: false,
};
