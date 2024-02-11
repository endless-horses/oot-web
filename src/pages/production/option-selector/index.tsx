import { Container, Title } from './index.style';
import Item from './item';
import { useRecoilState } from 'recoil';
import useCustomData from 'hooks/useCustomData';
import { selectedPatternState } from '@context/pattern';
import { selectedWheelState } from '@context/wheel';
import { selectedFontState } from '@context/font';
import { selectedColorState } from '@context/color';
import { selectedAccessoryState } from '@context/accessory';

interface OptionSelectorProps {
  shape: 'square' | 'circle';
  name?: string;
  data: 'pattern' | 'wheel' | 'font' | 'color' | 'accessory';
}

function OptionSelector(props: OptionSelectorProps) {
  const [, setSelectedPattern] = useRecoilState(selectedPatternState);
  const [, setSelectedWheel] = useRecoilState(selectedWheelState);
  const [, setSelectedFont] = useRecoilState(selectedFontState);
  const [, setSelectedColor] = useRecoilState(selectedColorState);
  const [, setSelectedAccessory] = useRecoilState(selectedAccessoryState);
  const data = getData(props.data);

  return (
    <Container className="option_selector" type={props.shape}>
      {props.data === 'font' ? <Title className="title">폰트</Title> : null}
      {props.data === 'color' ? <Title className="title">색상</Title> : null}
      {(props.data === 'font' || props.data === 'color') && <div className="divider" />}
      <div className="item_group">
        {data.map((item, index) => (
          <Item
            id={index}
            data={props.data}
            key={index}
            name={item.name}
            imageSrc={item.imageUrl}
            onClick={() => {
              {
                props.data === 'pattern' && setSelectedPattern(index);
              }
              {
                props.data === 'wheel' && setSelectedWheel(index);
              }
              {
                props.data === 'font' && setSelectedFont(index);
              }
              {
                props.data === 'color' && setSelectedColor(index);
              }
              {
                props.data === 'accessory' && setSelectedAccessory(index);
              }
            }}
          />
        ))}
      </div>
    </Container>
  );
}

function getData(type: 'pattern' | 'wheel' | 'font' | 'color' | 'accessory') {
  const { pattern, wheel, font, color, accessory } = useCustomData();
  switch (type) {
    case 'pattern':
      return pattern;
    case 'wheel':
      return wheel;
    case 'font':
      return font;
    case 'color':
      return color;
    case 'accessory':
      return accessory;
  }
}

export default OptionSelector;
