import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(#FFFFFF, #9BA4B4);
  font-weight: 700;
  
  .content > .logo {
    float: left;
    margin-left: 220px;
    margin-top: 350px;
  }

  .content > .title {
    float: left;
    margin-left: 60px;
    margin-top: 370px;
    font-size: 8cqh;
  }

  .content > .image {
    float: left;
    margin-left: 200px;
    margin-top: 150px;
    width: 528px;
    height: 541px;
  }
`