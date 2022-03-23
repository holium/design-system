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
      <path d="M12 11C13.3261 11 14.5979 11.5268 15.5355 12.4645C16.4732 13.4021 17 14.6739 17 16V22H7V16C7 14.6739 7.52678 13.4021 8.46447 12.4645C9.40215 11.5268 10.6739 11 12 11ZM5.288 14.006C5.12886 14.5428 5.03485 15.0968 5.008 15.656L5 16V22H2V17.5C1.9998 16.6376 2.31803 15.8054 2.89363 15.1632C3.46924 14.521 4.2617 14.1139 5.119 14.02L5.289 14.006H5.288ZM18.712 14.006C19.6019 14.0602 20.4376 14.452 21.0486 15.1012C21.6596 15.7505 21.9999 16.6084 22 17.5V22H19V16C19 15.307 18.9 14.638 18.712 14.006ZM5.5 8C6.16304 8 6.79893 8.26339 7.26777 8.73223C7.73661 9.20107 8 9.83696 8 10.5C8 11.163 7.73661 11.7989 7.26777 12.2678C6.79893 12.7366 6.16304 13 5.5 13C4.83696 13 4.20107 12.7366 3.73223 12.2678C3.26339 11.7989 3 11.163 3 10.5C3 9.83696 3.26339 9.20107 3.73223 8.73223C4.20107 8.26339 4.83696 8 5.5 8ZM18.5 8C19.163 8 19.7989 8.26339 20.2678 8.73223C20.7366 9.20107 21 9.83696 21 10.5C21 11.163 20.7366 11.7989 20.2678 12.2678C19.7989 12.7366 19.163 13 18.5 13C17.837 13 17.2011 12.7366 16.7322 12.2678C16.2634 11.7989 16 11.163 16 10.5C16 9.83696 16.2634 9.20107 16.7322 8.73223C17.2011 8.26339 17.837 8 18.5 8ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2Z" />
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
