import React, { FC } from 'react';
import styled from 'styled-components';
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
import { ThemeType } from '../../../theme';
import { selectableFocus } from '../../shared-styles';

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
