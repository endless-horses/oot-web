import { atom } from 'recoil';

export const selectedAccessoryState = atom<number>({
  key: 'selectedAccessoryState',
  default: 0,
});
