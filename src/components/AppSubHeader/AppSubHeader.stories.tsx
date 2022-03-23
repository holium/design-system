import React from 'react';
import { Flex, Search, Icons, AppButton, NavButton, DAOSample } from '../..';
import { AppSubHeader } from './AppSubHeader';

export default {
  title: 'Components/AppSubHeader',
  component: AppSubHeader,
  parameters: {},
};

const Template = (args?: any) => (
  <div style={{ width: 300 }}>
    <AppSubHeader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  appName: 'Voting',
  breadcrumbs: [
    {
      icon: <Icons.SurveyLine />,
      name: 'Proposals',
    },
  ],
};

export const Breadcrumbs = Template.bind({});
Breadcrumbs.args = {
  appName: 'Voting',
  breadcrumbs: [
    {
      icon: <Icons.SurveyLine />,
      uri: '',
      name: 'Proposals',
    },
    { name: 'Create New' },
  ],
};
