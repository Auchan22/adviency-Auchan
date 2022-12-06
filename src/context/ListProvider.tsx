import {
  FC,
  FormEvent,
  ReactNode,
  SetStateAction,
  useReducer,
  useState,
} from 'react';
import { ListContext, ListReducer } from './';

export interface ItemState {
  id: number;
  title: string;
}

const Item_INITIAL_STATE: ItemState[] = [];

interface Props {
  children: ReactNode;
}

export const ListProvider: FC<Props> = ({ children }) => {
  const [list, dispatch] = useReducer(ListReducer, Item_INITIAL_STATE);
  const [title, setTitle] = useState<string>(' ');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const addToList = () => {
    if (title !== ' ') {
      let item: ItemState = {
        id: Date.now(),
        title,
      };

      dispatch({ type: 'Add Item', payload: item });
      setTitle(' ');
    } else {
      window.alert('El input debe tener un regalo');
    }
  };

  const deleteFromList = (item: ItemState) => {
    dispatch({ type: 'Delete Item', payload: item });
  };

  const deleteList = () => {
    dispatch({ type: 'Delete List' });
  };

  return (
    <ListContext.Provider
      value={{
        list,
        addToList,
        deleteFromList,
        title,
        handleChange,
        deleteList,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
