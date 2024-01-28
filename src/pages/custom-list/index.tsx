import Header from '@components/header';
import { Container } from './index.style';
import { Pattern } from '@api/pattern';
import { useEffect, useState } from 'react';
import { PatternData } from '@api/pattern.types';
import { Wheel } from '@api/wheel';
import { WheelData } from '@api/wheel.types';
import { FontData } from '@api/font.types';
import { ColorData } from '@api/color.types';
import { AccessoryData } from '@api/accessory.types';
import { Font } from '@api/font';
import { Color } from '@api/color';
import { Accessory } from '@api/accessory';
import CustomGroup from '@components/custom-group';
import Button from '@components/button';
import { useNavigate } from 'react-router';

function CustomList() {
  const navigate = useNavigate();
  const [patterns, setPatterns] = useState<PatternData[]>([]);
  const [wheels, setWheels] = useState<WheelData[]>([]);
  const [fonts, setFonts] = useState<FontData[]>([]);
  const [colors, setColors] = useState<ColorData[]>([]);
  const [accessories, setAccessories] = useState<AccessoryData[]>([]);

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

  console.log(patterns);
  console.log(wheels);
  console.log(fonts);
  console.log(colors);
  console.log(accessories);

  return (
    <>
      <Header />
      <Container>
        <CustomGroup name="패턴 디자인" data={wheels} type="small" />
        <CustomGroup name="휠 디자인" data={wheels} type="small" />
        <CustomGroup name="측면 디자인" data={wheels} type="small" />
        <CustomGroup name="액세서리" data={accessories} type="small" />
        <div className="footer">
          <Button text="타이어 만들기" onClick={() => navigate('/')} />
        </div>
      </Container>
    </>
  );
}

export default CustomList;
