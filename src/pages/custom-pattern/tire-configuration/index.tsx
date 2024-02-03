import Preview from '@pages/custom-pattern/preview';
import { Container } from './index.style';
import Summary from '@pages/custom-pattern/summary';
import { PatternData } from '@api/pattern.types';
import { WheelData } from '@api/wheel.types';
import { AccessoryData } from '@api/accessory.types';

interface ConfigulationProps {
  data: PatternData | WheelData | AccessoryData;
}

function TireConfigulation(props: ConfigulationProps) {
  return (
    <Container>
      <Preview />
      <Summary data={props.data} />
    </Container>
  );
}

export default TireConfigulation;
