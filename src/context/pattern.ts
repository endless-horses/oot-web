import { atom } from 'recoil';

export const selectedPatternState = atom<number>({
  key: 'selectedPatternState',
  default: 0,
});
