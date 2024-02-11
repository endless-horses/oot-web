import Logo from '@components/logo';
import Container from './index.style';
import { useNavigate } from 'react-router';

interface HeaderProps {
  inversion?: boolean;
}

function Header(props: HeaderProps) {
  const navigate = useNavigate();

  return (
    <Container inversion={props.inversion ? 'true' : 'false'}>
      <div className="link" onClick={() => navigate('/')}>
        <Logo inversion={props.inversion ? 'false' : 'true'} type="small" />
        <div className="title">Outfit Of Tire</div>
        <div className="sep" />
        <div className="title">내 타이어 만들기</div>
      </div>
    </Container>
  );
}

export default Header;
