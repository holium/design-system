import React, { FC } from 'react';
import styled from 'styled-components';
import { IconButton, Icons, Text, Flex } from '../';

export const BreadcrumbNavStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 40px;
  align-items: center;
  justify-content: flex-start;
  height: 40px;
  min-height: 40px;
  margin: 4px 0;
  width: 100%;
`;

type CrumbType = {
  onClick?: () => void;
  label: string;
  icon?: any;
};

type BreadcrumbNavProps = {
  crumbs: CrumbType[];
  onBack?: () => void;
};

export const BreadcrumbNav: FC<BreadcrumbNavProps> = (
  props: Partial<BreadcrumbNavProps>
) => {
  const { crumbs, onBack } = props;
  return (
    <BreadcrumbNavStyle>
      <IconButton tabIndex={-1} mr={3} onClick={() => onBack()}>
        <Icons.ArrowLeft />
      </IconButton>
      {crumbs.map((crumb: CrumbType, index: number) => {
        let divider: any = [];
        let isLast = index === crumbs.length - 1;
        if (!isLast) {
          divider = (
            <Text style={{ opacity: 0.6 }} variant="body" mr={2}>
              /
            </Text>
          );
        }
        return (
          <Flex
            key={`${crumb.label}-${index}`}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Text
              style={{
                flexGrow: 1,
                cursor: 'pointer',
                opacity: isLast ? 1 : 0.7,
              }}
              variant="body"
              mr={2}
              onClick={() => crumb.onClick()}
            >
              {crumb.label}
            </Text>
            {divider}
          </Flex>
        );
      })}
    </BreadcrumbNavStyle>
  );
};
