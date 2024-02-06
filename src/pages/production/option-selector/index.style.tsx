import styled from 'styled-components';

interface ContainerProps {
  type: 'square' | 'circle';
}

export const Container = styled.div<ContainerProps>`
  height: 230px;
  background-color: #cdd1d9;
  display: flex;
  align-items: center;
  gap: 50px;
  padding-left: 50px;
  border-radius: ${(props) => {
    if (props.type === 'circle') {
      return '25px';
    } else {
      return 'none';
    }
  }};
`;
