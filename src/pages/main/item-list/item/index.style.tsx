import styled from 'styled-components';

interface ContainerProps {
  type?: 'square' | 'circle';
}

export const Container = styled.div<ContainerProps>`
  .item_image {
    border: ${(props) => {
      if (props.type === 'circle') {
        return 'none';
      } else {
        return '1px solid #000000;';
      }
    }};
    width: ${(props) => {
      if (props.type === 'circle') {
        return '50px';
      } else {
        return '80px;';
      }
    }};
    height: ${(props) => {
      if (props.type === 'circle') {
        return '50px';
      } else {
        return '80px;';
      }
    }};
    margin-top: ${(props) => {
      if (props.type === 'circle') {
        return '15px';
      }
    }};
  }
  .item_name {
    margin-top: 10px;
    text-align: center;
  }
`;
