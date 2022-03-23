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

      <path d="M17.5 21C16.5717 21 15.6815 20.6313 15.0251 19.9749C14.3687 19.3185 14 18.4283 14 17.5C14 16.5717 14.3687 15.6815 15.0251 15.0251C15.6815 14.3687 16.5717 14 17.5 14C18.4283 14 19.3185 14.3687 19.9749 15.0251C20.6313 15.6815 21 16.5717 21 17.5C21 18.4283 20.6313 19.3185 19.9749 19.9749C19.3185 20.6313 18.4283 21 17.5 21V21ZM17.5 19C17.8978 19 18.2794 18.842 18.5607 18.5607C18.842 18.2794 19 17.8978 19 17.5C19 17.1022 18.842 16.7206 18.5607 16.4393C18.2794 16.158 17.8978 16 17.5 16C17.1022 16 16.7206 16.158 16.4393 16.4393C16.158 16.7206 16 17.1022 16 17.5C16 17.8978 16.158 18.2794 16.4393 18.5607C16.7206 18.842 17.1022 19 17.5 19ZM6.5 10C6.04037 10 5.58525 9.90947 5.16061 9.73358C4.73597 9.55769 4.35013 9.29988 4.02513 8.97487C3.70012 8.64987 3.44231 8.26403 3.26642 7.83939C3.09053 7.41475 3 6.95963 3 6.5C3 6.04037 3.09053 5.58525 3.26642 5.16061C3.44231 4.73597 3.70012 4.35013 4.02513 4.02513C4.35013 3.70012 4.73597 3.44231 5.16061 3.26642C5.58525 3.09053 6.04037 3 6.5 3C7.42826 3 8.3185 3.36875 8.97487 4.02513C9.63125 4.6815 10 5.57174 10 6.5C10 7.42826 9.63125 8.3185 8.97487 8.97487C8.3185 9.63125 7.42826 10 6.5 10V10ZM6.5 8C6.89782 8 7.27936 7.84196 7.56066 7.56066C7.84196 7.27936 8 6.89782 8 6.5C8 6.10218 7.84196 5.72064 7.56066 5.43934C7.27936 5.15804 6.89782 5 6.5 5C6.10218 5 5.72064 5.15804 5.43934 5.43934C5.15804 5.72064 5 6.10218 5 6.5C5 6.89782 5.15804 7.27936 5.43934 7.56066C5.72064 7.84196 6.10218 8 6.5 8V8ZM19.071 3.515L20.485 4.929L4.93 20.485L3.516 19.071L19.07 3.515H19.071Z" />
    </svg>
  );
});
const Svg = styled(SvgComponent)<IconProps>(
  {
    flex: 'none',
    verticalAlign: 'middle',
  },
  compose(space, color, layout, typography)
);
export default Svg;
