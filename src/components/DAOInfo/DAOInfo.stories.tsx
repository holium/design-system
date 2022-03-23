import React from 'react';

import { DAOInfo } from './DAOInfo';

const DAOSample = {
  crest: 'https://lomder-librun.sfo3.digitaloceanspaces.com/dev/Holium.png',
  crestShape: 'round',
  name: 'Holium',
  slug: 'holium',
  members: 39,
  memberIdentifier: 'holons',
  token: 'HOL',
};

export default {
  title: 'Components/DAOInfo',
  component: DAOInfo,
  parameters: {},
};

const Template = (args?: any) => (
  <div>
    <DAOInfo {...args} />
  </div>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
  settings: true,
  dao: DAOSample,
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  dao: DAOSample,
};
