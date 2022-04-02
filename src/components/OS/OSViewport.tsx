import styled, { css } from 'styled-components';
import {
  compose,
  background,
  // SpaceProps,
  BackgroundProps,
  // ColorProps,
  // LayoutProps,
  // FlexboxProps,
  // BorderProps,
  // PositionProps,
} from 'styled-system';
import type { ThemeType } from '../../theme';
type OSViewPortProps = BackgroundProps & {
  theme?: ThemeType;
  bg?: 'secondary' | 'primary' | 'inset';
  blur?: boolean;
};

export const OSViewPort = styled(styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: filter ${(props: OSViewPortProps) => props.theme.transition};
  ${(props: OSViewPortProps) =>
    props.blur &&
    css`
      filter: blur(2px);
      transition: filter ${props.theme.transition};
    `}
  background: ${(props: OSViewPortProps) =>
    props.bg
      ? props.theme.colors.bg[props.bg]
      : props.theme.colors.bg.secondary};
`)<OSViewPortProps>(compose(background));
