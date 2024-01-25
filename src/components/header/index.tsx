import Logo from "@components/logo";
import Container from "./index.style";

interface HeaderProps {
  inversion: boolean;
}

function Header(props: HeaderProps) {
  return <Container inversion={props.inversion}>
    <Logo inversion={!props.inversion} type='small' />
    <div className="title">Outfit Of Tire</div>
    <div className="sep" />
    <div className="title">내 타이어 만들기</div>
  </Container>
}

export default Header;