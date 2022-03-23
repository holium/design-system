import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { compose, space, layout, color, typography } from 'styled-system';
import { Flex, Text, SVG } from '..';

type BreadcrumbType = {
  name: string;
  uri?: string;
  icon?: any;
};

type AppNameProps = {
  style?: any;
  appName: string;
  appColor?: string;
  breadcrumbs?: BreadcrumbType[];
  onCrumbClick?: (uri: string) => any;
};

// TODO add hover effect if crumb has uri
export const AppSubHeader: FC<AppNameProps> = (props: AppNameProps) => {
  const { appName, breadcrumbs, style, onCrumbClick } = props;
  const crumbs =
    breadcrumbs.length &&
    breadcrumbs.length > 1 &&
    breadcrumbs.slice(0, breadcrumbs.length - 1);
  const pageTitle = breadcrumbs && breadcrumbs[breadcrumbs.length - 1];

  return (
    <Flex style={{ ...style }} flexDirection="column" alignItems="flex-start">
      <Flex flexDirection="row" alignItems="center">
        <Text
          display="flex"
          flexDirection="row"
          alignItems="center"
          flexGrow="1"
          variant="body"
          fontSize="1"
          fontWeight="500"
          color="text.disabled"
        >
          {appName}
        </Text>
        {crumbs &&
          crumbs.map((crumb) => (
            <>
              <Text
                style={{ marginLeft: 2, marginRight: 2 }}
                display="flex"
                flexDirection="row"
                alignItems="center"
                variant="body"
                fontSize="1"
                fontWeight="500"
                color="text.disabled"
              >
                {'  / '}
              </Text>
              <Crumb
                icon={crumb.icon}
                name={crumb.name}
                uri={crumb.uri}
                onClick={onCrumbClick}
              />
            </>
          ))}
      </Flex>
      <Crumb icon={pageTitle.icon} name={pageTitle.name} title />
    </Flex>
  );
};

export const CrumbContainer = styled(styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${(props: any) =>
    props.isLink &&
    css`
      &:hover {
        cursor: pointer;
        text-decoration: underline;
        text-decoration-color: ${(props) => props.theme.colors.text.disabled};
      }
    `}
`)<{ isLink?: any; theme?: any }>(
  {},
  compose(space, color, layout, typography)
);

const Crumb = (
  props: BreadcrumbType & { title?: boolean; onClick?: (uri: string) => any }
) => {
  return (
    <CrumbContainer
      isLink={props.uri}
      style={{ gap: props.title ? 4 : 2 }}
      onClick={() => props.onClick(props.uri)}
    >
      {props.icon && (
        <SVG
          // verticalAlign="middle"
          size={props.title ? '18px' : '14px'}
          colorVariant={props.title ? 'tertiary' : 'disabled'}
        >
          {props.icon}
        </SVG>
      )}
      <Text
        display="flex"
        flexDirection="row"
        alignItems="center"
        verticalAlign="middle"
        marginTop={props.title ? '4px' : '0px'}
        color={props.title ? 'text.tertiary' : 'text.disabled'}
        variant="body"
        fontWeight={props.title ? '700' : '500'}
        fontSize={props.title ? '2' : '1'}
      >
        {props.name}
      </Text>
    </CrumbContainer>
  );
};
