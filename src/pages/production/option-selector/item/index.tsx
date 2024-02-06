import { useRecoilState } from 'recoil';
import { Container, ItemImage, ItemName } from './index.style';
import { selectedPatternIdState } from '@context/pattern';

interface ItemProps {
  id: number;
  name: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Item(props: ItemProps) {
  const [selectedItem] = useRecoilState(selectedPatternIdState);

  return (
    <Container className="item_cntr" onClick={props.onClick}>
      <ItemImage className={`item_image ${selectedItem === props.id ? 'selected' : ''}`} src={props.imageSrc} />
      <ItemName className="item_name">{props.name}</ItemName>
    </Container>
  );
}

export default Item;
