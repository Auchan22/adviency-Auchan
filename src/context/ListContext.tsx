import { createContext, FormEvent } from 'react';
import { errorType, ItemState } from './ListProvider';

export interface ContextProps {
  list: ItemState[];
  addToList: () => void;
  deleteFromList: (item: ItemState) => void;
  title: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  deleteList: () => void;
  errorType: errorType;
  handleQuantity: (e: FormEvent<HTMLInputElement>) => void;
  quantity: string;
}

export const ListContext = createContext({} as ContextProps);
