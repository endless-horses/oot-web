import { AccessoryData } from '@api/accessory.types';
import { ColorData } from '@api/color.types';
import { FontData } from '@api/font.types';
import { PatternData } from '@api/pattern.types';
import { WheelData } from '@api/wheel.types';
import { Container } from './index.style';
import Item from './item';
import { useRecoilState } from 'recoil';
import { selectedPatternIdState } from '@context/pattern';

interface OptionSelectorProps {
  type: 'square' | 'circle';
  name?: string;
  data: PatternData[] | WheelData[] | FontData[] | AccessoryData[] | ColorData[];
}

function OptionSelector(props: OptionSelectorProps) {
  const [, setSelectedItem] = useRecoilState(selectedPatternIdState);

  return (
    <Container className="option_selector" type={props.type}>
      {props.data.map((item, index) => (
        <Item key={index} name={item.name} imageSrc={item.imageUrl} onClick={() => setSelectedItem(index)} />
      ))}
    </Container>
  );
}

export default OptionSelector;
