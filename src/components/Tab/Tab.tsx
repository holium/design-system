import * as React from 'react';

import { TabStyle } from './Tab.styles';

export type TabProps = {
  children: any;
  active?: boolean;
  isDisabled?: boolean;
  onClick: (label: string) => any;
  label?: string;
};

export const Tab: any = (props: TabProps) => {
  const { children, active, onClick, label, isDisabled } = props;
  return (
    <TabStyle
      isDisabled={isDisabled}
      isActive={active}
      onClick={(evt: any) => {
        evt.stopPropagation();
        onClick(label);
      }}
    >
      {children}
    </TabStyle>
  );
};
