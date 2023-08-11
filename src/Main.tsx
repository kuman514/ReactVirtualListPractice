import React from 'react';

import FixedSizeVirtualList from '^/components/FixedSizeVirtualList';

function Main() {
  return (
    <FixedSizeVirtualList
      viewWidth={300}
      viewHeight={500}
      itemCount={100000}
      heightPerItem={35}
    />
  );
}

export default Main;
