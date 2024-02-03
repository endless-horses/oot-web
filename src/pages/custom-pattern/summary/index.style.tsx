import styled from 'styled-components';

// interface ContainerProps {
//   name: string;
//   price: number;
//   explanation: string;
// }

export const Name = styled.div`
  font-size: 30px;
  font-weight: 600;
  padding: 30px 50px;
`;

export const Price = styled.div`
  padding: 30px 50px;
  font-size: 30px;
`;

export const Explanation = styled.div`
  font-size: 25px;
  padding: 30px 50px;
`;

export const Container = styled.div`
  .top {
    display: flex;
    justify-content: space-between;
  }
  .sep {
    border-top: 1px solid #000000;
    margin: 0 30px;
  }
  width: 700px;
  height: 450px;
  border-radius: 50px;
  background-color: #f1f6f9;
`;