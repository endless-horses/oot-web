import styled from 'styled-components';

interface ContainerProps {
  type?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  display: flow-root;
  margin-left: 30px;
  margin-top: 15px;
  .title {
    margin-left: 30px;
    font-size: 25px;
    font-weight: 600;
  }
  .item {
    margin-top: 10px;
    margin-left: 30px;
    margin-right: 10px;
    float: left;
  }
`;
