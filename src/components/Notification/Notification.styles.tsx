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
    customColor?: string;
    hasBorder?: boolean;
  };

export const NotificationStyle = styled(
  styled.div`
    display: flex;
    min-width: 24px;
    min-height: 24px;
    width: 100%;
    padding: 8px;
    justify-content: center;
    align-items: center;
    border-radius: ${(props: NotificationStyleProps) =>
      props.theme.containers.rounderBorderRadius}px;
    border: ${(props: NotificationStyleProps) =>
      props.hasBorder ? `1px solid ${rgba(props.customColor, 0.5)}` : 'none'};
    padding: 4px;
    font-weight: ${(props: NotificationStyleProps) =>
      props.theme.fontWeights.light};
    background: ${(props: NotificationStyleProps) =>
      rgba(props.customColor, 0.2)};
    color: ${(props: NotificationStyleProps) => props.customColor};
  `
)<NotificationStyleProps>(
  compose(space, layout, flexbox, border, position, color)
);
