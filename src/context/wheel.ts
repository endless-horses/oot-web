import { atom } from 'recoil';

export const selectedWheelState = atom<number>({
  key: 'selectedWheelIdState',
  default: 0,
});
