import React, { forwardRef, useState } from 'react';
import { CSSProperties } from 'styled-components';

import { Menu, MenuItem, Icons, Input, InputProps } from '../../';
import { SelectWrapper } from './Select.styles';

export type OptionType = {
  label: string;
  value: string;
  icon?: any;
  disabled?: boolean;
};

type IProps = {
  id: string;
  menuWidth?: number;
  small?: boolean;
  tabIndex?: number;
  large?: boolean;
  gray?: boolean;
  style?: CSSProperties;
  placeholder?: string;
  selectionOption: string;
  options: Array<OptionType>;
  onSelected: (value: OptionType) => any;
} & InputProps;

export const Select: any = forwardRef<HTMLInputElement, IProps>(
  (
    {
      id,
      style,
      small,
      large,
      tabIndex,
      placeholder,
      options,
      selectionOption,
      menuWidth,
      onSelected,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => {
      setIsOpen(!isOpen);
    };

    const onClose = () => {
      setIsOpen(false);
    };
    const selectedFull = options.find(
      (option: OptionType) => option.value === selectionOption
    );
    return (
      <SelectWrapper style={style} small={small}>
        <Input
          ref={ref}
          tabIndex={tabIndex}
          isPlaceholder={!selectionOption}
          rightInteractive={false}
          rightIcon={
            <Icons.ArrowDropdown
              size={2}
              style={{ opacity: 0.5 }}
              color="text.primary"
              aria-hidden
            />
          }
          small={small}
          large={large}
          readOnly
          value={selectedFull?.label}
          placeholder={placeholder}
          onClick={toggleIsOpen}
          {...props}
        />
        <Menu
          id={id}
          key={id}
          style={{
            marign: (style && style.margin) || 0,
            minWidth: menuWidth || 150,
          }}
          isOpen={isOpen}
          onClose={onClose}
        >
          {options.map((option: OptionType, index: number) => (
            <MenuItem
              key={`${index}`}
              selected={selectionOption === option.value}
              disabled={option.disabled}
              onClick={() => {
                onSelected({ label: option.label, value: option.value });
                onClose();
              }}
            >
              {option.label || option.value} {option.icon}
            </MenuItem>
          ))}
        </Menu>
      </SelectWrapper>
    );
  }
);

export default Select;
