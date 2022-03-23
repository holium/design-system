import * as React from 'react';

import { TabStyle } from './Tab.styles';

export type TabProps = {
  children: any;
  active?: boolean;
  onClick: (label: string) => any;
  label?: string;
};

export const Tab: any = (props: TabProps) => {
  const { children, active, onClick, label } = props;
  return (
    <TabStyle isActive={active} onClick={() => onClick(label)}>
      {children}
    </TabStyle>
  );
};
