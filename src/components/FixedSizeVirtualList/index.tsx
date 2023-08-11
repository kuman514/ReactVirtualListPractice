import React from 'react';
import { FixedSizeList } from 'react-window';

import Item from '^/components/Item';

interface Props {
  viewWidth: number;
  viewHeight: number;
  itemCount: number;
  heightPerItem: number;
}

function FixedSizeVirtualList({
  viewWidth,
  viewHeight,
  itemCount,
  heightPerItem,
}: Props) {
  return (
    <FixedSizeList
      width={viewWidth}
      height={viewHeight}
      itemCount={itemCount}
      itemSize={heightPerItem}
    >
      {Item}
    </FixedSizeList>
  );
}

export default FixedSizeVirtualList;
