import styled from 'styled-components';

interface ContainerProps {
  type: 'square' | 'circle';
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: ${(props) => {
    if (props.type === 'circle') {
      return '300px';
    } else {
      return '230px';
    }
  }};
  background-color: #cdd1d9;
  align-items: center;
  gap: 20px;
  padding-left: 50px;
  border-radius: ${(props) => {
    if (props.type === 'circle') {
      return '25px';
    } else {
      return 'none';
    }
  }};
  .item_group {
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 30px;
  font-weight: 600;
`;
