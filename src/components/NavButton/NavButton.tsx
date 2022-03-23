import React, { FC } from 'react';
import { Flex, Menu, useMenu, Icons } from '..';
import { NavButtonStyle, NavText } from './NavButton.styles';

export type NavButtonProps = {
  id?: any;
  name: string;
  dropdownWidth?: number;
  isDropdown?: boolean;
  expanded?: boolean;
  disabled?: boolean;
  selected?: boolean;
  fade?: boolean;
  onClick?: (...args: any) => void;
  onOptionClick?: (...args: any) => void;
  icon?: any;
  style?: any;
  children?: any;
};

export const NavButton: FC<NavButtonProps> = (props: NavButtonProps) => {
  const {
    id,
    style,
    name,
    isDropdown,
    dropdownWidth,
    disabled,
    selected,
    onClick,
    icon,
    children,
    fade,
  } = props;
  const navButtonRef = React.useRef();
  let anchorPoint: any, show: boolean, setShow: any;
  const menuWidth = dropdownWidth || 180;
  // Get the popup anchor
  if (children) {
    let config = useMenu(navButtonRef, {
      orientation: 'bottom',
      padding: 6,
      menuWidth,
    });
    anchorPoint = config.anchorPoint;
    show = config.show;
    setShow = config.setShow;
  }
  let button = (
    <Flex>
      <NavButtonStyle
        id={id}
        ref={navButtonRef}
        style={style}
        disabled={disabled}
        selected={show || selected}
        fade={fade}
        onClick={() => {
          !show && setShow && setShow(true);
          onClick && onClick();
        }}
      >
        <Flex style={{ pointerEvents: 'none', userSelect: 'none' }}>
          {icon}
        </Flex>
        {name && (
          <NavText
            style={{
              marginLeft: icon ? 8 : 2,
              marginRight: icon && !isDropdown ? 2 : 2,
            }}
          >
            {name}
          </NavText>
        )}
        {isDropdown && children && (
          <Icons.ExpandMore
            fontSize={5}
            ml={'8px'}
            opacity={0.3}
            color="text.primary"
            aria-hidden
          />
        )}
      </NavButtonStyle>
      {children && show && (
        <Menu
          style={{
            top: anchorPoint.y - 2,
            left: anchorPoint.x,
            padding: '8px 4px',
            width: menuWidth,
          }}
          isOpen={show}
          onClose={() => {
            setShow(false);
          }}
        >
          {children}
        </Menu>
      )}
    </Flex>
  );

  return button;
};

NavButton.defaultProps = {
  id: '',
  name: '',
  icon: null,
};

{
  /* <Spring
  config={{ duration: 20 }}
  from={{ opacity: 0, y: anchorPoint.y - 10 }}
  to={{ opacity: 1, y: anchorPoint.y }}
>
  {(props) => (
    <Menu
      style={{
        top: props.y - 3,
        left: anchorPoint.x,
        opacity: props.opacity,
        padding: '8px 4px',
        width: menuWidth,
      }}
      isOpen={show}
      onClose={() => {
        setShow(false);
      }}
    >
      {options.map((option: any) => (
        <MenuItem
          key={`${option.label}`}
          label={option.label}
          onClick={() => onOptionClick(option.label)}
        />
      ))}
    </Menu>
  )}
</Spring>; */
}
