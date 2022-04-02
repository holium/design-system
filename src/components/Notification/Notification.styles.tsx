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
  ColorProps,
  SpaceProps,
} from 'styled-system';

import type { ThemeType } from '../../';

export type NotificationStyleProps = ColorProps &
  SpaceProps & {
    theme: ThemeType;
    colour?: string;
  };

export const NotificationStyle = styled(
  styled.div`
    display: flex;
    width: fit-content;
    min-width: 24px;
    min-height: 24px;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) =>
      props.theme.containers.fullyRoundBorderRadius}px;
    padding: 4px;
    font-weight: ${(props: NotificationStyleProps) =>
      props.theme.fontWeights.light};
    background: ${(props: NotificationStyleProps) => rgba(props.colour, 0.2)};
    color: ${(props: NotificationStyleProps) => props.colour};
  `
)<NotificationStyleProps>(
  compose(space, layout, flexbox, border, position, color)
);
