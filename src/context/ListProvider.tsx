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
  quantity: string;
  image: string;
}

const Item_INITIAL_STATE: ItemState[] = JSON.parse(
  localStorage.getItem('list') || '',
);

interface Props {
  children: ReactNode;
}

export type errorType =
  | 'Input Vacio'
  | 'Regalo Repetido'
  | 'Cantidad Cero'
  | 'none';

export const ListProvider: FC<Props> = ({ children }) => {
  const [list, dispatch] = useReducer(ListReducer, Item_INITIAL_STATE);
  const [title, setTitle] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [errorType, setErrorType] = useState<errorType>('none');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleQuantity = (e: FormEvent<HTMLInputElement>) => {
    setQuantity(e.currentTarget.value);
  };

  const handleImage = (e: FormEvent<HTMLInputElement>) => {
    setImage(e.currentTarget.value);
  };

  const addToList = () => {
    if (quantity !== '' && title !== '') {
      let exist = list.find((el) => el.title === title);
      if (!exist) {
        let item: ItemState = {
          id: Date.now(),
          title,
          quantity,
          image,
        };

        dispatch({ type: 'Add Item', payload: item });
        setTitle('');
        setQuantity('');
        setImage('');
        setErrorType('none');
      } else {
        setErrorType('Regalo Repetido');
        setTitle('');
        setQuantity('');
      }
    } else {
      if (title == '') {
        setErrorType('Input Vacio');
      } else if (quantity == '') {
        setErrorType('Cantidad Cero');
      }
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
        handleQuantity,
        quantity,
        handleImage,
        image,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
