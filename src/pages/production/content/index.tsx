import Preview from '@pages/production/content/preview';
import { Container } from './index.style';
// import Summary from '@pages/production/content/summary';

interface ContentProps {
  direction?: 'row' | 'column';
}

function Content(props: ContentProps) {
  return (
    <Container className="content" direction={props.direction}>
      <Preview />
      <div>Hi</div>
      {/* <Summary data={props.data} /> */}
    </Container>
  );
}

export default Content;
