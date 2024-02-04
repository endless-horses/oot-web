import Header from '@components/header';
import { Container } from './index.style';
import Logo from '@components/logo';
import mainImage from '@assets/image/main-tire.png';
import CustomList from '@pages/item-list';
import { useEffect, useRef, useState } from 'react';
import ScrollIcon from '@pages/main/scroll-icon';

function Main() {
  const [scroll, setScroll] = useState(0);
  const wheel = useRef<null | HTMLDivElement>(null);

  const onScrollFunction = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    scrollFunction();
  }, [scroll]);

  const scrollFunction = () => {
    if (scroll > 0 && scroll < 800) {
      wheel.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      return;
    }
  };

  const clickFunction = () => {
    wheel.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header inversion></Header>
      <Container onWheel={onScrollFunction}>
        <div className="content">
          <Logo type="large" />
          <div className="title">Outfit Of Tire</div>
          <img className="image" src={mainImage} alt="tire_example" />
        </div>
        <div className="footer" onClick={clickFunction}>
          <ScrollIcon />
        </div>
      </Container>
      <CustomList ref={wheel} />
    </>
  );
}

export default Main;
