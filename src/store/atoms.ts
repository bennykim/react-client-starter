import { atom } from 'recoil';

export const defaultState = atom<TDefaultState>({
  key: 'defaultState',
  default: 0,
});

export const singleValueState = atom<TSingleValueState>({
  key: 'singleValueState',
  default: 'Hello',
});

export const multiValueState = atom<TMultiValueState>({
  key: 'multiValueState',
  default: [{ checked: false }, { checked: false }],
});
