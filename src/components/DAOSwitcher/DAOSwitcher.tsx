import React, { FC } from 'react';
import { NavButton, Flex, Box, DAOInfo } from '..';
import { MenuItem } from '../Navigation';
import { DAOCrest } from './DAOSwitcher.styles';
import { Divider } from '../shared-styles';

export type DAOType = {
  crest: string;
  crestShape: 'round' | 'square';
  members: number;
  memberIdentifier: string;
  token: string;
  name: string;
  slug: string;
};

export type DAOSwitcher = {
  selectedDAO?: DAOType;
  DAOs: DAOType[];
  onSettingsClick?: () => any;
  onRowClick?: (DAO: DAOType) => any;
};

export const DAOSwitcher: FC<DAOSwitcher> = (props: DAOSwitcher) => {
  const { selectedDAO, DAOs, onRowClick, onSettingsClick } = props;
  // TODO move menu show boolean to this file
  return (
    <NavButton
      id={selectedDAO.name}
      style={{ marginRight: 8 }}
      name={selectedDAO.name}
      icon={<DAOCrest shape={selectedDAO.crestShape} src={selectedDAO.crest} />}
      dropdownWidth={270}
      onClick={() => console.log('colony menu should appear')}
    >
      <DAOInfo
        orientation="horizontal"
        dao={selectedDAO}
        onSettingsClick={onSettingsClick}
      />
      <Divider style={{ marginTop: '2px', marginBottom: '2px' }} />
      <Flex flexDirection="column">
        {DAOs.filter((dao: DAOType) => dao.slug !== selectedDAO.slug).map(
          (dao: DAOType) => (
            <DAORow
              key={dao.slug}
              name={dao.name}
              crest={dao.crest}
              onClick={() => onRowClick(dao)}
            />
          )
        )}
      </Flex>
    </NavButton>
  );
};

const DAORow: FC<any> = (props: DAOType & { onClick: any }) => {
  const { crest, crestShape, name, onClick } = props;
  return (
    <MenuItem
      style={{ padding: 4 }}
      flexDirection="row"
      alignItems="center"
      onClick={onClick}
    >
      <Box alignItems="center">
        <DAOCrest src={crest} shape={crestShape} />
      </Box>
      <Box marginLeft={'8px'}>{name}</Box>
    </MenuItem>
  );
};
