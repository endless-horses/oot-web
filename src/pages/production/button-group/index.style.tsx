import styled from 'styled-components';

interface ContainerProps {
  position?: 'default' | 'absolute';
}

export const Container = styled.div<ContainerProps>`
  background-color: #cdd1d9;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  ${({ position }) =>
    position === 'absolute' &&
    'position: absolute; bottom: 0; right: 0; height: 50px; background-color: #ffffff; width: 22%; margin: 30px;'}
`;
