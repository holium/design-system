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
  BorderProps,
  SpaceProps,
} from 'styled-system';
import { ThemeType } from '../../';

export type DAOSwitcherStyleProps = BorderProps &
  SpaceProps & {
    theme: ThemeType;
    large?: boolean;
  };

export const DAOName = styled(
  styled.div`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    font-size: ${(props: DAOSwitcherStyleProps) =>
      props.large ? '18px' : '16px'};
    font-weight: ${(props: DAOSwitcherStyleProps) => (props.large ? 600 : 400)};
    color: ${(props: DAOSwitcherStyleProps) => props.theme.colors.text.primary};
  `
)<DAOSwitcherStyleProps>(
  compose(space, layout, flexbox, border, position, color)
);

export const DAOMetaText = styled(
  styled.div`
    display: inline-flex;
    align-items: center;
    font-size: 16px;
    & :first-child {
      margin-left: 0px;
    }
    margin-left: 8px;
    svg {
      margin-right: 4px;
    }
    color: ${(props: DAOSwitcherStyleProps) =>
      rgba(props.theme.colors.text.primary, 0.5)};
  `
)<DAOSwitcherStyleProps>(
  compose(space, layout, flexbox, border, position, color)
);

// export const DAORow = styled(
//   styled.div`
//     display: flex;
//     flex-direction: row;

//     font-size: 14px;
//     line-height: 17px;
//     letter-spacing: -0.011em;
//   `
// )<KPIStyleProps>(compose(space, layout, flexbox, border, position, color));

// export const KPIIcon = styled(
//   styled.div`
//     display:flex;
//     flex-direction: column;
//     justify-content: center;
//     margin-right: 4px;
//     svg {
//       width: 18px;
//       height: 18px;
//       path {
//         fill:  ${(props: KPIStyleProps) => props.theme.colors.text.secondary};
//     }
//   `
// )<KPIStyleProps>(compose(space, layout, flexbox, border, position, color));
