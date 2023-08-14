import { FixedSizeNodeData } from 'react-vtree';

export interface TreeNode {
  id: string;
  name: string;
  children: TreeNode[];
}

export interface TreeData extends FixedSizeNodeData {
  isLeaf: boolean;
  name: string;
  nestingLevel: number;
}

export interface NodeMeta {
  nestingLevel: number;
  node: TreeNode;
}
