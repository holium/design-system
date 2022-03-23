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
        d="M4.61539 6.1978C4.61539 5.32386 5.32386 4.61539 6.19781 4.61539C7.07175 4.61539 7.78022 5.32386 7.78022 6.1978C7.78022 7.07175 7.07175 7.78022 6.19781 7.78022C5.32386 7.78022 4.61539 7.07175 4.61539 6.1978Z"
        fill="currentcolor"
      />
      <path
        d="M4.6153 12.0001C4.6153 11.1261 5.32377 10.4177 6.19771 10.4177C7.07166 10.4177 7.78013 11.1261 7.78013 12.0001C7.78013 12.874 7.07166 13.5825 6.19771 13.5825C5.32377 13.5825 4.6153 12.874 4.6153 12.0001Z"
        fill="currentcolor"
      />
      <path
        d="M4.6153 17.8022C4.6153 16.9283 5.32377 16.2198 6.19771 16.2198C7.07166 16.2198 7.78013 16.9283 7.78013 17.8022C7.78013 18.6762 7.07166 19.3846 6.19771 19.3846C5.32377 19.3846 4.6153 18.6762 4.6153 17.8022Z"
        fill="currentcolor"
      />
      <path
        d="M10.4177 6.19783C10.4177 5.32389 11.1261 4.61542 12.0001 4.61542C12.874 4.61542 13.5825 5.32389 13.5825 6.19783C13.5825 7.07178 12.874 7.78025 12.0001 7.78025C11.1261 7.78025 10.4177 7.07178 10.4177 6.19783Z"
        fill="currentcolor"
      />
      <path
        d="M10.4177 12.0001C10.4177 11.1261 11.1261 10.4177 12.0001 10.4177C12.874 10.4177 13.5825 11.1261 13.5825 12.0001C13.5825 12.874 12.874 13.5825 12.0001 13.5825C11.1261 13.5825 10.4177 12.874 10.4177 12.0001Z"
        fill="currentcolor"
      />
      <path
        d="M10.4177 17.8022C10.4177 16.9283 11.1261 16.2198 12.0001 16.2198C12.874 16.2198 13.5825 16.9283 13.5825 17.8022C13.5825 18.6762 12.874 19.3846 12.0001 19.3846C11.1261 19.3846 10.4177 18.6762 10.4177 17.8022Z"
        fill="currentcolor"
      />
      <path
        d="M16.2196 6.19783C16.2196 5.32389 16.928 4.61542 17.802 4.61542C18.6759 4.61542 19.3844 5.32389 19.3844 6.19783C19.3844 7.07178 18.6759 7.78025 17.802 7.78025C16.928 7.78025 16.2196 7.07178 16.2196 6.19783Z"
        fill="currentcolor"
      />
      <path
        d="M16.2196 12.0001C16.2196 11.1261 16.928 10.4177 17.802 10.4177C18.6759 10.4177 19.3844 11.1261 19.3844 12.0001C19.3844 12.874 18.6759 13.5825 17.802 13.5825C16.928 13.5825 16.2196 12.874 16.2196 12.0001Z"
        fill="currentcolor"
      />
      <path
        d="M16.2196 17.8022C16.2196 16.9283 16.928 16.2198 17.802 16.2198C18.6759 16.2198 19.3844 16.9283 19.3844 17.8022C19.3844 18.6762 18.6759 19.3846 17.802 19.3846C16.928 19.3846 16.2196 18.6762 16.2196 17.8022Z"
        fill="currentcolor"
      />
    </svg>
  );
});
const SvgApps = styled(SvgComponent)<IconProps>(
  {
    flex: 'none',
    verticalAlign: 'middle',
  },
  compose(space, color, layout, typography)
);
export default SvgApps;
