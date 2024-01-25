import styled from "styled-components";

interface WrapperProps {
  inversion: boolean;
}

const Container = styled.div<WrapperProps>`
  width: 100vw;
  height: 100px;
  background-color: ${props => {
    if (props.inversion) {
      return '#FFFFFF';
    } else {
      return '#161A2F';
    }
  }};
  display: flex;
  align-items: center;
  padding-left: 120px;
  font-weight: 500;
  
  .title {
    padding: 0 20px;
    font-size: 25px;
    color: ${props => {
      if (props.inversion) {
        return '#161A2F';
      } else {
        return '#FFFFFF';
      }
    }};
  }

  .sep {
    border-left : thin solid;
    height : 30px;
    color: ${props => {
      if (props.inversion) {
        return '#161A2F';
      } else {
        return '#FFFFFF';
      }
    }};
  }
`;

export default Container;