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
      fill="currentcolor"
      ref={svgRef}
      viewBox="0 0 24 24"
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 8.76923C11.5 11.5448 9.933 12.5385 8 12.5385C11.866 12.5385 15 14.2419 15 19H1C1 14.2427 4.13296 12.539 7.99806 12.5385C6.06595 12.5378 4.5 11.5439 4.5 8.76923C4.5 5.99365 6.067 5 8 5C9.933 5 11.5 5.99365 11.5 8.76923ZM19.5 7C19.5 6.44772 19.0523 6 18.5 6C17.9477 6 17.5 6.44772 17.5 7V9.5H15C14.4477 9.5 14 9.94771 14 10.5C14 11.0523 14.4477 11.5 15 11.5H17.5V14C17.5 14.5523 17.9477 15 18.5 15C19.0523 15 19.5 14.5523 19.5 14V11.5H22C22.5523 11.5 23 11.0523 23 10.5C23 9.94771 22.5523 9.5 22 9.5H19.5V7Z"
      />

      {/* Old tlon icon */}
      {/* <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 15H7.5C5.84315 15 4.5 16.3431 4.5 18V19.5H15V18C15 16.3431 13.6569 15 12 15ZM7.5 13.5C5.01472 13.5 3 15.5147 3 18V21H16.5V18C16.5 15.5147 14.4853 13.5 12 13.5H7.5Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 10.5C11.8211 10.5 13.5 8.82107 13.5 6.75C13.5 4.67893 11.8211 3 9.75 3C7.67893 3 6 4.67893 6 6.75C6 8.82107 7.67893 10.5 9.75 10.5ZM9.75 12C12.6495 12 15 9.6495 15 6.75C15 3.85051 12.6495 1.5 9.75 1.5C6.85051 1.5 4.5 3.85051 4.5 6.75C4.5 9.6495 6.85051 12 9.75 12Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10.5V7.5H19.5V10.5H22.5V12H19.5V15H18V12H15V10.5H18Z"
      /> */}
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
