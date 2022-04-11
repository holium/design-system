import React, { FC } from 'react';
import { SpaceProps, WidthProps } from 'styled-system';
import { Flex } from '..';
import { KPILabel, KPIValue, KPIIcon } from './KPI.styles';

type KPIProps = {
  inline?: boolean;
  label?: string;
  value: string;
  icon?: any;
} & SpaceProps &
  WidthProps;

export const KPI: FC<KPIProps> = (props: KPIProps) => {
  const { inline, label, value, icon } = props;
  return (
    <Flex
      {...props}
      flexDirection={inline ? 'row' : 'column'}
      alignItems={inline ? 'center' : 'flex-start'}
      gap={4}
      justifyContent="space-between"
    >
      {label && (
        <KPILabel mb={inline ? 0 : '4px'} mr={inline ? '4px' : 0}>
          {label}
        </KPILabel>
      )}
      <Flex margin flexDirection="row" alignItems="center">
        {icon && <KPIIcon>{icon}</KPIIcon>}
        <KPIValue>{value}</KPIValue>
      </Flex>
    </Flex>
  );
};

export default { KPI };