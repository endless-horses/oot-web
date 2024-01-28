import styled from 'styled-components';

interface WrapperProps {
  icon: string;
}

export const Wrapper = styled.div<WrapperProps>`
  background-image: url(${(props) => props.icon});
  width: 50px;
  height: 50px;
  display: block;
  margin: 10px auto;
`;
