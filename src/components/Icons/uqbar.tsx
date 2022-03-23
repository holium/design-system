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
      // fill="currentcolor"
      // stroke="currentcolor"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g>
        <path
          d="M23.5383 11.9999C23.5383 18.3724 18.3724 23.5383 11.9999 23.5383C5.62737 23.5383 0.461426 18.3724 0.461426 11.9999C0.461426 5.62737 5.62737 0.461426 11.9999 0.461426C18.3724 0.461426 23.5383 5.62737 23.5383 11.9999Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.2307 21.7133V2.28687C21.4234 4.33917 23.5384 7.92263 23.5384 12.0001C23.5384 16.0775 21.4234 19.661 18.2307 21.7133Z"
          fill="#727BF2"
        />
        <path
          d="M0.461426 9.11527L2.30758 5.53835V18.4614L0.461426 14.9999V9.11527Z"
          fill="#DC7C8A"
        />
        <path
          d="M2.76912 4.73066L4.61527 2.99989V20.9999L2.76912 19.3845V4.73066Z"
          fill="#DC7C8A"
        />
        <path
          d="M5.07681 2.42296L6.92296 1.3845V22.6153L5.07681 21.5768V2.42296Z"
          fill="#DC7C8A"
        />
        <path
          d="M7.3845 1.15373L9.23066 0.57681V23.423L7.3845 22.846V1.15373Z"
          fill="#DC7C8A"
        />
        <path
          d="M9.6922 0.461426H11.5383V23.5383H9.6922V0.461426Z"
          fill="#DC7C8A"
        />
        <path
          d="M17.7693 12.0001C17.7693 15.1863 15.1863 17.7693 12.0001 17.7693C8.8138 17.7693 6.23083 15.1863 6.23083 12.0001C6.23083 8.8138 8.8138 6.23083 12.0001 6.23083C15.1863 6.23083 17.7693 8.8138 17.7693 12.0001Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.2308 12.0001C18.2308 15.4412 15.4412 18.2308 12.0001 18.2308C8.5589 18.2308 5.76929 15.4412 5.76929 12.0001C5.76929 8.5589 8.5589 5.76929 12.0001 5.76929C15.4412 5.76929 18.2308 8.5589 18.2308 12.0001ZM12.0001 17.7693C15.1863 17.7693 17.7693 15.1863 17.7693 12.0001C17.7693 8.8138 15.1863 6.23083 12.0001 6.23083C8.8138 6.23083 6.23083 8.8138 6.23083 12.0001C6.23083 15.1863 8.8138 17.7693 12.0001 17.7693Z"
          fill="white"
        />
        <path
          d="M12.0001 17.7693C13.5302 17.7693 14.9976 17.1615 16.0795 16.0795C17.1615 14.9976 17.7693 13.5302 17.7693 12.0001C17.7693 10.47 17.1615 9.00254 16.0795 7.92059C14.9976 6.83865 13.5302 6.23083 12.0001 6.23083V17.7693Z"
          fill="#DC7C8A"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 23.5385C18.3725 23.5385 23.5385 18.3725 23.5385 12C23.5385 5.62748 18.3725 0.461538 12 0.461538C5.62748 0.461538 0.461538 5.62748 0.461538 12C0.461538 18.3725 5.62748 23.5385 12 23.5385Z"
          fill="#727BF2"
        />
      </g>
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
