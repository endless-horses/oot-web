import { AccessoryData } from './accessory.types';
import { ColorData } from './color.types';
import { FontData } from './font.types';
import { PatternData } from './pattern.types';
import { WheelData } from './wheel.types';

export interface PostResultBody {
  patternId: number;
  wheelId: number;
  fontId: number;
  colorId: number;
  accessoryId: number;
}

export interface ResultInfo {
  id: string;
}

export interface ResultData {
  id: string;
  pattern: PatternData;
  wheel: WheelData;
  font: FontData;
  color: ColorData;
  accessory: AccessoryData;
}
