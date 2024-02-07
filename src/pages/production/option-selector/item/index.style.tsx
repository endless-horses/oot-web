import styled from 'styled-components';

interface ItemImageProps {
  type?: 'square' | 'circle';
}

export const Container = styled.div`
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
  .selected {
    border: 3px solid #0000ff;
  }
`;

export const ItemImage = styled.img<ItemImageProps>`
  border: ${(props) => {
    if (props.type === 'circle') {
      return 'none';
    } else {
      return '1px solid #000000;';
    }
  }};
  border-radius: ${(props) => {
    if (props.type === 'circle') {
      return '50%';
    } else {
      return 'none;';
    }
  }};
  width: ${(props) => {
    if (props.type === 'circle') {
      return '80px';
    } else {
      return '120px;';
    }
  }};
  height: ${(props) => {
    if (props.type === 'circle') {
      return '80px';
    } else {
      return '120px;';
    }
  }};
  margin: ${(props) => {
    if (props.type === 'circle') {
      return '10px 18px';
    }
  }};
`;

export const ItemName = styled.p`
  background-color: rgba(255, 255, 255, 0);
  margin: 10px 0 -10px 0;
  width: 120px;
  font-size: 20px;
  text-align: center;
`;
