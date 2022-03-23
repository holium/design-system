import React, { useRef, useImperativeHandle } from 'react';
import styled from 'styled-components';
import {
  OverflowProps,
  overflow,
  height,
  HeightProps,
  compose,
} from 'styled-system';
import {
  useDatepicker,
  MonthType,
  UseDatepickerProps,
  FormatFunction,
  dayLabelFormat as dayLabelFormatFn,
  weekdayLabelFormat as weekdayLabelFormatFn,
  monthLabelFormat as monthLabelFormatFn,
} from '@datepicker-react/hooks';
// import SelectedDate from '../SelectedDate';
import Month from './Month';
import { Grid, Box, Flex, IconButton } from '../../';
// import ResetDates from '../ResetDates';
// import NavButton from '../NavButton';
// import Close from '../Close';
// import ArrowIcon from '../../icons/ArrowIcon';
import DatepickerContext from './helpers/datePickerContext';
import { Icons, TextButton } from '../../..';

// const opacity0To100 = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

interface MonthGridProps extends HeightProps, OverflowProps {}
const composeMonthGridStyles = compose(overflow, height);

const MonthGrid = styled(Grid)<MonthGridProps>`
  ${composeMonthGridStyles}
`;

export interface DatepickerProps extends UseDatepickerProps {
  displayFormat?: string | FormatFunction;
  onClose?(): void;
  showResetDates?: boolean;
  showSelectedDates?: boolean;
  showClose?: boolean;
  vertical?: boolean;
  rtl?: boolean;
  initialVisibleMonth?: Date;
  dayLabelFormat?(date: Date): string;
  weekdayLabelFormat?(date: Date): string;
  monthLabelFormat?(date: Date): string;
  onDayRender?(date: Date): React.ReactNode;
  unavailableDates?: Date[];
}

export const DatePicker = (
  {
    startDate,
    endDate,
    minBookingDate,
    maxBookingDate,
    focusedInput,
    onDatesChange,
    dayLabelFormat,
    weekdayLabelFormat,
    monthLabelFormat,
    initialVisibleMonth,
    vertical = false,
    rtl = false,
    showResetDates = true,
    exactMinBookingDays = false,
    isDateBlocked = () => false,
    minBookingDays = 1,
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp,
    // displayFormat = 'MM/dd/yyyy',
    unavailableDates = [],
  }: DatepickerProps,
  ref?: React.Ref<unknown>
) => {
  const {
    activeMonths,
    isDateSelected,
    isFirstOrLastSelectedDate,
    isDateHovered,
    firstDayOfWeek,
    onDateSelect,
    onResetDates,
    goToPreviousMonths,
    goToNextMonths,
    numberOfMonths,
    hoveredDate,
    onDateHover,
    isDateFocused,
    focusedDate,
    onDateFocus,
    isDateBlocked: isDateBlockedFn,
  } = useDatepicker({
    startDate,
    endDate,
    focusedInput,
    onDatesChange,
    minBookingDate,
    maxBookingDate,
    minBookingDays,
    isDateBlocked,
    exactMinBookingDays,
    unavailableDates,
    initialVisibleMonth,
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp,
  });
  useImperativeHandle(ref, () => ({
    onDateSelect: (date: Date) => {
      onDateSelect(date);
    },
  }));
  const monthGridRef = useRef<HTMLDivElement>(null);

  function scrollTopToMonthGrid() {
    if (monthGridRef && monthGridRef.current && vertical) {
      monthGridRef.current.scrollTop = 0;
    }
  }

  function handleGoToNextMonth() {
    goToNextMonths();
    scrollTopToMonthGrid();
  }

  function handleGoToPreviousMonth() {
    goToPreviousMonths();
    scrollTopToMonthGrid();
  }

  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        // @ts-ignore
        isDateFocused,
        // @ts-ignore
        isDateSelected,
        // @ts-ignore
        isDateHovered,
        // @ts-ignore
        isFirstOrLastSelectedDate,
        // @ts-ignore
        onDateSelect,
        // @ts-ignore
        onDateFocus,
        // @ts-ignore
        onDateHover,
        // @ts-ignore
        isDateBlocked: isDateBlockedFn,
      }}
    >
      <Box position="relative">
        <Box flexDirection="column">
          <MonthGrid
            data-testid="MonthGrid"
            overflow="auto"
            gridTemplateColumns={
              vertical ? '1fr' : `repeat(${numberOfMonths}, 1fr)`
            }
            gridGap="0 32px"
            pr={rtl ? '1px' : '0'}
            ref={monthGridRef}
            onMouseLeave={() => {
              if (hoveredDate) {
                onDateHover(null);
              }
            }}
          >
            {activeMonths.map((month: MonthType) => (
              <Month
                key={`month-${month.year}-${month.month}`}
                year={month.year}
                month={month.month}
                firstDayOfWeek={firstDayOfWeek}
                // @ts-ignore
                dayLabelFormat={dayLabelFormat || dayLabelFormatFn}
                weekdayLabelFormat={weekdayLabelFormat || weekdayLabelFormatFn}
                monthLabelFormat={monthLabelFormat || monthLabelFormatFn}
              />
            ))}
          </MonthGrid>
          {showResetDates && (
            <Flex flex="1" justifyContent="flex-end" m="2px 8px">
              <TextButton onClick={onResetDates}>Reset</TextButton>
            </Flex>
          )}
        </Box>
        <Flex alignItems="center">
          <>
            <Box
              position="absolute"
              top="4px"
              left="8px"
              right="unset"
              bottom="unset"
            >
              <IconButton size={2} onClick={handleGoToPreviousMonth}>
                <Icons.AngleLeft />
              </IconButton>
            </Box>
            <Box
              position="absolute"
              top="4px"
              left="unset"
              right="8px"
              bottom="unset"
            >
              <IconButton size={2} onClick={handleGoToNextMonth}>
                <Icons.AngleRight />
              </IconButton>
            </Box>
          </>
        </Flex>
      </Box>
    </DatepickerContext.Provider>
  );
};

export default React.forwardRef(DatePicker);
