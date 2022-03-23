import React, { FC, useRef } from 'react';
import {
  START_DATE,
  FormatFunction,
  // getInputValue,
  OnDatesChangeProps,
  FirstDayOfWeek,
  // getInputValue,
} from '@datepicker-react/hooks';
import { Input, Box, Icons, Menu, useMenu } from '../../';
import DatePicker from './DatePicker';

export interface OnDateChangeProps {
  date: Date | null;
  showDatepicker: boolean;
}

export interface DateSingleInputProps {
  date: Date | null;
  tabIndex?: number;
  minBookingDate?: Date;
  maxBookingDate?: Date;
  numberOfMonths?: number;
  firstDayOfWeek?: FirstDayOfWeek;
  displayFormat?: string | FormatFunction;
  showCalendarIcon?: boolean;
  showResetDate?: boolean;
  showClose?: boolean;
  placement?: 'top' | 'bottom';
  initialVisibleMonth?: Date;
  onDateChange: (data: OnDateChangeProps) => void;
  onFocusChange: (focusInput: boolean) => void;
  isDateBlocked?: (date: Date) => boolean;
  onClose?: () => void;
  dayLabelFormat?: (date: Date) => string;
  weekdayLabelFormat?: (date: Date) => string;
  monthLabelFormat?: (date: Date) => string;
  onDayRender?: (date: Date) => React.ReactNode;
  inputId?: string;
  unavailableDates?: Date[];
}

export const DateSingleInput: FC<DateSingleInputProps> = ({
  date,
  tabIndex,
  minBookingDate,
  maxBookingDate,
  firstDayOfWeek,
  onFocusChange,
  // onInputChange,
  // inputValue,
  onDateChange,
  dayLabelFormat,
  weekdayLabelFormat,
  monthLabelFormat,
  onDayRender,
  initialVisibleMonth,
  numberOfMonths = 1,
  showClose = true,
  showResetDate = true,
  isDateBlocked = () => false,
  onClose = () => {},
  // showCalendarIcon = true,
  displayFormat = 'MM/dd/yyyy',
  // placement = 'bottom',
  inputId = 'startDate',
  unavailableDates = [],
}: DateSingleInputProps) => {
  const ref = useRef(null);
  let show: boolean, setShow: any;
  const dateInputRef = React.useRef(null);
  let config = useMenu(dateInputRef, {
    orientation: 'bottom',
    padding: 6,
    // menuWidth,
  });
  show = config.show;
  setShow = config.setShow;

  const handleDatepickerClose = () => {
    onClose();
    onFocusChange(false);
  };

  const onDatesChange = ({ focusedInput, startDate }: OnDatesChangeProps) => {
    console.log('input changed', date);
    setShow(false);
    onDateChange({
      showDatepicker: focusedInput !== null,
      date: startDate,
    });
  };

  const handleInputChange = (date: Date) => {
    console.log('input changed', date);
    // @ts-ignore
    onDateChange({
      showDatepicker: false,
      date: date,
    });
    if (ref && ref.current && ref.current.onDateSelect) {
      // @ts-ignore
      ref.current.onDateSelect(date);
    }
  };
  return (
    <Box position="relative">
      <Input
        readOnly
        id={inputId}
        ref={dateInputRef}
        tabIndex={tabIndex}
        leftIcon={<Icons.Calendar style={{ opacity: 0.5 }} />}
        rightIcon={<Icons.ArrowDropdown size={2} style={{ opacity: 0.5 }} />}
        ariaLabel="Select date"
        placeholder="Select date"
        type="date"
        value={date ? date.toISOString().split('T')[0] : ''}
        onClick={() => onFocusChange(true)}
        onChange={handleInputChange}
        // @ts-ignore
        // dateFormat={'MM-dd-yyyy'}
      />
      <Menu
        preventDefault={false}
        id="date-picker-single"
        style={{ top: 34 + 2, minWidth: 225, width: 'max-content' }}
        isOpen={show}
        onClose={() => setShow(false)}
      >
        {
          <DatePicker
            ref={ref}
            exactMinBookingDays
            minBookingDays={1}
            onClose={handleDatepickerClose}
            startDate={date}
            endDate={date}
            minBookingDate={minBookingDate}
            maxBookingDate={maxBookingDate}
            firstDayOfWeek={firstDayOfWeek}
            numberOfMonths={numberOfMonths}
            // @ts-ignore
            focusedInput={show ? START_DATE : null}
            displayFormat={displayFormat}
            onDatesChange={onDatesChange}
            isDateBlocked={isDateBlocked}
            showResetDates={showResetDate}
            showSelectedDates={false}
            showClose={showClose}
            dayLabelFormat={dayLabelFormat}
            weekdayLabelFormat={weekdayLabelFormat}
            monthLabelFormat={monthLabelFormat}
            onDayRender={onDayRender}
            unavailableDates={unavailableDates}
            initialVisibleMonth={initialVisibleMonth}
          />
        }
      </Menu>
    </Box>
  );
};

export default DateSingleInput;
