import Button from '@components/button';
import { Container } from './index.style';
import { useNavigate } from 'react-router';

interface ButtonGroupProps {
  step: number;
}

function ButtonGroup(props: ButtonGroupProps) {
  const navigate = useNavigate();

  return (
    <Container>
      {props.step > 0 ? (
        <Button text="이전" inversion onClick={() => navigate(`/production?step=${props.step - 1}`)} />
      ) : (
        <></>
      )}
      <Button
        text={props.step < 3 ? '다음 단계로' : '결과 확인하기'}
        onClick={() => {
          if (props.step < 2) navigate(`/production?step=${props.step + 1}`);
        }}
      />
    </Container>
  );
}

export default ButtonGroup;
