import Header from '@components/header';
import { ButtonGroup, Container, Content } from './index.style';
import Preview from './preview';
import Summary from './summary';
import Button from '@components/button';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Container>
        <Header />
        <Content>
          <Preview />
          <Summary />
        </Content>
        <hr className="sep" />
        <ButtonGroup>
          <Button inversion onClick={() => navigate('/')} text="처음으로" />
          <Button
            onClick={() => {
              navigator.clipboard.writeText(`http://www.outfitoftire.co.kr/${location.pathname}`);
              alert('주소가 복사되었습니다.');
            }}
            text="공유하기"
          />
        </ButtonGroup>
      </Container>
    </>
  );
}

export default Result;
