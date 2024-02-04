import { AccessoryData } from '@api/accessory.types';
import { FontData } from '@api/font.types';
import { PatternData } from '@api/pattern.types';
import { WheelData } from '@api/wheel.types';
import { Container } from './index.style';
import Item from '@pages/main/item-list/item';

interface ItemGroupProps {
  name?: string;
  data: PatternData[] | WheelData[] | FontData[] | AccessoryData[];
}

function CustomGroup(props: ItemGroupProps) {
  return (
    <Container className="item_group">
      <div className="title">{props.name}</div>
      {props.data.map((item, index) => (
        <Item key={index} name={item.name} imageSrc={item.imageUrl} />
      ))}
    </Container>
  );
}

export default CustomGroup;
