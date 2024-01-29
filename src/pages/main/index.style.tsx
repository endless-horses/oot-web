import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(#ffffff, #9ba4b4);
  font-weight: 700;
  .content {
    display: flex;
  }
  .logo {
    margin: 270px 150px;
  }
  .title {
    margin: 280px 20px;
    font-size: 8cqh;
  }
  .image {
    margin: 100px 80px;
    width: 528px;
    height: 541px;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    font-size: 25px;
    font-weight: 200;
  }
`;
