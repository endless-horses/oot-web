import Button from '@components/button';
import { Container } from './index.style';

interface ButtonGroupProps {
  step: 0 | 1 | 2 | 3;
}

function ButtonGroup(props: ButtonGroupProps) {
  return (
    <Container>
      {props.step > 0 ? <Button text="이전" inversion onClick={() => {}} /> : <></>}
      <Button text={props.step < 3 ? '다음 단계로' : '결과 확인하기'} onClick={() => {}} />
    </Container>
  );
}

export default ButtonGroup;
