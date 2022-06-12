import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import {
  compose,
  space,
  layout,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  typography,
} from 'styled-system';
import type { ThemeType } from '../../../theme';
import { selectableFocus } from '../../shared-styles';
import { IconButton } from '../../Button';
import { Menu } from '../../Navigation';
import { Icons } from '../../Icons';

export type SubRouteStyleProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    color: string;
    isSelected?: boolean;
    theme: ThemeType;
  };

export const SubRouteStyle = styled(styled.button`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 8px;
  height: 24px;
  background: ${(props: SubRouteStyleProps) =>
    props.isSelected
      ? darken(0.05, props.theme.colors.ui.tertiary)
      : 'transparent'};
  transition: ${(props: SubRouteStyleProps) => props.theme.transition};
  border-radius: 4px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${(props: SubRouteStyleProps) =>
    props.isSelected
      ? props.theme.colors.text.tertiary
      : props.theme.colors.text.secondary};
  margin-left: 8px;
  cursor: pointer;
  &:hover {
    transition: ${(props: SubRouteStyleProps) => props.theme.transition};
    background: ${(props: SubRouteStyleProps) =>
      !props.isSelected && props.theme.colors.ui.tertiary};
  }
  ${selectableFocus}
`)<SubRouteStyleProps>({}, compose(space, layout, typography));

export type SubRouteNavProps = {
  name: string;
  path: string;
  selected: boolean;
  color: string;
  onClick?: any;
};

export const SubRouteNav: FC<SubRouteNavProps> = (props: SubRouteNavProps) => {
  const { color, name, selected, onClick } = props;
  return (
    // @ts-ignore
    <SubRouteStyle
      tabIndex={0}
      isSelected={selected}
      color={color}
      onClick={onClick}
    >
      {name}
    </SubRouteStyle>
  );
};

// Handles mobile responsive navigation
export type SubRouteWrapperProps = {
  isMobile: boolean;
  children?: any;
};

export type SubRouteWrapperStyleProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  SubRouteWrapperProps & {
    theme: ThemeType;
  };

export const SubRouteWrapperStyle = styled(
  styled.div`
    ${(props: SubRouteWrapperStyleProps) =>
      props.isMobile &&
      css`
        flex-direction: column;
        position: absolute;
        right: 12px;
        top: 10px;

        ${SubRouteStyle} {
          height: 36px;
          margin-right: 8px;
          font-size: 15px;
        }
      `}
  `
)<SubRouteWrapperStyleProps>({}, compose(space, layout, typography));

export const SubRouteWrapper: FC<SubRouteWrapperProps> = (
  props: SubRouteWrapperProps
) => {
  const { isMobile, children } = props;
  const [isNavOpen, setIsNavOpen] = useState(false);

  if (isMobile) {
    return (
      <SubRouteWrapperStyle isMobile={isMobile}>
        <IconButton
          style={{ outline: 'none' }}
          size={28}
          onClick={() => setIsNavOpen(true)}
        >
          <Icons.Apps />
        </IconButton>
        <Menu
          isOpen={isNavOpen}
          style={{
            zIndex: 6,
            paddingTop: 8,
            paddingBottom: 8,
            right: 0,
            gap: 6,
            width: 150,
          }}
          onClose={() => {
            setIsNavOpen(false);
          }}
        >
          {children}
        </Menu>
      </SubRouteWrapperStyle>
    );
  } else {
    return children;
  }
};
