import styled from 'styled-components';

interface ContainerProps {
  type?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  display: flow-root;
  margin: 20px 30px;
  .title {
    margin-left: 30px;
    font-size: 25px;
    font-weight: 600;
  }
  .item {
    margin: 10px 30px;
    float: left;
  }
`;
