import { Container } from './index.style';

interface ItemProps {
  name: string;
  imageSrc?: string;
  type?: 'square' | 'circle';
}

function Item(props: ItemProps) {
  return (
    <Container className="item" type={props.type}>
      <img className="item_image" src={props.imageSrc} alt={props.name + '-image'}></img>
      <div className="item_name">{props.name}</div>
    </Container>
  );
}

export default Item;
