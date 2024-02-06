import { useRecoilState } from 'recoil';
import { Container, ItemImage, ItemName } from './index.style';
import { selectedPatternIdState } from '@context/pattern';
import { selectedWheelIdState } from '@context/wheel';
import { useSearchParams } from 'react-router-dom';

interface ItemProps {
  id: number;
  name: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Item(props: ItemProps) {
  const [searchParams] = useSearchParams();
  const [selectedPattern] = useRecoilState(selectedPatternIdState);
  const [selectedWheel] = useRecoilState(selectedWheelIdState);
  const step: number = Number(searchParams.get('step'));

  return (
    <Container className="item_cntr" onClick={props.onClick}>
      {step === 0 && (
        <ItemImage className={`item_image ${selectedPattern === props.id ? 'selected' : ''}`} src={props.imageSrc} />
      )}
      {step === 1 && (
        <ItemImage className={`item_image ${selectedWheel === props.id ? 'selected' : ''}`} src={props.imageSrc} />
      )}
      <ItemName className="item_name">{props.name}</ItemName>
    </Container>
  );
}

export default Item;
