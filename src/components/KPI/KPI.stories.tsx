import React from 'react';
import { TlonIcon } from '../';

import { KPI } from './KPI';

export default {
  title: 'Components/KPI',
  component: KPI,
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

export const Default = (args?: any) => (
  <KPI label="Participants" value="201/255 (79%)" />
);

export const WithIcon = (args?: any) => (
  <KPI
    label="Participants"
    value="201/255 (79%)"
    icon={<TlonIcon icon="Users" />}
  />
);

export const Inline = (args?: any) => (
  <div style={{ width: 250 }}>
    <KPI
      inline
      label="Participants"
      value="201/255 (79%)"
      icon={<TlonIcon icon="Users" />}
    />
  </div>
);

export const NoLabel = (args?: any) => (
  <KPI value="201/255 (79%)" icon={<TlonIcon icon="Users" />} />
);
