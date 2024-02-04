import { Container, ItemImage, ItemName } from './index.style';

interface ItemProps {
  name: string;
  imageSrc: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function Item(props: ItemProps) {
  return (
    <Container className="item_cntr" onClick={props.onClick}>
      <ItemImage src={props.imageSrc} />
      <ItemName>{props.name}</ItemName>
    </Container>
  );
}

export default Item;
