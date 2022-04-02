import styled, { css } from 'styled-components';
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

type DialogStyleProps = BorderProps &
  SpaceProps & {
    theme: ThemeType;
    large?: boolean;
    isShowing?: boolean;
    backdropOpacity?: number;
    hasHeader?: boolean | string;
    variant?: 'simple' | 'bordered';
  };

export const DialogOverlay = styled(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  transition: visibility 0.2s linear;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: ${(props: DialogStyleProps) => props.backdropOpacity};
  transition: ${(props: DialogStyleProps) => props.theme.transitionFast};
`)<DialogStyleProps>(compose(space, layout, flexbox, border, position, color));

export const DialogWrapper = styled(styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  transition: ${(props: DialogStyleProps) => props.theme.transitionFast};
`)<DialogStyleProps>(compose(space, layout, flexbox, border, position, color));

export const DialogHeader = styled(styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: ${(props: DialogStyleProps) => props.theme.colors.bg.secondary};
  border-radius: 12px 12px 0 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 24px;
  padding-bottom: 24px;
  line-height: 24px;
  letter-spacing: -1%;
  z-index: 0;
  /* Only show header border if bordered */
  ${(props: DialogStyleProps) =>
    props.variant === 'bordered'
      ? css`
          /* padding-bottom: 12px; */
          border-bottom: 1px solid
            ${(props: DialogStyleProps) =>
              props.theme.colors.ui.input.borderColor};
          -webkit-box-shadow: 0 1px 0 rgb(16 22 26 / 2%);
          box-shadow: 0 1px 0 rgb(16 22 26 / 2%);
        `
      : css`
          border-bottom: none;
          padding-bottom: 0px;
        `}
`)<DialogStyleProps>(compose(space, layout, flexbox, border, position, color));

export const DialogContainer = styled(styled.div`
  z-index: 1060;
  position: relative;
  margin: auto auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
  max-width: 500px;
`)<DialogStyleProps>(compose(space, layout, flexbox, border, position, color));

export const DialogBody = styled(styled.div`
  line-height: 18px;
  padding: 24px;
  padding-top: ${(props: DialogStyleProps) =>
    props.variant === 'simple' ? '16px' : '24px'};
`)<DialogStyleProps>(compose(space, layout, flexbox, border, position, color));

export const DialogFooter = styled(styled.div`
  margin: 0 16px;
`)<DialogStyleProps>(compose(space, layout, flexbox, border, position, color));

export const DialogFooterButtons = styled(styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 8px;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`)<DialogStyleProps>(compose(space, layout, flexbox, border, position, color));
