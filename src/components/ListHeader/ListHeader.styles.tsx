import React from 'react';
import styled, { css } from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  SpaceProps,
  BorderProps,
  TypographyProps,
} from 'styled-system';
import { rgba } from 'polished';
import { Button } from '..';
import type { ThemeType } from '../../theme';

export type ListHeaderStyleProps = BorderProps &
  SpaceProps &
  TypographyProps & {
    paneHeight?: number;
    centerVertical?: boolean;
    padding?: number;
    noBorder?: boolean;
    theme: ThemeType;
  };

export type OptionProps = {
  selected?: boolean;
  disabled?: boolean;
  theme: ThemeType;
};

// type HeaderButtonProps = { onClick: any; theme: any };

const ListHeaderStyle = styled(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`)<ListHeaderStyleProps>({});

const HeaderButton = styled((props) => <Button {...props} />)`
  padding: 4px 8px;
  ${(props: ListHeaderStyleProps) => css`
    color: ${props.theme.colors.brand.secondary};
    background: ${props.theme.colors.bg.secondary};
    font-family: ${props.theme.fontByName['Inter']};
    font-weight: 500;
    font-size: ${props.theme.fontSizes[2]};
    border-radius: ${props.theme.containers.innerBorderRadius}px;
  `};
  /* letter-spacing: 0.03em; */
  /* text-rendering: optimizeLegibility; */
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  background-color: ${(props) => rgba(props.theme.colors.brand.secondary, 0.1)};
  div {
    padding: 0;
  }
  :hover,
  :active,
  :focus {
    border-color: ${(props) => props.theme.colors.brand.secondary};
  }
`;

const OptionButton = styled(styled.button`
  padding: 4px 8px;
  border: 1px solid ${(props) => props.theme.colors.ui.input.borderColor};
  color: ${(props) => rgba(props.theme.colors.text.primary, 0.8)};
  background: ${(props) => props.theme.colors.bg.secondary};
  box-sizing: border-box;
  border-radius: 50px;
  cursor: pointer;
  outline: none;
  min-width: 54px;
  font-family: ${(props) => props.theme.fontByName['Inter']};
  font-weight: 600;
  font-size: 0.75em;
  letter-spacing: 0.03em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  :active,
  :focus {
    border: 1px solid ${(props) => rgba(props.theme.colors.text.primary, 0.5)};
    color: ${(props) => props.theme.colors.text.primary};
  }
  ${(p: OptionProps) =>
    p.selected
      ? css`
          border: 1px solid
            ${(props) => rgba(props.theme.colors.text.primary, 0.5)};
        `
      : css`
          :hover {
            border: 1px solid
              ${(props) => props.theme.colors.ui.input.borderHover};
            color: ${(props) => props.theme.colors.text.primary};
          }
        `}
  ${(p) =>
    p.disabled &&
    css`
      color: ${(props) => rgba(props.theme.colors.text.primary, 0.3)};
      /* background-color: ${(props) => props.theme.colors.ui.disabled}; */
      border: 1px solid
        ${(props) => rgba(props.theme.colors.text.primary, 0.06)};
      font-weight: 600;
      pointer-events: none;
    `}
`)<OptionProps>(compose(space, color, layout, flexbox, border, position));

export default { HeaderButton, ListHeaderStyle, OptionButton };
