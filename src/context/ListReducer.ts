import { ItemState } from './ListProvider';

type ListActionType = {
  type: 'Add Item' | 'Delete Item';
  payload: ItemState;
};

export const ListReducer = (
  state: ItemState[],
  action: ListActionType,
): ItemState[] => {
  switch (action.type) {
    case 'Add Item': {
      return [...state, action.payload];
    }

    case 'Delete Item': {
      let existItem = state.find((el) => action.payload.id === el.id);

      return existItem
        ? [...state.filter((el) => el.id !== existItem?.id)]
        : [...state];
    }

    default:
      return state;
      break;
  }
  return state;
};
