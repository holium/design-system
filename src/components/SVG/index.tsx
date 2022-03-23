import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  BorderProps,
  SpaceProps,
} from 'styled-system';
import { ThemeType } from '../../';

type StyleProps = BorderProps &
  SpaceProps & {
    colorVariant?: 'primary' | 'secondary' | 'tertiary' | 'disabled';
    size?: number | string;
    theme: ThemeType;
    fillColor?: string;
  };

export const SVG = styled(
  styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${(props: StyleProps) => props.size};
    width: ${(props: StyleProps) => props.size};
    svg {
      height: ${(props: StyleProps) => props.size};
      width: ${(props: StyleProps) => props.size};
      fill: ${(props: StyleProps) =>
        (props.colorVariant && props.theme.colors.text[props.colorVariant]) ||
        props.fillColor ||
        props.theme.colors.text.primary};
    }
  `
)<StyleProps>(compose(space, layout, flexbox, border, position, color));
