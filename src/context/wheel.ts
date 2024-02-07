import { atom } from 'recoil';

export const selectedWheelIdState = atom<number>({
  key: 'selectedWheelIdState',
  default: 0,
});
