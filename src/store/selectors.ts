import { selector } from 'recoil';
import { defaultState, singleValueState, multiValueState } from '@/store/atoms';

export const doubledCounterSelector = selector<TDefaultState>({
  key: 'doubledCounterSelector',
  get: ({ get }) => {
    const counter = get(defaultState);
    return counter * 2;
  },
});

export const uppercaseUsernameSelector = selector<TSingleValueState>({
  key: 'uppercaseSelector',
  get: ({ get }) => {
    const str = get(singleValueState);
    return str.toUpperCase();
  },
});

export const completedTodoListSelector = selector<TMultiValueState>({
  key: 'checkedListSelector',
  get: ({ get }) => {
    const todoList = get(multiValueState);
    return todoList.filter(todo => todo.checked);
  },
});
