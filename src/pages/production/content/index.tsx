import Preview from '@pages/production/content/preview';
import { Container } from './index.style';
import Summary from '@pages/production/content/summary';
import { PatternData } from '@api/pattern.types';
import { WheelData } from '@api/wheel.types';
import { AccessoryData } from '@api/accessory.types';

interface ContentProps {
  data: PatternData | WheelData | AccessoryData;
}

function Content(props: ContentProps) {
  if (!props.data) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="content">
      <Preview />
      <Summary data={props.data} />
    </Container>
  );
}

export default Content;
