import React from 'react';
import { Grid, Button } from '..';
import { OptionType } from '../..';
import { InlineEdit } from '../Inputs/InlineEdit/InlineEdit';
import { ListHeader } from './ListHeader';

export default {
  title: 'Components/ListHeader',
  component: ListHeader,
};

const options = [
  { label: 'Active', value: 'active' },
  { label: 'Closed', value: 'closed' },
  { label: 'Ending Soon', value: 'ending soon' },
];

export const Default = (args?: any) => (
  <ListHeader
    title="Proposals"
    rightContent={<Button>Hello</Button>}
    options={options}
    onSelected={(option: OptionType) => console.log('selected', option)}
  />
);

export const EditableTitle = (args?: any) => (
  <ListHeader
    title={
      <InlineEdit
        variant="h4"
        pb={1}
        pt={1}
        fontWeight={600}
        placeholder="Enter title"
      />
    }
    options={options}
    onSelected={(option: OptionType) => console.log('selected', option)}
  />
);

export const StaticAndEdit = (args?: any) => (
  <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={16}>
    <ListHeader
      subtitle={{ patp: true, text: '~zod' }}
      title={
        <InlineEdit
          variant="h4"
          pb={1}
          pt={1}
          fontWeight={600}
          placeholder="Enter title"
        />
      }
      options={options}
      onSelected={(option: OptionType) => console.log('selected', option)}
    />
    <ListHeader
      title="My title"
      subtitle={{ patp: true, text: '~zod' }}
      options={options}
      onSelected={(option: OptionType) => console.log('selected', option)}
    />
  </Grid>
);
