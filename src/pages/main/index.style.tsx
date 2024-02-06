import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#ffffff, #9ba4b4);
  font-weight: 700;
  .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 80px;
    .logo {
    }
    .title {
      min-width: 500px;
      font-size: 80px;
    }
    .image {
      max-width: 500px;
    }
  }
  .footer {
    width: 100vw;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    font-weight: 200;
    position: absolute;
    bottom: -40px;
    cursor: pointer;
  }
`;
