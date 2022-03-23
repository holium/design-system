import React, { FC, useRef } from 'react';
import {
  START_DATE,
  FormatFunction,
  // getInputValue,
  OnDatesChangeProps,
  FirstDayOfWeek,
  // getInputValue,
} from '@datepicker-react/hooks';
import { Input, Box, Icons, Menu, useMenu } from '../..';
import DateTimePicker from './TimePicker';
import { toISOLocal } from './helpers/timezone';

export interface OnDateChangeProps {
  date: Date | null;
  showDatepicker: boolean;
}

export interface DateTimeInputProps {
  timePicker?: boolean;
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
  hasSeconds?: boolean;
}

export const DateTimeInput: FC<DateTimeInputProps> = ({
  timePicker,
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
  displayFormat = 'MM/dd/yyyy',
  hasSeconds = false,
  placement = 'bottom',
  inputId = 'startDate',
  unavailableDates = [],
}: DateTimeInputProps) => {
  const ref = useRef(null);
  let show: boolean, setShow: any;
  const dateInputRef = React.useRef(null);
  let config = useMenu(dateInputRef, {
    orientation: placement,
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
    // console.log(date, startDate);
    onDateChange({
      showDatepicker: focusedInput !== null,
      date: startDate,
    });
  };

  const handleInputChange = (date: Date) => {
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

  let timeStr: string;
  const nowSplit = date
    ? toISOLocal(date).split('T')
    : toISOLocal(new Date()).split('T');
  if (timePicker) {
    const timeSplit = nowSplit[1].split(':');
    timeStr = `${nowSplit[0]}T${timeSplit[0]}:${timeSplit[1]}`;
    if (hasSeconds) timeStr = `${timeStr}:${timeSplit[2].split('.')[0]}`;
  } else {
    timeStr = `${nowSplit[0]}`;
  }

  return (
    <Box position="relative">
      <Input
        readOnly
        id={inputId}
        ref={dateInputRef}
        tabIndex={tabIndex}
        leftIcon={<Icons.Calendar style={{ opacity: 0.5 }} />}
        // rightIcon={<Icons.ArrowDropdown size={2} style={{ opacity: 0.5 }} />}
        ariaLabel="Select date"
        placeholder="Select date"
        type={timePicker ? 'datetime-local' : 'date'}
        value={timeStr}
        onClick={() => onFocusChange(true)}
        onChange={handleInputChange}
        // @ts-ignore
        dateFormat={'MM-dd-yyyy hh:mm'}
      />
      <Menu
        preventDefault={false}
        id="date-picker-single"
        style={{
          top: 34 + 2,
          minWidth: 225,
          width: 'max-content',
          paddingTop: 8,
        }}
        isOpen={show}
        onClose={() => setShow(false)}
      >
        {
          <DateTimePicker
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

export default DateTimeInput;
