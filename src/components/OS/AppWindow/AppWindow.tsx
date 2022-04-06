import React, { FC } from 'react';
import { Flex, Box, Sigil } from '../../..';
import {
  AppWindowStyle,
  AppWindowTitleBar,
  AppWindowTitleStyle,
} from './AppWindow.styles';
import { Context, ContextType } from '../Context';
import { SubRouteNav } from './SubRouteNav';

type SubRouteType = {
  icon?: any;
  name: string; // the display name
  nav: string; // the selected page string
  uri: string; // the full uri
};

type AppWindowProps = {
  style?: any;
  app: {
    icon: any;
    name: string;
    color: string;
    contextMenu?: React.ReactNode;
  };
  ship: {
    patp: string;
    avatar?: string;
    nickname?: string;
    color: string;
    contextMenu?: React.ReactNode;
  };
  loadingContext: boolean;
  isStandalone?: boolean;
  selectedContext: any;
  contexts?: any[];
  selectedRouteUri: string;
  subRoutes: SubRouteType[];
  onHomeClick?: () => any;
  onContextClick?: (context: ContextType) => any;
  onRouteClick: (route: SubRouteType) => any;
  children?: any;
};

export const AppWindow: FC<AppWindowProps> = (props: AppWindowProps) => {
  const {
    app,
    ship,
    selectedContext,
    contexts,
    subRoutes,
    style,
    selectedRouteUri,
    onHomeClick,
    onRouteClick,
    onContextClick,
    loadingContext,
    isStandalone,
    children,
  } = props;
  return (
    <AppWindowStyle isStandalone={isStandalone}>
      <Flex>
        <AppWindowTitleBar style={style}>
          <Box alignItems="center">
            <AppWindowTitleStyle
              clickable={typeof onHomeClick != 'undefined'}
              onClick={onHomeClick}
            >
              <Box mr={3} style={{ borderRadius: 4 }}>
                {app.icon}
              </Box>
              <Box>{app.name}</Box>
            </AppWindowTitleStyle>
            <Context
              loading={loadingContext}
              menuOrientation="bottom"
              style={{ marginRight: 8 }}
              selectedContext={selectedContext}
              onContextClick={onContextClick}
              customMenu={app.contextMenu}
              // @ts-ignore
              availableContexts={contexts}
            />

            {subRoutes.map((subroute: SubRouteType) => (
              <SubRouteNav
                key={subroute.uri}
                name={subroute.name}
                path={subroute.uri}
                color={app.color}
                selected={selectedRouteUri === subroute.nav}
                onClick={(evt: any) => {
                  evt.preventDefault();
                  evt.currentTarget.blur();
                  onRouteClick(subroute);
                }}
              />
            ))}
          </Box>
          <Box justifyContent="flex-end" ml={12}>
            <Sigil
              clickable
              avatar={ship.avatar}
              patp={ship.patp}
              size={24}
              contextMenu={ship.contextMenu}
              color={ship.color ? [ship.color, 'white'] : ['black', 'white']}
            />
          </Box>
        </AppWindowTitleBar>
      </Flex>
      {children}
    </AppWindowStyle>
  );
};

AppWindow.defaultProps = {
  isStandalone: false,
};
