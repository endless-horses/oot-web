import { AccessoryData } from '@api/accessory.types';
import { ColorData } from '@api/color.types';
import { FontData } from '@api/font.types';
import { PatternData } from '@api/pattern.types';
import { WheelData } from '@api/wheel.types';
import { Container } from './index.style';
import Item from './item';
import { useRecoilState } from 'recoil';
import { selectedPatternIdState } from '@context/pattern';
import { useSearchParams } from 'react-router-dom';
import { selectedWheelIdState } from '@context/wheel';

interface OptionSelectorProps {
  type: 'square' | 'circle';
  name?: string;
  data: PatternData[] | WheelData[] | FontData[] | AccessoryData[] | ColorData[];
}

function OptionSelector(props: OptionSelectorProps) {
  const [searchParams] = useSearchParams();
  const [, setSelectedPattern] = useRecoilState(selectedPatternIdState);
  const [, setSelectedWheel] = useRecoilState(selectedWheelIdState);
  const step: number = Number(searchParams.get('step'));

  return (
    <Container className="option_selector" type={props.type}>
      {props.data.map((item, index) => (
        <Item
          id={index}
          key={index}
          name={item.name}
          imageSrc={item.imageUrl}
          onClick={() => {
            {
              step === 0 && setSelectedPattern(index);
            }
            {
              step === 1 && setSelectedWheel(index);
            }
          }}
        />
      ))}
    </Container>
  );
}

export default OptionSelector;
