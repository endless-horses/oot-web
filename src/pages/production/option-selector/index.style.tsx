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
  gap: 10px;
  padding: 0 50px;
  margin-right: ${(props) => {
    return props.type === 'circle' ? '50px' : '0px';
  }};
  border-radius: ${(props) => {
    if (props.type === 'circle') {
      return '25px';
    } else {
      return 'none';
    }
  }};
  .item_group {
    text-align: left;
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
  .divider {
    width: 100%;
    height: 1px;
    background-color: black;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: left;
  font-size: 30px;
  font-weight: 600;
`;
