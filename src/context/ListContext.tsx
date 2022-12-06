import { createContext, FormEvent } from 'react';
import { ItemState } from './ListProvider';

export interface ContextProps {
  list: ItemState[];
  addToList: (item: ItemState) => void;
  deleteFromList: (item: ItemState) => void;
  title: string;
  handleChange: (e: FormEvent<HTMLInputElement>) => void;
}

export const ListContext = createContext({} as ContextProps);
