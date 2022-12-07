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

export type errorType = 'Input Vacio' | 'Regalo Repetido' | 'none';

export const ListProvider: FC<Props> = ({ children }) => {
  const [list, dispatch] = useReducer(ListReducer, Item_INITIAL_STATE);
  const [title, setTitle] = useState<string>('');
  const [errorType, setErrorType] = useState<errorType>('none');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const addToList = () => {
    if (title !== '') {
      let exist = list.find((el) => el.title === title);
      if (!exist) {
        let item: ItemState = {
          id: Date.now(),
          title,
        };

        dispatch({ type: 'Add Item', payload: item });
        setTitle('');
        setErrorType('none');
      } else {
        setErrorType('Regalo Repetido');
        setTitle('');
      }
    } else {
      setErrorType('Input Vacio');
    }
  };

  const deleteFromList = (item: ItemState) => {
    dispatch({ type: 'Delete Item', payload: item });
  };

  const deleteList = () => {
    dispatch({ type: 'Delete List' });
    setErrorType('none');
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
        errorType,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
