import { ItemState } from './ListProvider';

type ListActionType = {
  type: 'Add Item' | 'Delete Item' | 'Delete List';
  payload?: ItemState;
};

export const ListReducer = (
  state: ItemState[],
  action: ListActionType,
): ItemState[] => {
  switch (action.type) {
    case 'Add Item': {
      localStorage.setItem(
        'list',
        JSON.stringify([...state, action.payload] as ItemState[]),
      );
      return JSON.parse(localStorage.getItem('list') || '');
    }

    case 'Delete Item': {
      let existItem = state.find((el) => action.payload?.id === el.id);
      localStorage.setItem(
        'list',
        JSON.stringify([...state, action.payload] as ItemState[]),
      );

      localStorage.setItem(
        'list',
        JSON.stringify([...state.filter((el) => el.id !== existItem?.id)]),
      );

      let lista = JSON.parse(localStorage.getItem('list') || '');
      return lista;
    }

    case 'Delete List': {
      localStorage.setItem('list', JSON.stringify([]));
      return JSON.parse(localStorage.getItem('list') || '');
    }

    default:
      return state;
  }
};
