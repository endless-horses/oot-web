import styled from 'styled-components';

interface WrapperProps {
  inversion?: 'true' | 'false';
}

export const Wrapper = styled.input<WrapperProps>`
  width: ${(props) => {
    if (props.inversion === 'true') {
      return '180px';
    } else {
      return '240px';
    }
  }};
  height: 60px;
  color: ${(props) => {
    if (props.inversion === 'true') {
      return '#000000';
    } else {
      return '#FFFFFF';
    }
  }};
  font-weight: ${(props) => {
    if (props.inversion === 'true') {
      return 'normal';
    } else {
      return '600';
    }
  }};
  font-size: 20px;
  background-color: ${(props) => {
    if (props.inversion === 'true') {
      return '#EEEEEE';
    } else {
      return '#161A2F';
    }
  }};
  border-radius: 12px;
  border: none;
`;
