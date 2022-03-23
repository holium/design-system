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

export type DAOSwitcherStyleProps = BorderProps &
  SpaceProps & {
    theme: ThemeType;
    shape?: 'round' | 'square';
    large?: boolean;
  };

// TODO  size props
export const DAOCrest = styled(
  styled.img`
    border-radius: ${(props: DAOSwitcherStyleProps) =>
      props.shape === 'round' ? '50%' : '4px'};
    width: ${(props: DAOSwitcherStyleProps) => (props.large ? '56px' : '26px')};
    height: ${(props: DAOSwitcherStyleProps) =>
      props.large ? '56px' : '26px'};
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
