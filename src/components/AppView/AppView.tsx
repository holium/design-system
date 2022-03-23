import * as React from 'react';
import { useState } from 'react';
// import { ViewPort } from 'react-spaces';
import useWindowDimensions from '../useWindowDimensions';
import { AppBody } from './AppView.styles';

export type AppViewProps = {
  index?: number;
};

export const AppView = (props: AppViewProps) => {
  const { height } = useWindowDimensions();

  return (
    // <ViewPort style={{ position: 'relative', height: '100%', zIndex: 2 }}>
    <AppBody></AppBody>
    // </ViewPort>
  );
};

AppView.defaultProps = {};
