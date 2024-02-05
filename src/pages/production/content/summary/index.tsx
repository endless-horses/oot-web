import { Container, Explanation, Name, Price } from './index.style';
import { PatternData } from '@api/pattern.types';
import { WheelData } from '@api/wheel.types';
import { AccessoryData } from '@api/accessory.types';

interface SummaryProps {
  data: PatternData | WheelData | AccessoryData;
}

function formatCurrency(price: number) {
  return '+ ' + price.toLocaleString('ko-KR') + '원';
}

function Summary(props: SummaryProps) {
  return (
    <Container className="summary">
      <div className="top">
        <Name>{props.data.name}</Name>
        <Price>{formatCurrency(props.data.price)}</Price>
      </div>
      <hr className="sep" />
      <Explanation>
        <p>{props.data.explanation}</p>
      </Explanation>
    </Container>
  );
}

export default Summary;
