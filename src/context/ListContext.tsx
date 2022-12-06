import { createContext, FormEvent } from 'react';
import { ItemState } from './ListProvider';

export interface ContextProps {
  list: ItemState[];
  addToList: () => void;
  deleteFromList: (item: ItemState) => void;
  title: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
  deleteList: () => void;
}

export const ListContext = createContext({} as ContextProps);
