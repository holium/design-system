import React, { FC, useRef, useContext } from 'react';
import { useDay } from '@datepicker-react/hooks';
import DatepickerContext from './helpers/datePickerContext';
import { Button, Box } from '../../..';

type DayProps = {
  dayLabel: string;
  date: Date;
};

const getColor = (
  isSelected: boolean,
  isSelectedStartOrEnd: boolean,
  isWithinHoverRange: boolean,
  isDisabled: boolean
) => {
  return ({
    selectedFirstOrLastColor,
    normalColor,
    selectedColor,
    rangeHoverColor,
    disabledColor,
  }) => {
    if (isSelectedStartOrEnd) {
      return selectedFirstOrLastColor;
    } else if (isSelected) {
      return selectedColor;
    } else if (isWithinHoverRange) {
      return rangeHoverColor;
    } else if (isDisabled) {
      return disabledColor;
    } else {
      return normalColor;
    }
  };
};

export const Day: FC<DayProps> = ({ dayLabel, date }: DayProps) => {
  const dayRef = useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatepickerContext);
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef,
  });

  if (!dayLabel) {
    return <div />;
  }

  const getColorFn = getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate
  );

  return (
    <Button
      ref={dayRef}
      variant="transparent"
      onClick={() => {
        onClick();
      }}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      p="0px"
      border="1px solid transparent"
      color={getColorFn({
        selectedFirstOrLastColor: 'brand.primary',
        normalColor: 'text.primary',
        selectedColor: 'text.secondary',
        rangeHoverColor: 'text.secondary',
        disabledColor: 'text.disabled',
      })}
      background={getColorFn({
        selectedFirstOrLastColor: 'brand.primary',
        normalColor: 'bg.secondary',
        selectedColor: 'brand.muted',
        rangeHoverColor: 'brand.muted',
        disabledColor: 'bg.secondary',
      })}
    >
      <Box p="8px">{dayLabel}</Box>
    </Button>
  );
};

export default Day;
