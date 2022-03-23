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

export type KPIStyleProps = BorderProps &
  SpaceProps & {
    theme: ThemeType;
  };

export const KPILabel = styled(
  styled.div`
    color: ${(props: KPIStyleProps) => props.theme.colors.text.primary};
    font-size: 14px;
    font-weight: ${(props: KPIStyleProps) => props.theme.fontWeights.medium};
  `
)<KPIStyleProps>(compose(space, layout, flexbox, border, position, color));

export const KPIValue = styled(
  styled.div`
    color: ${(props: KPIStyleProps) => props.theme.colors.text.secondary};
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.011em;
  `
)<KPIStyleProps>(compose(space, layout, flexbox, border, position, color));

export const KPIIcon = styled(
  styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 4px;
    svg {
      width: 18px;
      height: 18px;
      path {
        fill:  ${(props: KPIStyleProps) => props.theme.colors.text.secondary};
    }
  `
)<KPIStyleProps>(compose(space, layout, flexbox, border, position, color));
