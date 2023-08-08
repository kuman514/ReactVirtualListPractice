import React, { CSSProperties } from 'react';
import styled from 'styled-components';
import { FixedSizeList } from 'react-window';

interface RenderedItemRootProps {
  isOdd: boolean;
}

const RenderedItemRoot = styled.div<RenderedItemRootProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  background-color: ${({ isOdd }) => (isOdd ? 'beige' : 'white')};
`;

interface RenderedItemProps {
  index: number;
  style: CSSProperties;
}

function RenderedItem({ index, style }: RenderedItemProps) {
  return (
    <RenderedItemRoot isOdd={index % 2 === 1} style={style}>
      Row {index}
    </RenderedItemRoot>
  );
}

function Main() {
  return (
    <FixedSizeList width={300} height={500} itemCount={10000} itemSize={35}>
      {RenderedItem}
    </FixedSizeList>
  );
}

export default Main;
