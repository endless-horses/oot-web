import styled from 'styled-components';

interface ContainerProps {
  type?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  .item_image {
    border: 1px solid #000000;
    width: ${(props) => {
      switch (props.type) {
        case 'small':
          return '100px';
        default:
          return '120px';
      }
    }};
    height: ${(props) => {
      switch (props.type) {
        case 'small':
          return '100px';
        default:
          return '120px';
      }
    }};
  }
  .item_name {
    margin-top: 10px;
    text-align: center;
    width: ${(props) => {
      switch (props.type) {
        case 'small':
          return '100px';
        default:
          return '120px';
      }
    }};
  }
`;
