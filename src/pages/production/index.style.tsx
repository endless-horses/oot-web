import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .content {
    flex-grow: 1;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
