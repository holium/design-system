import React, { FC } from 'react';
import { Icons, Flex } from '../../..';
import { AppDockStyle, DockDivider } from './AppDock.styles';
import { TrayButtonStyle } from '../TrayButton';

export type AppType = {
  name: string;
  icon?: any;
  color?: string;
  onClick?: (...args: any) => any;
};

type AppDockProps = {
  selectedApp: string;
  apps: AppType[];
};

export const AppDock: FC<AppDockProps> = (props: AppDockProps) => {
  const { selectedApp, apps } = props;
  return (
    <AppDockStyle>
      <TrayButtonStyle
        circular
        noRestingBg
        paddingLeft="4px"
        paddingRight="4px"
      >
        <Icons.Apps2 />
      </TrayButtonStyle>
      <DockDivider />
      <Flex style={{ gap: '6px' }} alignItems="center">
        {apps.map((app: AppType) => (
          <DockButton
            key={app.name}
            app={app}
            isSelected={selectedApp === app.name}
          />
        ))}
      </Flex>
    </AppDockStyle>
  );
};

AppDock.defaultProps = {
  apps: [],
};

type DockButtonProps = {
  app: AppType;
  isSelected?: boolean;
};

export const DockButton: FC<DockButtonProps> = (props: DockButtonProps) => {
  const { app, isSelected } = props;
  return (
    <TrayButtonStyle
      circular
      // circular={isSelected}
      style={{ gap: '4px' }}
      transparency={isSelected ? 0.14 : 0.06}
      noRestingBg={!isSelected}
      paddingLeft="4px"
      paddingRight={isSelected ? '6px' : '4px'}
      baseColor={isSelected ? app.color : null}
    >
      {app.icon} {isSelected && app.name}
    </TrayButtonStyle>
  );
};

DockButton.defaultProps = {
  isSelected: false,
};
