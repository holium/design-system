import styled, { css } from 'styled-components';
import {
  compose,
  space,
  layout,
  size,
  color,
  SizeProps,
  typography,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
} from 'styled-system';
import { rgba } from 'polished';
import { ThemeType } from '../../theme';
import { selectableFocus } from '../shared-styles';

type IProps = {
  ref?: any;
  disabled?: boolean;
  hoverReveal?: boolean;
  size?: number;
  theme?: ThemeType;
  color?: any; // hacky fix for linting error
} & SpaceProps &
  ColorProps &
  LayoutProps &
  SizeProps &
  TypographyProps;

export const IconButton = styled(styled.button`
  border: none;
  background-color: transparent;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  pointer-events: auto;
  height: ${(props: IProps) => `${props.size}px`};
  width: ${(props: IProps) => `${props.size}px`};
  svg {
    fill: ${(props: IProps) =>
      props.color || rgba(props.theme.colors.icon.app, 0.5)};
    pointer-events: none;
    /* height: calc(90%);
    width: calc(90%); */
    height: ${(props: IProps) => `${props.size - props.theme.space[1]}px`};
    width: ${(props: IProps) => `${props.size - props.theme.space[1]}px`};
  }
  /* border: 1px solid transparent; */
  border-radius: ${(props) => props.theme.containers.innerBorderRadius}px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  &:active {
    svg {
      fill: ${(props: IProps) => props.theme.colors.brand.primary};
    }
  }

  ${(props: IProps) =>
    props.hoverReveal
      ? css`
          opacity: 0;
          transition: 0.2s ease;
          padding: 3px;
          background: transparent;
          &:hover {
            opacity: 1;
            background: ${(props) => props.theme.colors.highlights.bgHighlight};
          }
        `
      : css`
          transition: 0.2s ease;
          &:hover {
            background: ${(props) => props.theme.colors.highlights.bgHighlight};
            svg {
              fill: ${(props: IProps) =>
                props.color || rgba(props.theme.colors.icon.app, 0.7)};
            }
          }
        `}
  ${selectableFocus}
`)<IProps>(
  {
    cursor: 'pointer',
  },
  compose(space, size, color, layout, typography)
);

IconButton.defaultProps = {
  size: 24,
};
