import useCustomData from '@hooks/useCustomData';
import { Container, Explanation, Name, Price } from './index.style';
import { useSearchParams } from 'react-router-dom';
import { selectedPatternIdState } from '@context/pattern';
import { useRecoilState } from 'recoil';
import { selectedWheelIdState } from '@context/wheel';
import { selectedFontIdState } from '@context/font';
import { selectedColorIdState } from '@context/color';

function formatCurrency(price: number) {
  return '+ ' + price.toLocaleString('ko-KR') + '원';
}

function Summary() {
  const [searchParams] = useSearchParams();
  const step: number = Number(searchParams.get('step'));
  const { pattern, wheel, font, color, accessory } = useCustomData();
  const [selectedPattern] = useRecoilState(selectedPatternIdState);
  const [selectedWheel] = useRecoilState(selectedWheelIdState);
  const [selectedFont] = useRecoilState(selectedFontIdState);
  const [selectedColor] = useRecoilState(selectedColorIdState);

  if (!pattern.length || !wheel.length || !font.length || !color.length || !accessory.length) {
    return <div>Loading...</div>;
  }

  switch (step) {
    case 0:
      return (
        <Container className="summary">
          <div className="top">
            <Name>{pattern[selectedPattern].name}</Name>
            <Price>{formatCurrency(pattern[selectedPattern].price)}</Price>
          </div>
          <hr className="sep" />
          <Explanation>
            <p>{pattern[selectedPattern].explanation}</p>
          </Explanation>
        </Container>
      );
    case 1:
      return (
        <Container className="summary">
          <div className="top">
            <Name>{wheel[selectedWheel].name}</Name>
            <Price>{formatCurrency(wheel[selectedWheel].price)}</Price>
          </div>
          <hr className="sep" />
          <Explanation>
            <p>{wheel[selectedWheel].explanation}</p>
          </Explanation>
        </Container>
      );
    case 2:
      return (
        <Container className="summary">
          <div className="top">
            <Name>{`${font[selectedFont].name}/${color[selectedColor].name}`}</Name>
            <Price>{formatCurrency(font[selectedFont].price)}</Price>
          </div>
          <hr className="sep" />
          <Explanation>
            <p
              className="font_example"
              style={{ color: color[selectedColor].name, fontFamily: font[selectedFont].name }}
            >
              Outfit Of Tire
            </p>
          </Explanation>
        </Container>
      );
    default:
      return <div>Error...</div>;
  }
}

export default Summary;
