import Button from '@components/button';
import { Container } from './index.style';
import { useNavigate } from 'react-router';

interface ButtonGroupProps {
  step: number;
  position?: 'default' | 'absolute';
}

function ButtonGroup(props: ButtonGroupProps) {
  const navigate = useNavigate();

  return (
    <Container className="button_group" position={props.position}>
      {props.step > 0 ? (
        <Button text="이전" inversion onClick={() => navigate(`/production?step=${props.step - 1}`)} />
      ) : (
        <></>
      )}
      <Button
        text={props.step < 3 ? '다음 단계로' : '결과 확인하기'}
        onClick={() => {
          if (props.step < 3) navigate(`/production?step=${props.step + 1}`);
        }}
      />
    </Container>
  );
}

export default ButtonGroup;
