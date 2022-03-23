import React, { FC } from 'react';
import { AppName } from '..';
import { AppNavContainer } from './AppNav.styles';
import { AppNavRow } from './AppNavRow';

export type AppNavSubRoute = {
  icon: any;
  name: string;
  uri: string;
};

export type AppNavProps = {
  style?: any;
  appName?: string;
  appIcon?: any;
  appColor?: string;
  selectedRouteUri: string;
  subRoutes: AppNavSubRoute[];
  onRouteClick: (route: AppNavSubRoute) => any;
  onSettingsClick: (...args: any) => any;
};

export const AppNav: FC<AppNavProps> = (props: AppNavProps) => {
  const {
    selectedRouteUri,
    subRoutes,
    appName,
    appIcon,
    appColor,
    style,
    onSettingsClick,
    onRouteClick,
  } = props;
  return (
    <AppNavContainer style={style}>
      <AppName
        style={{ marginBottom: 8 }}
        appColor={appColor}
        appName={appName}
        appIcon={appIcon}
        onSettingsClick={onSettingsClick}
      />
      {subRoutes.map((route: AppNavSubRoute) => (
        <AppNavRow
          key={route.uri}
          appColor={appColor}
          navIcon={route.icon}
          selected={selectedRouteUri && selectedRouteUri.includes(route.uri)}
          navName={route.name}
          onClick={() => onRouteClick(route)}
        />
      ))}
    </AppNavContainer>
  );
};
