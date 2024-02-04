import { AccessoryData } from '@api/accessory.types';
import { FontData } from '@api/font.types';
import { PatternData } from '@api/pattern.types';
import { WheelData } from '@api/wheel.types';
import { Container } from './index.style';
import CustomItem from '@components/custom-item';

interface CustomGroupProps {
  name?: string;
  data: PatternData[] | WheelData[] | FontData[] | AccessoryData[];
  type?: 'small' | 'large';
}

function CustomGroup(props: CustomGroupProps) {
  return (
    <Container className="item_group">
      <div className="title">{props.name}</div>
      {props.data.map((item, index) => (
        <CustomItem key={index} name={item.name} imageSrc={item.imageUrl} type={props.type} />
      ))}
    </Container>
  );
}

export default CustomGroup;
