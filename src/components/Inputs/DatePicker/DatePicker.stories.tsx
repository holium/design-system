import React from 'react';

import { Description, Props, Title } from '@storybook/addon-docs/blocks';

import DatePicker, { DateSingleInputProps } from './SingleDatePicker';
import DateTimePicker from './DateTimePicker';

export default {
  title: 'Components/Inputs/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      a11y: {
        config: {
          rules: [{ id: 'label', enabled: false }],
        },
      },
      page: () => (
        <>
          <Title />
          <Description>Form input component</Description>
          <Props of={DatePicker} />
        </>
      ),
    },
  },
};

const Template = (args?: DateSingleInputProps) => (
  <div>
    <DatePicker
      onDateChange={(date: any) => console.log('date ', date)}
      onFocusChange={() => true}
      {...args}
    />
  </div>
);

export const SingleDatePicker = Template.bind({});
SingleDatePicker.args = {
  date: new Date(),
  minBookingDate: new Date(),
};

const Template2 = (args?: DateSingleInputProps) => (
  <div>
    <DateTimePicker
      onDateChange={(date: any) => console.log('date ', date)}
      onFocusChange={() => true}
      {...args}
    />
  </div>
);

export const DateTime = Template2.bind({});
DateTime.args = {
  date: new Date(),
  timePicker: true,
  minBookingDate: new Date(),
};
