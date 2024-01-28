import { Container } from './index.style';

interface CustomItemProps {
  name: string;
  imageSrc: string;
}

function CustomItem(props: CustomItemProps) {
  return (
    <Container>
      <img className="item_image" src={props.imageSrc} alt={props.name + '-image'}></img>
      <div className="item_name">{props.name}</div>
    </Container>
  );
}

export default CustomItem;
