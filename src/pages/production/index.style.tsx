import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .content_cntr {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content {
      flex-grow: 1;
    }
    .footer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .side_cntr {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 50px;
      }
    }
  }
  .row {
    flex-direction: row;
  }
`;
