import styled from 'styled-components';
// import { rgba } from 'polished';
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
import type { ThemeType } from '../../';

type StyleProps = BorderProps &
  SpaceProps & {
    theme: ThemeType;
    large?: boolean;
  };

export const AppNameDiv = styled(
  styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    color: ${(props: StyleProps) => props.theme.colors.text.primary};
  `
)<StyleProps>(compose(space, layout, flexbox, border, position, color));

export const AppNavContainer = styled(styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 24px);
  gap: 4px;
  padding: 12px;
  background: ${(props: StyleProps) => props.theme.colors.bg.secondary};
  border: 1px solid
    ${(props: StyleProps) => props.theme.colors.ui.input.borderColor};
  transition: 0.2s ease;
  border-radius: ${(props: StyleProps) =>
    props.theme.containers.outerBorderRadius}px;
  color: ${(props: StyleProps) => props.theme.colors.text.primary};
  box-sizing: border-box;
`)<StyleProps>(compose(space, layout, flexbox, border, position, color));
