import styled from "styled-components";

interface WrapperProps {
  image: string;
  type?: 'small' | 'large';
}

export const Wrapper = styled.div<WrapperProps>`
  background-image: url(${props => props.image});
  width: ${props => {
    switch (props.type) {
      case 'small':
        return '60px';
      default:
        return '147px';
    }
  }};
  height: ${props => {
    switch (props.type) {
      case 'small':
        return '53px';
      default:
        return '130px';
    }
  }};
  background-size: cover;
`;