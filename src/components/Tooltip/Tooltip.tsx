import * as React from 'react';
import styled, { css } from 'styled-components';
import { compose, space, color, typography } from 'styled-system';
import { Card } from '../';

type Placement =
  | 'bottom-right'
  | 'bottom-left'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-right'
  | 'top-left'
  | 'top';

export type TooltipProps = {
  delay?: number; // 0.5
  style?: any;
  placement: Placement;
  content: React.ReactNode | string;
  children: React.ReactNode;
};

const margin = 2;

const placementMaps = {
  bottom: css`
    margin-top: ${margin}px;
    top: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  `,
  'bottom-right': css`
    top: 100%;
    left: 100%;
  `,
  'bottom-left': css`
    top: 100%;
    right: 100%;
  `,
  top: css`
    margin-bottom: ${margin}px;
    bottom: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  `,
  'top-right': css`
    bottom: 100%;
    left: 100%;
  `,
  'top-left': css`
    bottom: 100%;
    right: 100%;
  `,
  left: css`
    margin-right: ${margin}px;
    bottom: 50%;
    right: 100%;
    transform: translate(0, 50%);
  `,
  right: css`
    margin-left: ${margin}px;
    bottom: 50%;
    left: 100%;
    transform: translate(0, 50%);
  `,
};

// Tooltip
export const TooltipStyle = styled(
  styled.div<Partial<TooltipProps>>`
    position: absolute;
    display: inline-flex;
    flex-direction: column;
    width: max-content;
    height: max-content;
    color: ${(props) => props.theme.colors.text.primary};
    box-shadow: ${(props) => props.theme.elevations.one};
    ${(props: Partial<TooltipProps>) => placementMaps[props.placement]};
  `
)(compose(space, color, typography));

// Parent wrapper
export const TooltipWrapper = styled(styled.div<Partial<TooltipProps>>`
  position: relative;
  z-index: 4;
  & > ${TooltipStyle} {
    transition: 0.2s all;
    visibility: hidden;
  }
  &:hover {
    & > ${TooltipStyle} {
      transition-delay: ${(props: Partial<TooltipProps>) => props.delay}s;
      visibility: visible;
    }
  }
`)(compose(space, color, typography));

export const Tooltip = (props: TooltipProps) => {
  const { style, content, delay, placement, children } = props;
  let body = content;
  if (typeof content === 'string') {
    body = (
      <Card style={{ fontSize: 12 }} padding={'4px'}>
        {content}
      </Card>
    );
  }
  return (
    <TooltipWrapper style={style} delay={delay}>
      <TooltipStyle placement={placement}>{body}</TooltipStyle>
      {children}
    </TooltipWrapper>
  );
};

Tooltip.defaultProps = {
  placement: 'bottom-right',
  delay: 0.5,
};
