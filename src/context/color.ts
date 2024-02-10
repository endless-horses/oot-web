import { atom } from 'recoil';

export const selectedColorState = atom<number>({
  key: 'selectedColorIdState',
  default: 0,
});
