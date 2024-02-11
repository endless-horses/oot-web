import { useRecoilState } from 'recoil';
import { Container, ItemImage, ItemName } from './index.style';
import { selectedPatternState } from '@context/pattern';
import { selectedWheelState } from '@context/wheel';
import { selectedFontState } from '@context/font';
import { selectedColorState } from '@context/color';
import { selectedAccessoryState } from '@context/accessory';

interface ItemProps {
  id: number;
  data: 'pattern' | 'wheel' | 'font' | 'color' | 'accessory';
  name: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Item(props: ItemProps) {
  const [selectedPattern] = useRecoilState(selectedPatternState);
  const [selectedWheel] = useRecoilState(selectedWheelState);
  const [selectedFont] = useRecoilState(selectedFontState);
  const [selectedColor] = useRecoilState(selectedColorState);
  const [selectedAccessory] = useRecoilState(selectedAccessoryState);

  return (
    <Container className="item_cntr" onClick={props.onClick}>
      {props.data === 'pattern' && (
        <ItemImage className={`item_image ${selectedPattern === props.id ? 'selected' : ''}`} src={props.imageSrc} />
      )}
      {props.data === 'wheel' && (
        <ItemImage className={`item_image ${selectedWheel === props.id ? 'selected' : ''}`} src={props.imageSrc} />
      )}
      {props.data === 'font' && (
        <ItemImage className={`item_image ${selectedFont === props.id ? 'selected' : ''}`} src={props.imageSrc} />
      )}
      {props.data === 'color' && (
        <ItemImage
          className={`item_image ${selectedColor === props.id ? 'selected' : ''}`}
          src={props.imageSrc}
          type="circle"
        />
      )}
      {props.data === 'accessory' && (
        <ItemImage className={`item_image ${selectedAccessory === props.id ? 'selected' : ''}`} src={props.imageSrc} />
      )}
      <ItemName className="item_name">{props.name}</ItemName>
    </Container>
  );
}

export default Item;
