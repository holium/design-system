import styled, { css } from 'styled-components';
import { BorderProps } from 'styled-system';

export type PageStyleProps = BorderProps & {
  noCard?: boolean;
  noBorder?: boolean;
  margin?: number;
  spacing?: number;
  size?: number;
  row?: boolean;
  centerVertical?: boolean;
  theme: any;
};

export const ViewPort = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.theme.colors.bg.primary};
`;

export const Bottom = styled.div`
  position: relative;
  bottom: 0;
  right: 0;
  left: 0;
  ${(props: PageStyleProps) =>
    props.size
      ? css`
          height: ${props.size}px;
          flex-basis: ${props.size}px;
          flex-grow: 0;
          flex-shrink: 0;
        `
      : css`
          height: initial;
        `}

  ${(props: PageStyleProps) =>
    props.centerVertical &&
    css`
      display: flex;
      flex-direction: row;
      align-content: center;
    `}

    ${(props: PageStyleProps) =>
    props.spacing &&
    css`
      padding: ${props.spacing}px ${props.spacing}px ${props.spacing}px
        ${props.spacing}px;
      gap: ${props.spacing}px;
    `}
`;

export const Top = styled.div`
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  ${(props: PageStyleProps) =>
    props.size
      ? css`
          height: ${props.size}px;
          flex-basis: ${props.size}px;
          flex-grow: 0;
          flex-shrink: 0;
        `
      : css`
          height: initial;
        `}

  ${(props: PageStyleProps) =>
    props.centerVertical &&
    css`
      display: flex;
      flex-direction: row;
      align-content: center;
    `}

    ${(props: PageStyleProps) =>
    props.spacing &&
    css`
      padding: ${props.spacing}px ${props.spacing}px ${props.spacing}px
        ${props.spacing}px;
      gap: ${props.spacing}px;
    `}
`;

export const Right = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  flex-basis: ${(props: PageStyleProps) => props.size}px;
  flex-grow: 0;
  flex-shrink: 0;
  width: ${(props: PageStyleProps) => props.size}px;
  height: inherit;
`;

export const Left = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  flex-basis: ${(props: PageStyleProps) => props.size}px;
  flex-grow: 0;
  flex-shrink: 0;
  width: ${(props: PageStyleProps) => props.size}px;
  height: inherit;
`;

export const Fill = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  ${(props: PageStyleProps) =>
    props.row
      ? css`
          display: flex;
          gap: 8px;
        `
      : css`
          display: flex;
          flex-direction: column;
          /* gap: 8px; */
        `}
`;

export const PageStyle = styled(Fill)`
  display: flex;
  flex-direction: row;
  ${(props: PageStyleProps) =>
    props.margin
      ? css`
          margin: 0 ${props.margin}px ${props.margin}px ${props.margin}px;
          width: calc(100% - (${props.margin}px * 2));
          gap: ${props.margin / 2}px;
        `
      : css`
          height: inherit;
          width: 100%;
        `}
`;

export const RightPaneStyle = styled(Right)`
  ${(props: PageStyleProps) =>
    props.margin &&
    css`
      margin: ${props.margin}px ${props.margin}px ${props.margin}px 0px;
      height: calc(100% - (${props.margin}px * 2));
      width: ${props.size}px;
    `}
  background: ${(props) =>
    props.noCard ? 'transparent' : props.theme.colors.bg.secondary};
  border: 1px solid
    ${(props: PageStyleProps) =>
      props.noBorder ? 'transparent' : props.theme.colors.ui.input.borderColor};
  transition: 0.2s ease;
  border-radius: ${(props: PageStyleProps) =>
    props.theme.containers.outerBorderRadius}px;
  color: ${(props: PageStyleProps) => props.theme.colors.text.primary};
  box-sizing: border-box;
`;

export const SidebarStyle = styled(Left)`
  ${(props: PageStyleProps) =>
    props.margin &&
    css`
      margin: ${props.margin}px 0px ${props.margin}px ${props.margin}px;
      height: calc(100% - (${props.margin}px * 2));
      width: ${props.size}px;
    `}
  background: ${(props: PageStyleProps) =>
    props.noCard ? 'transparent' : props.theme.colors.bg.secondary};
  border: 1px solid
    ${(props) =>
      props.noBorder ? 'transparent' : props.theme.colors.ui.input.borderColor};
  transition: 0.2s ease;
  border-radius: ${(props: PageStyleProps) =>
    props.theme.containers.outerBorderRadius}px;
  color: ${(props: PageStyleProps) => props.theme.colors.text.primary};
  box-sizing: border-box;
`;

export const PaneStyle = styled(Fill)`
  ${(props: PageStyleProps) =>
    props.margin &&
    css`
      margin: ${props.margin}px ${props.margin}px ${props.margin}px
        ${props.margin}px;
      height: calc(100% - (${props.margin}px * 2));
      width: calc(100% - (${props.margin}px * 2));
    `}
  /* background: ${(props: PageStyleProps) =>
    props.noCard ? 'transparent' : props.theme.colors.bg.secondary}; */
  border: 1px solid
    ${(props: PageStyleProps) =>
    props.noBorder ? 'transparent' : props.theme.colors.ui.input.borderColor};
  transition: 0.2s ease;
  border-radius: ${(props: PageStyleProps) =>
    props.theme.containers.outerBorderRadius}px;
  color: ${(props: PageStyleProps) => props.theme.colors.text.primary};
  box-sizing: border-box;
`;
