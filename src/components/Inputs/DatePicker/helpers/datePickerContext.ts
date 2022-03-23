import React from 'react';

export const datepickerContextDefaultValue = {
  focusedDate: null,
  isDateFocused: (_date: Date) => false,
  isDateSelected: (_date: Date) => false,
  isDateHovered: (_date: Date) => false,
  isDateBlocked: (_date: Date) => false,
  isFirstOrLastSelectedDate: (_date: Date) => false,
  onDateFocus: (_date: Date) => {},
  onDateHover: (_date: Date) => {},
  onDateSelect: (_date: Date) => {},
};

export default React.createContext(datepickerContextDefaultValue);
