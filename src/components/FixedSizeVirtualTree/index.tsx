import React from 'react';
import { FixedSizeTree } from 'react-vtree';

import { TreeNode } from '^/types';

const treeNodes: TreeNode[] = [
  {
    name: 'Root #1',
    id: 'root-1',
    children: [
      {
        children: [
          { id: 'child-2', name: 'Child #2' },
          { id: 'child-3', name: 'Child #3' },
        ],
        id: 'child-1',
        name: 'Child #1',
      },
      {
        children: [{ id: 'child-5', name: 'Child #5' }],
        id: 'child-4',
        name: 'Child #4',
      },
    ],
  },
  {
    name: 'Root #2',
    id: 'root-2',
  },
];

function* treeWalker() {
  /**
   * @TODO
   * - Learn yield and function* first.
   * - Follow these steps. (from https://github.com/Lodin/react-vtree#usage)
   *    1. Define root nodes of the tree
   *    2. Get parent node back
   *    3. Yield children
   */
}

interface Props {
  viewWidth: number;
  viewHeight: number;
  heightPerItem: number;
}

function FixedSizeVirtualTree({ viewWidth, viewHeight, heightPerItem }: Props) {
  return (
    <FixedSizeTree
      width={viewWidth}
      height={viewHeight}
      itemSize={heightPerItem}
      treeWalker={() => {}}
    />
  );
}

export default FixedSizeVirtualTree;
