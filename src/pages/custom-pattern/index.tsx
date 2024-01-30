import Header from '@components/header';
import { Container } from './index.style';
import ProgressBar from './progress-bar';

function CustomPattern() {
  return (
    <>
      <Container>
        <Header />
        <ProgressBar selectedItem={1} />
      </Container>
    </>
  );
}

export default CustomPattern;
