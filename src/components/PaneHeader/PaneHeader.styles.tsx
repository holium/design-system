import styled, { css } from 'styled-components';
import { BorderProps, SpaceProps, TypographyProps } from 'styled-system';

export type PaneHeaderStyleProps = BorderProps &
  SpaceProps &
  TypographyProps & {
    paneHeight?: number;
    centerVertical?: boolean;
    padding?: number;
    noBorder?: boolean;
    theme: any;
  };

export const PaneHeaderText = styled.div<PaneHeaderStyleProps>`
  font-family: ${(props: PaneHeaderStyleProps) => props.theme.fonts.heading};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  ${(props: PaneHeaderStyleProps) =>
    props.padding &&
    css`
      padding: ${props.padding}px ${props.padding}px ${props.padding}px
        ${props.padding}px;
      gap: ${props.padding}px;
    `}
`;

export const PaneHeaderStyle = styled.div<PaneHeaderStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid
    ${(props: PaneHeaderStyleProps) =>
      props.noBorder ? 'transparent' : props.theme.colors.ui.input.borderColor};

  ${(props: PaneHeaderStyleProps) =>
    props.padding &&
    css`
      padding-left: ${props.padding}px;
      padding-right: ${props.padding}px;
      gap: ${props.padding}px;
    `}

  ${(props: PaneHeaderStyleProps) =>
    props.paneHeight
      ? css`
          height: ${props.paneHeight}px;
        `
      : css`
          height: initial;
        `}
`;
