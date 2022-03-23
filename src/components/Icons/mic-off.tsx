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
      <path d="M16.4251 17.839C15.3702 18.436 14.2049 18.8123 13.0001 18.945V23H11.0001V18.945C8.9712 18.7176 7.07985 17.8074 5.63624 16.3638C4.19263 14.9202 3.28248 13.0289 3.05507 11H5.07007C5.22597 12.0794 5.63186 13.1075 6.25538 14.0023C6.87891 14.8971 7.70284 15.6338 8.66149 16.1539C9.62014 16.6739 10.687 16.9628 11.7771 16.9975C12.8671 17.0323 13.9502 16.8119 14.9401 16.354L13.3891 14.804C12.6443 15.0194 11.8596 15.0586 11.097 14.9186C10.3344 14.7785 9.61485 14.4631 8.99516 13.9971C8.37547 13.5312 7.87264 12.9275 7.52638 12.2338C7.18013 11.5401 6.99994 10.7753 7.00007 9.99999V8.41399L1.39307 2.80799L2.80807 1.39299L22.6071 21.193L21.1921 22.607L16.4251 17.839V17.839ZM9.03307 10.447L11.5531 12.967C10.9189 12.8712 10.3321 12.5749 9.87866 12.1214C9.42518 11.6679 9.12884 11.0811 9.03307 10.447V10.447ZM19.3751 15.16L17.9321 13.718C18.4411 12.908 18.7881 11.988 18.9291 11H20.9451C20.78 12.4966 20.24 13.9275 19.3751 15.16ZM16.4651 12.251L14.9171 10.703C14.9711 10.477 15.0001 10.243 15.0001 9.99999V5.99999C15.0008 5.2947 14.753 4.61171 14.3001 4.07096C13.8473 3.53022 13.2185 3.1663 12.524 3.04312C11.8296 2.91993 11.1139 3.04536 10.5028 3.39738C9.89159 3.74939 9.42399 4.30549 9.18207 4.96799L7.68607 3.47099C8.24117 2.52361 9.0927 1.7853 10.1092 1.37005C11.1257 0.9548 12.2506 0.885706 13.3103 1.17343C14.3699 1.46116 15.3054 2.08971 15.9723 2.96204C16.6392 3.83436 17.0003 4.90196 17.0001 5.99999V9.99999C17.0012 10.7818 16.8183 11.553 16.4661 12.251H16.4651Z" />
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
