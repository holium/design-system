import React from 'react';
import { CSSProperties } from 'styled-components';

import { Menu, MenuItem, Icons, Input } from '../../';
import { SelectWrapper } from './Select.styles';

export type OptionType = {
  label: string;
  value: string;
  icon?: any;
  disabled?: boolean;
};

type IProps = {
  id: string;
  small?: boolean;
  tabIndex?: number;
  large?: boolean;
  gray?: boolean;
  style?: CSSProperties;
  placeholder?: string;
  selectionOption: string;
  options: Array<OptionType>;
  onSelected: (value: OptionType) => any;
};

type State = {
  isOpen: boolean;
};

// TODO change this from a class to a function with hooks
export class Select extends React.PureComponent<IProps, State> {
  static defaultProps = {};

  constructor(props: any) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // this.handleChange = this.handleChange.bind(this)
    this.toggleIsOpen = this.toggleIsOpen.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  // handleChange(event) {
  //   const { onSelected } = this.props
  //   onSelected(event.target.value)
  // }

  toggleIsOpen = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };

  onClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  render() {
    const {
      id,
      style,
      small,
      large,
      // gray,
      tabIndex,
      placeholder,
      options,
      selectionOption,
      onSelected,
    } = this.props;
    const selectedFull = options.find(
      (option: OptionType) => option.value === selectionOption
    );
    const { isOpen } = this.state;
    return (
      <SelectWrapper style={style}>
        {/* @ts-ignore */}
        <Input
          tabIndex={tabIndex}
          isPlaceholder={!selectionOption}
          rightInteractive={false}
          rightIcon={
            <Icons.ArrowDropdown
              size={2}
              style={{ opacity: 0.5 }}
              ml={'8px'}
              color="text.primary"
              aria-hidden
            />
          }
          small={small}
          large={large}
          readOnly
          value={selectedFull?.label}
          placeholder={placeholder}
          onClick={this.toggleIsOpen}
        />
        <Menu
          id={id}
          key={id}
          style={{ marign: (style && style.margin) || 0 }}
          isOpen={isOpen}
          onClose={this.onClose}
        >
          {options.map((option: OptionType, index: number) => (
            <MenuItem
              key={`${index}`}
              disabled={selectionOption === option.value}
              onClick={() => {
                onSelected({ label: option.label, value: option.value });
                this.onClose();
              }}
            >
              {option.label || option.value} {option.icon}
            </MenuItem>
          ))}
        </Menu>
        {/* <select value={selectionOption} onChange={this.handleChange}>
          {placeholder && (
            <option disabled value="">
              {placeholder}
            </option>
          )}
          {options.map((option: Option, index: number) => (
            <option key={`${index}`} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}
      </SelectWrapper>
    );
  }
}

export default Select;
