import * as React from 'react';
import { PaneHeaderStyle, PaneHeaderText } from './PaneHeader.styles';

export type PaneHeaderProps = {
  height?: number;
  noBorder?: boolean;
  children?: React.ReactChildren;
};

export const PaneHeader: any = (props: Partial<PaneHeaderProps>) => {
  const { height, noBorder, children } = props;
  return (
    <PaneHeaderStyle paneHeight={height || 48} padding={12} noBorder={noBorder}>
      {children}
    </PaneHeaderStyle>
  );
};

PaneHeader.defaultProps = { noBorder: false };

export { PaneHeaderText };
