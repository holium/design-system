import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import {
  compose,
  space,
  color,
  layout,
  typography,
  SpaceProps,
  ColorProps,
  LayoutProps,
  TypographyProps,
} from 'styled-system';
import { uuid } from './uuid';
import { iconIndex } from './tlon-icons-index';

export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;

type IconIndex = typeof iconIndex;

const SvgComponent = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> & {
    title?: any;
    icon: keyof IconIndex;
  }
>(({ title, icon, ...props }, svgRef) => {
  const [titleId] = useState(() => (title ? uuid() : undefined));
  const InnerIcon = iconIndex[icon] || iconIndex.NullIcon;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={'0 0 16 16'}
      fill="currentcolor"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <InnerIcon />
    </svg>
  );
});
const SvgVisibilityOff = styled(SvgComponent)<IconProps>(
  {
    flex: 'none',
    verticalAlign: 'middle',
  },
  compose(space, color, layout, typography)
);
export default SvgVisibilityOff;
