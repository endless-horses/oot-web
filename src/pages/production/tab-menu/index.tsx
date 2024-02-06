import { Container, Title } from './index.style';

interface TabMenuProps {
  step: number;
}

function TabMenu(props: TabMenuProps) {
  return (
    <>
      <Container>
        <Title selected={props.step == 0}>패턴 디자인 선택</Title>
        <Title selected={props.step == 1}>휠 모양 선택</Title>
        <Title selected={props.step == 2}>측면 디자인 선택</Title>
        <Title selected={props.step == 3}>액세서리 선택</Title>
      </Container>
    </>
  );
}

export default TabMenu;
