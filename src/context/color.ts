import { atom } from 'recoil';

export const selectedColorIdState = atom<number>({
  key: 'selectedColorIdState',
  default: 0,
});
