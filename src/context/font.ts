import { atom } from 'recoil';

export const selectedFontIdState = atom<number>({
  key: 'selectedFontIdState',
  default: 0,
});
