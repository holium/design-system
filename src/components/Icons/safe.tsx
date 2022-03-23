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
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="currentcolor"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M10 20H6V22H4V20H3C2.73478 20 2.48043 19.8947 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V4.00001C2 3.73479 2.10536 3.48044 2.29289 3.2929C2.48043 3.10537 2.73478 3.00001 3 3.00001H10V1.59001C10 1.51743 10.0159 1.44573 10.0464 1.37988C10.0769 1.31404 10.1214 1.25563 10.1768 1.20872C10.2322 1.16181 10.2971 1.12752 10.3671 1.10823C10.4371 1.08893 10.5104 1.08511 10.582 1.09701L21.164 2.86101C21.3975 2.89983 21.6097 3.02022 21.7627 3.20077C21.9158 3.38131 21.9999 3.6103 22 3.84701V6.00001H23V8.00001H22V15H23V17H22V19.153C21.9999 19.3897 21.9158 19.6187 21.7627 19.7993C21.6097 19.9798 21.3975 20.1002 21.164 20.139L20 20.333V22H18V20.667L10.582 21.903C10.5104 21.9149 10.4371 21.9111 10.3671 21.8918C10.2971 21.8725 10.2322 21.8382 10.1768 21.7913C10.1214 21.7444 10.0769 21.686 10.0464 21.6201C10.0159 21.5543 10 21.4826 10 21.41V20ZM12 19.64L20 18.306V4.69401L12 3.36101V19.639V19.64ZM16.5 14C15.672 14 15 12.88 15 11.5C15 10.12 15.672 9.00001 16.5 9.00001C17.328 9.00001 18 10.12 18 11.5C18 12.88 17.328 14 16.5 14Z" />
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
