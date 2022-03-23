import styled from 'styled-components';
import { compose, space, color, layout, typography } from 'styled-system';

export const ContextMenuStyles = styled(styled.ul`
  font-size: 14px;
  padding: 5px 0 5px 0;
  width: 150px;
  height: auto;
  z-index: 5000 !important;
  margin: 0;
  position: absolute;
  list-style: none;
  pointer-events: none;
  overflow: visible !important;
  cursor: pointer;
  color: ${(props) => props.theme.colors.text.primary};
  transition: ${(props) => props.theme.transitionFast};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  border: 1px solid ${(props) => props.theme.colors.ui.input.borderColor};
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(70px);
  border-radius: ${(props) => props.theme.containers.outerBorderRadius}px;
  hr {
    height: 1px;
    background-color: ${(props) => props.theme.colors.bg.divider};
    border: none;
    width: 80%;
    border-radius: 50%;
    margin-block-end: 0.35em;
    margin-block-start: 0.35em;
  }
`)({}, compose(space, color, layout, typography));
