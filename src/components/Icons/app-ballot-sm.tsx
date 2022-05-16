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
export type IconProps = SpaceProps & ColorProps & LayoutProps & TypographyProps;
const SvgComponent = forwardRef<
  SVGSVGElement,
  React.SVGProps<SVGSVGElement> & {
    title?: any;
  }
>(({ title, ...props }, svgRef) => {
  const [titleId] = useState(() => (title ? uuid() : undefined));
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      width="1em"
      height="1em"
      fill="none"
      ref={svgRef}
      viewBox="0 0 24 24"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}

      <path
        d="M5.25534 9.67822H18.7447C19.6332 9.67822 20.4153 10.2645 20.6644 11.1174L22 15.6894V19.6782C22 20.7828 21.1046 21.6782 20 21.6782H4.08398C2.99573 21.6782 2.1072 20.8081 2.08442 19.7201L2 15.6894L3.33557 11.1174C3.58473 10.2645 4.36676 9.67822 5.25534 9.67822Z"
        fill="#DFDFDF"
      />
      <path
        d="M22 15.6894L20.6644 11.1174C20.4153 10.2645 19.6332 9.67822 18.7447 9.67822H5.25534C4.36676 9.67822 3.58473 10.2645 3.33557 11.1174L2 15.6894M22 15.6894H2M22 15.6894V19.6782C22 20.7828 21.1046 21.6782 20 21.6782H4.08398C2.99573 21.6782 2.1072 20.8081 2.08442 19.7201L2 15.6894"
        stroke="#9A9A9A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M9 2.6H15C15.7732 2.6 16.4 3.2268 16.4 4V12.4H7.6V4C7.6 3.2268 8.2268 2.6 9 2.6Z"
        fill="#DFDFDF"
        stroke="#9A9A9A"
        strokeWidth="1.2"
      />
      <path d="M10 5.79321H13.8961" stroke="#9A9A9A" strokeLinecap="round" />
      <path d="M10 7.79321H13.8961" stroke="#9A9A9A" strokeLinecap="round" />
      <path d="M10 9.79321H13.8961" stroke="#9A9A9A" strokeLinecap="round" />
    </svg>
  );
});
const SvgAddUser = styled(SvgComponent)<IconProps>(
  {
    flex: 'none',
    verticalAlign: 'middle',
  },
  compose(space, color, layout, typography)
);
export default SvgAddUser;
