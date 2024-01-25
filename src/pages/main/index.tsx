import Header from '@components/header';
import { Container } from './index.style';
import Logo from '@components/logo';
import mainImage from '@assets/image/main-tire.png';

function Main() {
  return (
    <Container>
      <Header inversion={true}></Header>
      <div className="content">
        <Logo inversion={false} type="large" />
        <div className="title">Outfit Of Tire</div>
        <img className="image" src={mainImage} alt="tire_example" />
      </div>
    </Container>
  );
}

export default Main;
