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

const Item_INITIAL_STATE: ItemState[] = [
  { id: 1, title: 'PS4' },
  { id: 2, title: 'Vittel Tone' },
  { id: 3, title: 'Fulbo' },
];

interface Props {
  children: ReactNode;
}

export const ListProvider: FC<Props> = ({ children }) => {
  const [list, dispatch] = useReducer(ListReducer, Item_INITIAL_STATE);
  const [title, setTitle] = useState<string>('');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const addToList = () => {
    let item: ItemState = {
      id: Date.now(),
      title,
    };
    dispatch({ type: 'Add Item', payload: item });
  };

  const deleteFromList = (item: ItemState) => {
    dispatch({ type: 'Delete Item', payload: item });
  };

  return (
    <ListContext.Provider
      value={{ list, addToList, deleteFromList, title, handleChange }}
    >
      {children}
    </ListContext.Provider>
  );
};
