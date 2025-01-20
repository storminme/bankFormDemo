import { createContext } from 'react';
import { AppContextProps } from '../types/types.ts';

export const AppContext = createContext<AppContextProps | undefined>(undefined);
