import styled, { css } from 'styled-components';
import { compose, space, color, layout, typography } from 'styled-system';
import { selectableFocus } from '../shared-styles';

interface IProps {
  highlightColor?: string;
  fontSize?: string;
  theme?: any;
}

export const TextButton = styled(styled.button`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-style: normal;
  font-weight: 500;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  height: 26px;
  border-radius: 3px;
  text-decoration: none;
  cursor: pointer;
  padding: 0px 7px;
  border: none;
  background-color: transparent;
  /* padding-top: 3px; */
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  ${selectableFocus}

  ${(props: IProps) =>
    css`
      font-size: ${props.fontSize ? `${props.fontSize}px` : '14px'};
      color: ${props.highlightColor || props.theme.colors.brand.primary};
      transition: .1s;
      :hover {
        transition: .1s
        background-color: ${
          props.highlightColor
            ? `${props.highlightColor}25`
            : `${props.theme.colors.brand.primary}25`
        };
      }
      :active {
        background-color: ${
          props.highlightColor
            ? `${props.highlightColor}30`
            : `${props.theme.colors.brand.primary}30`
        };
      }
    `};
`)({}, compose(space, color, layout, typography));

TextButton.displayName = 'TextButton';
