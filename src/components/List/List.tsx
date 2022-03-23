import React from 'react';

export type VirtualizedListProps = {
  id?: string;
  style?: any;
  numItems: number;
  itemHeight?: number;
  renderItem: any;
};
// TODO make this efficient and dont use a lib
export const VirtualizedList = (props: VirtualizedListProps) => {
  const { id, style, numItems, itemHeight, renderItem } = props;

  const items = [];
  for (let i = 0; i < numItems; i++) {
    items.push(
      renderItem({
        index: i,
        key: `${id}-index-${i}`,
        style: {
          position: 'absolute',
          top: `${i * itemHeight}px`,
          width: '100%',
        },
      })
    );
  }

  return (
    <div className="scroll" style={{ overflowY: 'scroll', ...style }}>
      <div
        className="inner"
        style={{ position: 'relative', height: 'inherit' }}
      >
        {items}
      </div>
    </div>
  );
};

// import { FixedSizeList as List } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';
//  <div style={{ height: 'inherit', width: '100%', ...style, overflow: 'auto' }}>
//    <AutoSizer>
//      {({ height, width }) => (
//        <List
//          height={height}
//          itemCount={numItems}
//          itemSize={itemHeight}
//          width={width}
//        >
//          {({ index, style }) =>
//            renderItem({
//              index: index,
//              key: `index-${index}`,
//              style,
//            })
//          }
//        </List>
//      )}
//    </AutoSizer>
//  </div>;
