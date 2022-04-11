import styled from 'styled-components';
import {
  layout,
  space,
  flexbox,
  position,
  SpaceProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  compose,
} from 'styled-system';
import { Box } from '../Box';

export type FlexProps = FlexboxProps &
  SpaceProps &
  LayoutProps &
  PositionProps & {
    fx?: number | string;
    gap?: number | string;
    itemsCenter?: boolean;
    justifyCenter: boolean;
  };

export const Flex: any = styled(Box)<FlexProps>(
  {
    display: 'flex',
    boxSizing: 'border-box',
    // @ts-ignore
    flex: (props: FlexProps) => props.fx,
    // @ts-ignore
    gap: (props: FlexProps) =>
      props.gap === typeof 'string' ? props.gap : `${props.gap}px`,
    //@ts-ignore
    alignItems: (props: FlexProps) =>
      props.itemsCenter ? 'center' : 'initial',
    //@ts-ignore
    justifyContent: (props: FlexProps) =>
      props.justifyCenter ? 'center' : 'initial',
  },
  compose(space, layout, flexbox, position)
);

Flex.defaultProps = {
  gap: 0,
};
