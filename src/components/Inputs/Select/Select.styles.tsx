import styled, { css } from 'styled-components';
import { focusRing } from '../../shared-styles';

import {
  compose,
  space,
  color,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  ColorProps,
  BorderProps,
  typography,
  TypographyProps,
} from 'styled-system';

export type SelectProps = SpaceProps &
  BorderProps &
  FlexboxProps &
  ColorProps &
  LayoutProps &
  TypographyProps & {
    isPlaceholder?: boolean;
    isOpen?: boolean;
    theme: any;
    large?: boolean;
    small?: boolean;
    gray?: boolean;
  };

export const SelectWrapper = styled.div`
  width: 100%;
  /* display: block; */
  input {
    cursor: pointer;
    &:hover {
      user-select: none;
      cursor: pointer;
    }
  }
`;

export const SelectRow = styled(styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  min-width: 125px;
  align-items: center;
  cursor: pointer;
  border-radius: ${(props) => props.theme.input.borderRadius}px;
  width: ${(props: any) => (props.large ? '100%' : 'initial')};
  color: ${(props) => props.theme.colors.text.primary};
  &::placeholder {
    color: ${(props) => props.theme.colors.text.placeholder};
  }
  outline: none;

  ${(props: any) =>
    props.large
      ? css`
          padding: 5px 7px 5px 2px;
          background: transparent;
          border: 1px solid transparent;
          transition: ${(props: SelectProps) => props.theme.transition};
          &:hover {
            transition: ${(props: SelectProps) => props.theme.transition};
            background: ${(props: SelectProps) =>
              props.theme.colors.highlights.bgHighlight};
          }
          outline: transparent;
        `
      : css`
          font-size: ${(props: SelectProps) => props.theme.fontSizes[2]};
          padding: 4px 8px;
          background: ${(props: SelectProps) =>
            props.gray
              ? props.theme.colors.ui.input.background
              : props.theme.colors.ui.input.secondary};

          /* background: ${(props: SelectProps) =>
            props.theme.colors.bg.secondary}; */
          border: 1px solid
            ${(props: SelectProps) => props.theme.colors.ui.input.borderColor};
          transition: ${(props: SelectProps) => props.theme.transition};
          &:focus {
            ${focusRing}
          }
          ${!props.isOpen
            ? css`
                &:hover {
                  transition: ${(props: SelectProps) => props.theme.transition};
                  border-color: ${(props: SelectProps) =>
                    props.theme.colors.ui.input.borderHover};
                }
              `
            : css`
                transition: ${(props: SelectProps) => props.theme.transition};
                border-color: ${(props: SelectProps) =>
                  props.theme.colors.brand.primary};
              `}
        `};
  ${(props: Partial<SelectProps>) =>
    props.small &&
    css`
      padding: 2px 8px 2px 8px;
      min-width: 60px;
    `}
  ${(props: Partial<SelectProps>) =>
    props.gray &&
    css`
      background: ${(props: SelectProps) => props.theme.colors.bg.primary};
    `}
`)<SelectProps>({}, compose(space, color, typography));

export const SelectText = styled(styled.div`
  font-style: ${(props: any) => (props.large ? 'bold' : 'normal')};
  font-weight: 400;
  font-size: ${(props: any) => (props.large ? '16px' : '14px')};
  color: ${(props: SelectProps) =>
    props.isPlaceholder ? props.theme.colors.text.placeholder : 'inherit'};
`)<SelectProps>({}, compose(space, color, typography));

export const Dropdown = styled.div``;
