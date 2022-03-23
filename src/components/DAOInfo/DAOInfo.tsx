import React, { FC } from 'react';
import { Flex, Box, TlonIcon, Icons, IconButton } from '..';
import { DAOType } from '../DAOSwitcher';
import { DAOName, DAOMetaText } from './DAOInfo.styles';
import { DAOCrest } from '../DAOSwitcher/DAOSwitcher.styles';

type DAOInfoProps = {
  orientation: 'horizontal' | 'vertical';
  dao: DAOType;
  onSettingsClick?: (...args: any) => any;
};

export const DAOInfo: FC<any> = (props: DAOInfoProps) => {
  const { orientation, dao, onSettingsClick } = props;
  const isLarge = orientation === 'vertical';
  // const { crest, members, memberIdentifier, token, crestShape, name } = dao;
  return (
    <Flex
      style={{ padding: 4 }}
      flexDirection={'column'}
      alignItems={orientation === 'vertical' ? 'center' : 'flex-start'}
    >
      <Flex
        style={{ width: '100%' }}
        flexDirection={orientation === 'vertical' ? 'column' : 'row'}
        alignItems={'center'}
        justifyContent="space-between"
      >
        <Box
          flexDirection={orientation === 'vertical' ? 'column' : 'row'}
          alignItems="center"
        >
          <Box style={{ marginBottom: isLarge ? 4 : 0 }} alignItems="center">
            <DAOCrest large={isLarge} src={dao.crest} shape={dao.crestShape} />
          </Box>
          <DAOName
            large={isLarge}
            marginLeft={orientation === 'vertical' ? '0px' : '8px'}
          >
            {dao.name}
          </DAOName>
        </Box>
        {onSettingsClick && (
          <IconButton size={24} onClick={onSettingsClick}>
            <Icons.More />
          </IconButton>
        )}
      </Flex>
      <Flex
        style={{
          marginTop: isLarge ? 8 : 0,
          marginLeft: orientation === 'vertical' ? 0 : 26,
          marginBottom: orientation === 'vertical' ? 0 : 2,
        }}
      >
        <Box>
          <DAOMetaText>
            <TlonIcon size={16} icon="Users" />
            {dao.members} {dao.memberIdentifier}
          </DAOMetaText>
        </Box>
        <Box>
          {dao.token && (
            <DAOMetaText>
              <Icons.Token />
              {`$${dao.token}`}
            </DAOMetaText>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
