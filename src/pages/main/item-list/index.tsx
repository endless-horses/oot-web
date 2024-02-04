import Header from '@components/header';
import { Container } from './index.style';
import { Pattern } from '@api/pattern';
import { forwardRef, useEffect, useState } from 'react';
import { PatternData } from '@api/pattern.types';
import { Wheel } from '@api/wheel';
import { WheelData } from '@api/wheel.types';
import { FontData } from '@api/font.types';
import { ColorData } from '@api/color.types';
import { AccessoryData } from '@api/accessory.types';
import { Font } from '@api/font';
import { Color } from '@api/color';
import { Accessory } from '@api/accessory';
import ItemGroup from '@pages/main/item-list/item-group';
import Button from '@components/button';
import { useNavigate } from 'react-router';

const CustomList = forwardRef<HTMLDivElement>((props, ref) => {
  const navigate = useNavigate();
  const [patterns, setPatterns] = useState<PatternData[]>([]);
  const [wheels, setWheels] = useState<WheelData[]>([]);
  const [fonts, setFonts] = useState<FontData[]>([]);
  const [colors, setColors] = useState<ColorData[]>([]);
  const [accessories, setAccessories] = useState<AccessoryData[]>([]);
  const [scroll, setScroll] = useState(0);

  const onScrollFunction = () => {
    setScroll(window.scrollY);
  };

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
    onScrollFunction();
  }, [scroll]);

  return (
    <>
      <Header />
      <Container onWheel={onScrollFunction} ref={ref}>
        <ItemGroup name="패턴 디자인" data={patterns} />
        <ItemGroup name="휠 디자인" data={wheels} />
        <div className="flex_cntr">
          <ItemGroup name="측면 디자인" data={fonts} />
          <ItemGroup name="색상" data={colors} type="circle" />
        </div>
        <ItemGroup name="액세서리" data={accessories} />
        <div className="footer">
          <Button text="타이어 만들기" onClick={() => navigate('/custom')} />
        </div>
      </Container>
    </>
  );
});

CustomList.displayName = 'CustomList';

export default CustomList;
