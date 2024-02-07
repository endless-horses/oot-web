import { useRecoilState } from 'recoil';
import { Container, ItemImage, ItemName } from './index.style';
import { selectedPatternIdState } from '@context/pattern';
import { selectedWheelIdState } from '@context/wheel';
import { selectedColorIdState } from '@context/color';
import { selectedFontIdState } from '@context/font';

interface ItemProps {
  id: number;
  data: 'pattern' | 'wheel' | 'font' | 'color' | 'accessory';
  name: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Item(props: ItemProps) {
  const [selectedPattern] = useRecoilState(selectedPatternIdState);
  const [selectedWheel] = useRecoilState(selectedWheelIdState);
  const [selectedFont] = useRecoilState(selectedFontIdState);
  const [selectedColor] = useRecoilState(selectedColorIdState);

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
      <ItemName className="item_name">{props.name}</ItemName>
    </Container>
  );
}

export default Item;
