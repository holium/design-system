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
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from 'styled-system';
import { ThemeType } from '../../../theme';
import { Flex } from '../../';

export type AppWindowProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps & {
    theme: ThemeType;
    isStandalone?: boolean;
    clickable?: boolean;
  };

export const AppWindowStyle = styled(Flex)<
  FlexboxProps & {
    theme: ThemeType;
  }
>`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow: hidden;
  background: ${(props: AppWindowProps) =>
    props.isStandalone ? 'inherit' : props.theme.colors.bg.secondary};
`;

export const AppWindowTitleStyle = styled(
  styled.div`
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
    font-weight: 600;
    height: 32px;
    margin-right: 16px;
    color: ${(props: AppWindowProps) => props.theme.colors.text.secondary};
    ${(props: AppWindowProps) =>
      props.clickable &&
      css`
        cursor: pointer;
        padding: 8px 12px 8px 8px;
        &:hover {
          background: ${(props: AppWindowProps) =>
            props.theme.colors.highlights.bgHighlight};
          border-radius: ${(props: AppWindowProps) =>
            props.theme.containers.outerBorderRadius}px;
        }
      `}
  `
)<AppWindowProps>({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const AppWindowIconStyle = styled(
  styled.div`
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box; /* Firefox, other Gecko */
    box-sizing: border-box; /* Opera/IE 8+ */
    height: 24px;
    width: 24px;
    border-radius: ${(props: AppWindowProps) =>
      props.theme.containers.outerBorderRadius}px;
  `
)<AppWindowProps>({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export const AppWindowTitleBar = styled(
  styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    width: 100%;
    /* background: ${(props: AppWindowProps) =>
      props.isStandalone ? 'inherit' : props.theme.colors.bg.secondary}; */
    border-bottom: 1px solid
      ${(props: AppWindowProps) => props.theme.colors.ui.borderColor};
  `
)(
  { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  compose(space, color, layout, flexbox, border, position)
);
