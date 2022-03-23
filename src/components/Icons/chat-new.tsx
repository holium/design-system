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
      stroke="currentcolor"
      ref={svgRef}
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M18.1635 16.0585L18.1326 16.1156L18.1531 16.1773L19.141 19.1411L16.1772 18.1532L16.1155 18.1327L16.0584 18.1636L15.4872 18.4721C14.4512 19.0318 13.2652 19.3501 12 19.3501C7.94068 19.3501 4.64998 16.0594 4.64998 12.0001C4.64998 7.9408 7.94068 4.6501 12 4.6501C16.0593 4.6501 19.35 7.9408 19.35 12.0001C19.35 13.2653 19.0317 14.4513 18.472 15.4873L18.1635 16.0585ZM20.991 21.6553C21.4015 21.7921 21.792 21.4016 21.6552 20.9911L20.0865 16.2853C20.7654 15.0068 21.15 13.5481 21.15 12.0001C21.15 6.94669 17.0533 2.8501 12 2.8501C6.94656 2.8501 2.84998 6.94669 2.84998 12.0001C2.84998 17.0534 6.94656 21.1501 12 21.1501C13.548 21.1501 15.0067 20.7655 16.2852 20.0866L20.991 21.6553Z"
        strokeWidth="0.2"
      />
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
