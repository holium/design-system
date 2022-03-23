import React, { FC } from 'react';
import { useMonth } from '@datepicker-react/hooks';
import Day from './Day';
import { Grid, Flex, Box, Text } from '../..';

type MonthProps = {
  year: number;
  month: number;
  firstDayOfWeek: any;
};

export const Month: FC<MonthProps> = ({
  year,
  month,
  firstDayOfWeek,
}: MonthProps) => {
  const { days, weekdayLabels, monthLabel } = useMonth({
    year,
    month,
    firstDayOfWeek,
  });

  return (
    <Flex flexDirection="column">
      <Box m="6px 0 16px" justifyContent="center">
        <Text variant="h6" fontWeight="500">
          {monthLabel}
        </Text>
      </Box>
      <Grid
        gridTemplateColumns="repeat(7, 1fr)"
        justifyContent="center"
        mb="4px"
        fontSize={1}
      >
        {weekdayLabels.map((dayLabel) => (
          <Text variant="body" textAlign="center" opacity={0.7} key={dayLabel}>
            {dayLabel}
          </Text>
        ))}
      </Grid>
      <Grid gridTemplateColumns="repeat(7, 1fr)" justifyContent="center">
        {days.map((day, index) => {
          if (typeof day === 'object') {
            return (
              <Day
                date={day.date}
                key={day.date.toString()}
                dayLabel={day.dayLabel}
              />
            );
          }

          return <div key={index} />;
        })}
      </Grid>
    </Flex>
  );
};

export default Month;
