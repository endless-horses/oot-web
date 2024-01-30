import styled from 'styled-components';

interface TitleProps {
  selected?: boolean;
}

export const Title = styled.div<TitleProps>`
  width: 100%;
  font-weight: 600;
  font-size: ${(props) => {
    if (props.selected) {
      return '30px';
    } else {
      return '25px';
    }
  }};
  color: ${(props) => {
    if (props.selected) {
      return '#000000';
    } else {
      return '#969696';
    }
  }};
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
  background-color: #f1f6f9;
  div {
    border-right: thin solid #969696;
    &:last-child {
      border-right: none;
    }
  }
`;
