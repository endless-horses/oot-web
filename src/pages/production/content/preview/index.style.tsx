import styled from 'styled-components';
import defaultImage from '@assets/image/default-image.png';

export const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${defaultImage});
  background-size: cover;
`;
