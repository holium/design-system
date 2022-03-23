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
        d="M19.8539 19.4858L19.8226 19.5277L19.8391 19.5773L19.9701 19.9702L19.4858 19.8088L19.4462 19.7955L19.4089 19.8145L18.8497 20.0989C18.2771 20.3901 17.6285 20.5551 16.9368 20.5551C14.602 20.5551 12.7093 18.6623 12.7093 16.3275C12.7093 13.9927 14.602 12.1 16.9368 12.1C19.2716 12.1 21.1643 13.9927 21.1643 16.3275C21.1643 17.2785 20.8522 18.1519 20.3243 18.8573L19.8539 19.4858ZM21.7567 22.3577C22.1281 22.4815 22.4814 22.1282 22.3576 21.7569L21.7166 19.8338C22.4381 18.8519 22.8643 17.6393 22.8643 16.3275C22.8643 13.0538 20.2105 10.4 16.9368 10.4C13.6631 10.4 11.0093 13.0538 11.0093 16.3275C11.0093 19.6012 13.6631 22.2551 16.9368 22.2551C17.8875 22.2551 18.7863 22.0311 19.5829 21.6331L21.7567 22.3577Z"
        strokeWidth="0.2"
      />
      <path
        d="M4.83227 14.6614L4.84596 14.6203L4.82538 14.5822L4.51678 14.0109C3.95333 12.9679 3.63284 11.7738 3.63284 10.5C3.63284 6.41309 6.94594 3.1 11.0328 3.1C15.1198 3.1 18.4328 6.41309 18.4328 10.5C18.4328 10.5727 18.4318 10.6452 18.4297 10.7175L18.4275 10.7953L18.5024 10.8165C19.0141 10.9616 19.4967 11.1761 19.9394 11.4491L20.0762 11.5335L20.0915 11.3735C20.1188 11.086 20.1328 10.7946 20.1328 10.5C20.1328 5.47421 16.0586 1.4 11.0328 1.4C6.00705 1.4 1.93284 5.47421 1.93284 10.5C1.93284 12.0473 2.3191 13.5047 3.00054 14.7807L1.7809 18.4396L1.76117 18.4988L1.58326 19.0325L1.42515 19.5069C1.30137 19.8782 1.65464 20.2315 2.02598 20.1077L2.50033 19.9496L3.03404 19.7717L3.09325 19.7519L6.75215 18.5323C8.02816 19.2137 9.48554 19.6 11.0328 19.6C11.3679 19.6 11.6988 19.5819 12.0246 19.5466L12.1844 19.5292L12.0983 19.3935C11.8193 18.9542 11.5985 18.4744 11.4468 17.9648L11.4246 17.8902L11.3468 17.8935C11.2427 17.8978 11.138 17.9 11.0328 17.9C9.75909 17.9 8.56495 17.5795 7.52191 17.0161L6.95063 16.7075L6.91254 16.6869L6.87148 16.7006L6.25549 16.9059L3.81266 17.7202L4.62694 15.2774L4.83227 14.6614Z"
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
