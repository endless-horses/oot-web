import useCustomData from '@hooks/useCustomData';
import { Container, Explanation, Name, Price } from './index.style';
import { useSearchParams } from 'react-router-dom';
import { selectedPatternState } from '@context/pattern';
import { useRecoilState } from 'recoil';
import { selectedWheelState } from '@context/wheel';
import { selectedFontState } from '@context/font';
import { selectedColorState } from '@context/color';
import { selectedAccessoryState } from '@context/accessory';

function formatCurrency(price: number) {
  return '+ ' + price.toLocaleString('ko-KR') + '원';
}

function Summary() {
  const [searchParams] = useSearchParams();
  const step: number = Number(searchParams.get('step'));
  const { pattern, wheel, font, color, accessory } = useCustomData();
  const [selectedPattern] = useRecoilState(selectedPatternState);
  const [selectedWheel] = useRecoilState(selectedWheelState);
  const [selectedFont] = useRecoilState(selectedFontState);
  const [selectedColor] = useRecoilState(selectedColorState);
  const [selectedAccessory] = useRecoilState(selectedAccessoryState);

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
    case 3:
      return (
        <Container className="summary">
          <div className="top">
            <Name>{accessory[selectedAccessory].name}</Name>
            <Price>{formatCurrency(accessory[selectedAccessory].price)}</Price>
          </div>
          <hr className="sep" />
          <Explanation>
            <p>{accessory[selectedAccessory].explanation}</p>
          </Explanation>
        </Container>
      );
    default:
      return <div>Error...</div>;
  }
}

export default Summary;
