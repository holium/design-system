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

// type State = {
//   isOpen: boolean;
// };

// // TODO change this from a class to a function with hooks
// export class Select extends React.PureComponent<IProps, State> {
//   static defaultProps = {};

//   constructor(props: any) {
//     super(props);
//     this.state = {
//       isOpen: false,
//     };
//     // this.handleChange = this.handleChange.bind(this)
//     this.toggleIsOpen = this.toggleIsOpen.bind(this);
//     this.onClose = this.onClose.bind(this);
//   }

//   // handleChange(event) {
//   //   const { onSelected } = this.props
//   //   onSelected(event.target.value)
//   // }

//   toggleIsOpen = () => {
//     const { isOpen } = this.state;
//     this.setState({
//       isOpen: !isOpen,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       isOpen: false,
//     });
//   };

//   render() {
//     const {
//       id,
//       style,
//       small,
//       large,
//       // gray,
//       tabIndex,
//       placeholder,
//       options,
//       selectionOption,
//       onSelected,
//     } = this.props;
//     const selectedFull = options.find(
//       (option: OptionType) => option.value === selectionOption
//     );
//     const { isOpen } = this.state;
//     return (
//       <SelectWrapper style={style}>
//         {/* @ts-ignore */}
//         <Input
//           tabIndex={tabIndex}
//           isPlaceholder={!selectionOption}
//           rightInteractive={false}
//           rightIcon={
//             <Icons.ArrowDropdown
//               size={2}
//               style={{ opacity: 0.5 }}
//               ml={'8px'}
//               color="text.primary"
//               aria-hidden
//             />
//           }
//           small={small}
//           large={large}
//           readOnly
//           value={selectedFull?.label}
//           placeholder={placeholder}
//           onClick={this.toggleIsOpen}
//         />
//         <Menu
//           id={id}
//           key={id}
//           style={{ marign: (style && style.margin) || 0, minWidth: 150 }}
//           isOpen={isOpen}
//           onClose={this.onClose}
//         >
//           {options.map((option: OptionType, index: number) => (
//             <MenuItem
//               key={`${index}`}
//               disabled={selectionOption === option.value}
//               onClick={() => {
//                 onSelected({ label: option.label, value: option.value });
//                 this.onClose();
//               }}
//             >
//               {option.label || option.value} {option.icon}
//             </MenuItem>
//           ))}
//         </Menu>
//         {/* <select value={selectionOption} onChange={this.handleChange}>
//           {placeholder && (
//             <option disabled value="">
//               {placeholder}
//             </option>
//           )}
//           {options.map((option: Option, index: number) => (
//             <option key={`${index}`} value={option.value}>
//               {option.label}
//             </option>
//           ))}
//         </select> */}
//       </SelectWrapper>
//     );
//   }
// }

// export default Select;

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
      <SelectWrapper style={style}>
        <Input
          ref={ref}
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
