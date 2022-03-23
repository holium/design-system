import React, { FC } from 'react';
import { Flex, Box, Icons, IconButton } from '..';
import { AppNameDiv, AppText } from './AppName.styles';

type AppNameProps = {
  style?: any;
  appIcon: any;
  appName: string;
  appColor?: string;
  onSettingsClick: () => any;
};

export const AppName: FC<any> = (props: AppNameProps) => {
  const { appIcon, appName, appColor, onSettingsClick, style } = props;
  return (
    <Flex
      style={{ padding: 4, ...style }}
      flexDirection={'row'}
      alignItems="center"
      justifyContent="space-between"
    >
      <AppNameDiv appColor={appColor}>
        <Box>{appIcon}</Box>
        <AppText>{appName}</AppText>
      </AppNameDiv>
      <IconButton size={24} onClick={onSettingsClick}>
        <Icons.More />
      </IconButton>
    </Flex>
  );
};
