import * as React from 'react';
import { Box } from '../../Box';
import { ChildrenBox, MenuItemStyle } from './MenuItem.styles';

export type IntentProps = {
  intent?: 'primary' | 'alert' | 'caution' | 'success' | 'info';
};

export type MenuItemProps = {
  icon?: any;
  style?: any;
  tabIndex?: number;
  label: string;
  disabled?: boolean;
  selected?: boolean;
  children?: any;
  section?: number;
  type?: 'neutral' | 'brand';
  onClick: (...args: any) => void;
  subMenu?: any[];
} & IntentProps;

export const MenuItem: any = (props: Partial<MenuItemProps>) => {
  const {
    icon,
    label,
    style,
    intent,
    disabled,
    onClick,
    selected,
    // subMenu
    type,
    children,
    tabIndex,
  } = props;

  return (
    <MenuItemStyle
      tabIndex={tabIndex}
      style={style}
      flex={1}
      highlightType={type}
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start"
      intent={intent}
      data-prevent-context-close={disabled}
      disabled={disabled}
      selected={selected}
      onKeyPress={(evt: any) => {
        const key = evt.keyCode || evt.which;
        if (key === 13) {
          evt.preventDefault(); // Ensure it is only this code that runs
          onClick(evt);
        }
      }}
      onClick={(evt: any) => {
        if (!disabled) {
          onClick(evt);
        } else {
          evt.preventDefault();
          evt.stopPropagation();
        }
      }}
      value={label}
    >
      {icon && (
        <Box color="inherit" mr={2}>
          {icon}
        </Box>
      )}
      {label}
      {children && <ChildrenBox interaction={disabled}>{children}</ChildrenBox>}
    </MenuItemStyle>
  );
};

MenuItem.defaultProps = {
  type: 'neutral',
};
