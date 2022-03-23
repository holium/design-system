import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Input, HTMLSelect, FlexProps } from '../../..';
import { BorderProps } from 'styled-system';
import { ThemeType } from '../../../theme';
import { toISOLocal } from './helpers/timezone';

type TimeInputProps = FlexProps & BorderProps & { theme?: ThemeType };

export const TimeInputBox: any = styled.form<TimeInputProps>({
  display: 'flex',
  boxSizing: 'border-box',
  // @ts-ignore
  flex: (props: FlexProps) => props.fx,
  // @ts-ignore
  gap: (props: FlexProps) => props.gap,
  //@ts-ignore
  alignItems: (props: FlexProps) => (props.itemsCenter ? 'center' : 'initial'),
  //@ts-ignore
  justifyContent: (props: FlexProps) =>
    props.justifyCenter ? 'center' : 'initial',
  border: `1px solid ${(props: TimeInputProps) =>
    props.theme.colors.ui.input.borderColor}`,
});

type DayProps = {
  onTimeSelect: (time: Date) => void;
  is24?: boolean;
  showSeconds?: boolean;
  date: Date;
};

export const TimeInput: FC<DayProps> = ({
  onTimeSelect,
  date,
  showSeconds,
  is24,
}: DayProps) => {
  const now = date ? new Date(date) : new Date();
  // Get refs
  let hrRef: React.RefObject<HTMLInputElement> = React.createRef();
  let minRef: React.RefObject<HTMLInputElement> = React.createRef();
  let secRef: React.RefObject<HTMLInputElement> = React.createRef();
  let amPmRef: React.RefObject<HTMLSelectElement> = React.createRef();

  let withPmAm: string = now.toLocaleTimeString('default', {
    // en-US can be set to 'default' to use user's browser settings
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24,
  });

  const timeArr = withPmAm.split(':');
  const secondPmAm = timeArr[2].split(' ');

  const [timeObj, setTimeObj] = useState({
    hr: timeArr[0],
    min: timeArr[1],
    sec: secondPmAm[0],
    amPm: secondPmAm[1],
  });

  // return useMemo(() => {
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  };

  const handleFormChange = (event: any) => {
    let { name, value }: { name: string; value: string } = event.target;
    setTimeObj({ ...timeObj, [name]: value.toString() });
    if (name === 'amPm') {
      amPmRef.current.blur();
    }
  };

  const handleFormBlur = (_event: any) => {
    // Set amPm
    if (_event.target.name === 'amPm') timeObj.amPm = _event.target.value;

    // Handle hour validation
    const intHr = parseInt(timeObj.hr);
    if (intHr < 10 && timeObj.hr.length === 1) {
      timeObj.hr = `0${timeObj.hr}`;
    } else if (intHr > 12 && !is24) {
      timeObj.hr = '12';
    } else if (intHr > 23 && is24) {
      timeObj.hr = '23';
    } else if (intHr < 0) {
      timeObj.hr = '01';
    }
    hrRef.current.value = timeObj.hr;

    // Handle minute validation
    const intMin = parseInt(timeObj.min);
    if (intMin < 10 && timeObj.min.length === 1) {
      timeObj.min = `0${timeObj.min}`;
    } else if (intMin > 59) {
      timeObj.min = '59';
    } else if (intMin < 0) {
      timeObj.min = '00';
    }
    minRef.current.value = timeObj.min;

    if (showSeconds) {
      // Handle second validation
      const intSec = parseInt(timeObj.sec);
      if (intSec < 10 && timeObj.sec.length === 1) {
        timeObj.sec = `0${timeObj.sec}`;
      } else if (intSec > 59) {
        timeObj.sec = '59';
      } else if (intSec < 0) {
        timeObj.sec = '00';
      }
      secRef.current.value = timeObj.sec;
    }

    const newDate = new Date(
      `${toISOLocal(now).split('T')[0]} ${timeObj.hr}:${timeObj.min}:${
        timeObj.sec
      } ${timeObj.amPm}`
    );

    onTimeSelect(newDate);
  };
  return (
    <TimeInputBox
      px="12px"
      mt={1}
      mb={2}
      gap="4px"
      justifyCenter
      itemsCenter
      fx={1}
      onChange={(evt) => handleFormChange(evt)}
      onBlur={(evt) => handleFormBlur(evt)}
    >
      <Input
        ref={hrRef}
        min="1"
        name="hr"
        max={is24 ? '24' : '12'}
        required
        width="30px"
        type="number"
        defaultValue={timeObj.hr}
        onKeyPress={handleKeyPress}
      />
      :
      <Input
        ref={minRef}
        required
        name="min"
        min="0"
        max="59"
        width="30px"
        type="number"
        defaultValue={timeObj.min}
        onKeyPress={handleKeyPress}
      />
      {showSeconds && (
        <>
          :
          <Input
            ref={secRef}
            required
            name="seconds"
            bg="transparent"
            width="30px"
            type="number"
            defaultValue={timeObj.sec}
            onKeyPress={handleKeyPress}
          />
        </>
      )}
      {!is24 && (
        <HTMLSelect
          ref={amPmRef}
          name="amPm"
          ml="8px"
          style={{ width: '60px' }}
          defaultValue={timeObj.amPm}
          // onKeyPress={handleKeyPress} todo make tab+enter work
        >
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </HTMLSelect>
      )}
    </TimeInputBox>
  );
  // }, [timeObj]);
};

export default TimeInput;
