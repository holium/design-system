import React, { FC } from 'react';
import styled from 'styled-components';
import { rgba } from 'polished';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  LayoutProps,
  BorderProps,
  SpaceProps,
} from 'styled-system';
import { ThemeType } from '..';

type StyleProps = BorderProps &
  LayoutProps &
  SpaceProps & {
    theme: ThemeType;
    appColor?: string;
    selected?: boolean;
  };

const Container = styled(
  styled.div`
    display: inline-flex;
    flex-direction: row;
    gap: 8px;
    height: 33px;
    width: calc(100% - 16px);
    padding: 4px 8px;
    align-items: center;
    cursor: pointer;
    font-weight: ${(props: StyleProps) => (props.selected ? 500 : 400)};
    font-size: ${(props: StyleProps) => props.theme.fontSizes[2]};
    color: ${(props: StyleProps) =>
      props.selected ? props.appColor : props.theme.colors.text.primary};
    border-radius: ${(props: StyleProps) =>
      props.theme.containers.outerBorderRadius}px;
    background: ${(props: StyleProps) =>
      props.selected ? rgba(props.appColor, 0.1) : 'transparent'};
    &:hover {
      transition: ${(props) => props.theme.transition};
      background: ${(props: StyleProps) =>
        props.selected
          ? rgba(props.appColor, 0.15)
          : props.theme.colors.highlights.bgHighlight};
    }
  `
)<StyleProps>(compose(space, layout, flexbox, border, position, color));

type AppNavProps = {
  style?: any;
  selected: boolean;
  appColor?: string;
  navIcon: any;
  navName: string;
  onClick: (...args: any) => any;
};

export const AppNavRow: FC<any> = (props: AppNavProps) => {
  const { selected, navIcon, navName, appColor, style, onClick } = props;
  return (
    <Container
      style={style}
      selected={selected}
      appColor={appColor}
      onClick={onClick}
    >
      {navIcon} {navName}
    </Container>
  );
};
