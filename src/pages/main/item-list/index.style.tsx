import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 88.6vh;

  .flex_cntr {
    display: flex;
    .item_group {
      border-right: thin solid #969696;
      &:last-child {
        border-right: none;
      }
    }
  }
  .footer {
    width: 100vw;
    height: 80px;
    text-align: center;
    margin-top: calc(20vh - 110px);
  }
`;
