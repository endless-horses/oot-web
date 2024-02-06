import Header from '@components/header';
import { Container } from './index.style';
import { useEffect, useState } from 'react';
import { PatternData } from '@api/pattern.types';
import { Pattern } from '@api/pattern';
import TabMenu from './tab-menu';
import OptionSelector from './option-selector';
import { selectedPatternIdState } from '@context/pattern';
import Content from '@pages/production/content';
import { useRecoilState } from 'recoil';
import ButtonGroup from './button-group';
import { useSearchParams } from 'react-router-dom';
import { WheelData } from '@api/wheel.types';
import { FontData } from '@api/font.types';
import { ColorData } from '@api/color.types';
import { AccessoryData } from '@api/accessory.types';
import { Wheel } from '@api/wheel';
import { Font } from '@api/font';
import { Color } from '@api/color';
import { Accessory } from '@api/accessory';
import { selectedWheelIdState } from '@context/wheel';

function CustomPattern() {
  const [searchParams] = useSearchParams();
  const [patterns, setPatterns] = useState<PatternData[]>([]);
  const [wheels, setWheels] = useState<WheelData[]>([]);
  const [fonts, setFonts] = useState<FontData[]>([]);
  const [colors, setColors] = useState<ColorData[]>([]);
  const [accessories, setAccessories] = useState<AccessoryData[]>([]);
  const [selectedPattern] = useRecoilState(selectedPatternIdState);
  const [selectedWheel] = useRecoilState(selectedWheelIdState);
  const step: number = Number(searchParams.get('step'));

  if (step < 0 || step > 3) {
    return <div>올바르지 않은 접근입니다.</div>;
  }

  useEffect(() => {
    const getData = async () => {
      const [patterns, wheels, fonts, colors, accessories] = await Promise.all([
        Pattern.list(),
        Wheel.list(),
        Font.list(),
        Color.list(),
        Accessory.list(),
      ]);
      setPatterns(patterns);
      setWheels(wheels);
      setFonts(fonts);
      setColors(colors);
      setAccessories(accessories);
    };
    getData();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <TabMenu step={step} />
        {step === 0 && <Content data={patterns[selectedPattern]} />}
        {step === 1 && <Content data={wheels[selectedWheel]} />}
        <div className="footer">
          {step === 0 && <OptionSelector type="square" data={patterns} />}
          {step === 1 && <OptionSelector type="square" data={wheels} />}
          {step === 2 && <OptionSelector type="circle" data={fonts} />}
          {step === 2 && <OptionSelector type="circle" data={colors} />}
          {step === 3 && <OptionSelector type="square" data={accessories} />}
          <ButtonGroup step={step} />
        </div>
      </Container>
    </>
  );
}

export default CustomPattern;
