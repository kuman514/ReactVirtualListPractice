import React, { CSSProperties } from 'react';
import styled from 'styled-components';

interface RootProps {
  isOdd: boolean;
}

const Root = styled.div<RootProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  background-color: ${({ isOdd }) => (isOdd ? 'beige' : 'white')};
`;

interface Props {
  index: number;
  style: CSSProperties;
}

function Item({ index, style }: Props) {
  return (
    <Root isOdd={index % 2 === 1} style={style}>
      Row {index}
    </Root>
  );
}

export default Item;
