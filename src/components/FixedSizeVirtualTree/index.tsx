import React, { CSSProperties } from 'react';
import { FixedSizeTree } from 'react-vtree';
import styled from 'styled-components';

import { NodeMeta, TreeData, TreeNode } from '^/types';

/**
 * I really don't know why they put version 3,
 * which is currently beta and not released in npm,
 * into the main branch (master) of https://github.com/Lodin/react-vtree
 *
 * I realized that I was using react-vtree version 2,
 * which is the latest version released in npm,
 * and I am following https://github.com/Lodin/react-vtree/tree/version/2
 */

let nodeId = 0;
function createNode(depth: number = 0): TreeNode {
  const node: TreeNode = {
    children: [],
    id: String(nodeId),
    name: `test-${nodeId}`,
  };

  nodeId += 1;

  if (depth === 5) {
    return node;
  }

  for (let i = 0; i < 10; i++) {
    node.children.push(createNode(depth + 1));
  }

  return node;
}
const rootNode = createNode();

function* treeWalker(refresh: boolean): Generator<string | TreeData> {
  const stack: NodeMeta[] = [];

  // Remember all the necessary data of the first node in the stack.
  stack.push({
    nestingLevel: 0,
    node: rootNode,
  });

  // Walk through the tree until we have no nodes available.
  while (stack.length !== 0) {
    const {
      node: { children, id, name },
      nestingLevel,
    } = stack.pop()!;

    // Here we are sending the information about the node to the Tree component
    // and receive an information about the openness state from it. The
    // `refresh` parameter tells us if the full update of the tree is requested;
    // basing on it we decide to return the full node data or only the node
    // id to update the nodes order.
    const isOpened = yield refresh
      ? {
          id,
          isLeaf: children.length === 0,
          isOpenByDefault: true,
          name,
          nestingLevel,
        }
      : id;

    if (children.length !== 0 && isOpened) {
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push({
          nestingLevel: nestingLevel + 1,
          node: children[i],
        });
      }
    }
  }
}

const NodeRoot = styled.div`
  display: flex;
  flex-direction: row;
`;

interface NodeProps {
  data: TreeData;
  isOpen: boolean;
  style: CSSProperties;
  toggle: React.MouseEventHandler<HTMLButtonElement>;
}

// Node component receives all the data we created in the `treeWalker` +
// internal openness state (`isOpen`), function to change internal openness
// state (`toggle`) and `style` parameter that should be added to the root div.
function Node({
  data: { isLeaf, name, nestingLevel },
  isOpen,
  style,
  toggle,
}: NodeProps) {
  return (
    <NodeRoot style={style}>
      <div style={{ width: `${25 * nestingLevel}px` }} />
      <div>{name}</div>
      {!isLeaf && (
        <button type="button" onClick={toggle}>
          {isOpen ? '-' : '+'}
        </button>
      )}
    </NodeRoot>
  );
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
      treeWalker={treeWalker}
    >
      {Node}
    </FixedSizeTree>
  );
}

export default FixedSizeVirtualTree;
