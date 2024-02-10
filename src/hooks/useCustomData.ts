import { Accessory } from '@api/accessory';
import { AccessoryData } from '@api/accessory.types';
import { Color } from '@api/color';
import { ColorData } from '@api/color.types';
import { Font } from '@api/font';
import { FontData } from '@api/font.types';
import { Pattern } from '@api/pattern';
import { PatternData } from '@api/pattern.types';
import { Wheel } from '@api/wheel';
import { WheelData } from '@api/wheel.types';
import { useEffect, useState } from 'react';

function useCustomData() {
  const [pattern, setPattern] = useState<PatternData[]>([]);
  const [wheel, setWheel] = useState<WheelData[]>([]);
  const [font, setFont] = useState<FontData[]>([]);
  const [color, setColor] = useState<ColorData[]>([]);
  const [accessory, setAccessory] = useState<AccessoryData[]>([]);

  useEffect(() => {
    const getData = async () => {
      const [patterns, wheels, fonts, colors, accessories] = await Promise.all([
        Pattern.list(),
        Wheel.list(),
        Font.list(),
        Color.list(),
        Accessory.list(),
      ]);
      setPattern(patterns);
      setWheel(wheels);
      setFont(fonts);
      setColor(colors);
      setAccessory(accessories);
    };
    getData();
  }, []);

  return { pattern, wheel, font, color, accessory };
}

export default useCustomData;
