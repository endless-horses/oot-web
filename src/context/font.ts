import { atom } from 'recoil';

export const selectedFontState = atom<number>({
  key: 'selectedFontIdState',
  default: 0,
});
