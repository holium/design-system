import React from 'react';
import { DAOSample } from '.';

import { DAOSwitcher } from './DAOSwitcher';

export default {
  title: 'Components/DAOSwitcher',
  component: DAOSwitcher,
  parameters: {},
};

const Template = (args?: any) => (
  <div>
    <DAOSwitcher {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...DAOSample,
};
