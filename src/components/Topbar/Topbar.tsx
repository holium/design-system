import * as React from 'react';
import { Box, Sigil, DAOSwitcher, DAOType, NavButton } from '../';
import { TopbarStyle } from './Topbar.styles';

type AppType = {
  name: string;
  icon?: any;
};

export type TopbarProps = {
  app: AppType;
  apps?: [AppType];
  selectedDAO?: DAOType;
  DAOs?: DAOType[];
  ship: {
    patp: string;
    color?: string;
  };
  children?: React.ReactChildren;
  onDAOSelect?: (dao: DAOType) => any;
  onSettingsClick?: () => any;
};

export const Topbar: any = (props: Partial<TopbarProps>) => {
  const {
    app,
    apps,
    selectedDAO,
    DAOs,
    children,
    ship,
    onSettingsClick,
    onDAOSelect,
  } = props;
  return (
    <TopbarStyle>
      <Box justifyContent="flex-start" alignItems="center" flex={2}>
        {app && (
          <NavButton
            id={app.name}
            style={{ marginRight: 8 }}
            name={app.name}
            dropdownWidth={230}
            onClick={() => console.log('colony menu should appear')}
          />
        )}
        {DAOs && (
          <DAOSwitcher
            selectedDAO={selectedDAO}
            DAOs={DAOs}
            onSettingsClick={onSettingsClick}
            onRowClick={onDAOSelect}
          />
        )}
        {apps}
      </Box>
      <Box>{children}</Box>
      <Box justifyContent="flex-end" ml={12}>
        <Sigil
          clickable
          patp={ship.patp}
          size={30}
          color={ship.color ? [ship.color, 'white'] : ['black', 'white']}
        />
      </Box>
    </TopbarStyle>
  );
};
