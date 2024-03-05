import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80vh;
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  .sumary {
    padding: 0 100px;
    width: 100%;
    border-left: thin solid #969696;
    .t1 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      font-size: 30px;
      font-weight: bold;
      .small {
        font-size: 20px;
        text-align: right;
      }
    }
    .t2 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 25px;
      font-weight: bold;
    }
    .t3 {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      color: gray;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
