import Header from '@components/header';
import { Container } from './index.style';
import Logo from '@components/logo';
import mainImage from '@assets/image/main-tire.png';
import Icon from '@components/icon';
import scrollIcon from '@assets/icon/scroll.svg';
import { useNavigate } from 'react-router';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Header inversion></Header>
      <Container>
        <div className="content">
          <Logo type="large" />
          <div className="title">Outfit Of Tire</div>
          <img className="image" src={mainImage} alt="tire_example" />
        </div>
        <div
          className="footer"
          onClick={() => {
            navigate('/custom-list');
          }}
        >
          <Icon icon={scrollIcon} text="Scroll" />
        </div>
      </Container>
    </>
  );
}

export default Main;
