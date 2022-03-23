import React from 'react';
import { MenuItem } from '../';
import { VirtualizedList } from './List';

export default {
  title: 'Components/List',
  component: VirtualizedList,
  parameters: {
    // docs: {
    //   page: () => (
    //     <>
    //       <Title />
    //       <Description>Building block of layouts. Creates a box-model context</Description>
    //       <Props of={Box} />
    //     </>
    //   ),
    // },
  },
};

const items = [
  { name: 'one' },
  { name: 'two' },
  { name: 'three' },
  { name: 'four' },
  { name: 'five' },
  { name: 'six' },
];

export const Default = (args?: any) => (
  <div style={{ height: 200 }}>
    <VirtualizedList
      itemHeight={40}
      numItems={items.length}
      renderItem={({ index }) => {
        const i = items[index];
        return (
          <div
            key={i.name}
            style={{
              height: 40,
              width: 150,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
            className="item"
          >
            <MenuItem label={i.name} />
          </div>
        );
      }}
    />
  </div>
);
