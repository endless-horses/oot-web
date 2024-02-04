import { Container, Title } from './index.style';

interface ProgressBarProps {
  step: number;
}

function ProgressBar(props: ProgressBarProps) {
  return (
    <>
      <Container>
        <Title selected={props.step == 1}>패턴 디자인 선택</Title>
        <Title selected={props.step == 2}>휠 모양 선택</Title>
        <Title selected={props.step == 3}>측면 디자인 선택</Title>
        <Title selected={props.step == 4}>액세서리 선택</Title>
      </Container>
    </>
  );
}

export default ProgressBar;
