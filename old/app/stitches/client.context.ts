import { createContext } from 'react';

export type ClientStyleContextData = {
  reset: () => void;
  sheet: string;
};

const ClientStyleContext = createContext<ClientStyleContextData>({
  reset: () => null,
  sheet: '',
});

export { ClientStyleContext };
