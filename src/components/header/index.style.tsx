import styled from 'styled-components';

interface WrapperProps {
  inversion: boolean;
}

const Container = styled.div<WrapperProps>`
  width: 100vw - 20px;
  height: 100px;
  background-color: ${(props) => {
    if (props.inversion) {
      return 'transparent';
    } else {
      return '#161A2F';
    }
  }};
  display: flex;
  align-items: center;
  padding-left: 120px;
  font-weight: 600;
  .title {
    padding: 0 20px;
    font-size: 25px;
    color: ${(props) => {
      if (props.inversion) {
        return '#161A2F';
      } else {
        return '#FFFFFF';
      }
    }};
  }
  .sep {
    border-left: thin solid;
    height: 30px;
    color: ${(props) => {
      if (props.inversion) {
        return '#161A2F';
      } else {
        return '#FFFFFF';
      }
    }};
  }
`;

export default Container;
