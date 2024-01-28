import { Container } from './index.style';

interface CustomItemProps {
  name: string;
  imageSrc?: string;
  type?: 'small' | 'large';
}

function CustomItem(props: CustomItemProps) {
  return (
    <Container className="item" type={props.type}>
      <img className="item_image" src={props.imageSrc} alt={props.name + '-image'}></img>
      <div className="item_name">{props.name}</div>
    </Container>
  );
}

export default CustomItem;
