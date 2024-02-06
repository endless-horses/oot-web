import { atom } from 'recoil';

export const selectedPatternIdState = atom<number>({
  key: 'selectedPatternState',
  default: 0,
});
