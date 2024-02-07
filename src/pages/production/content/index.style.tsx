import styled from 'styled-components';

interface ContainerProps {
  direction?: 'row' | 'column';
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: space-around;
  align-items: center;
  gap: 50px;
`;
